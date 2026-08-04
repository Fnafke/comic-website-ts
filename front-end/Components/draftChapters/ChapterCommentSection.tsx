import { Chapter, Comment } from "@/types";
import { useMemo, useState } from "react";
import DateConverter from "./DateConverter";
import useSWR from "swr";
import CommentService from "@/services/CommentService";

type Props = {
  chapter: Chapter;
};

const buildCommentTree = (comments: Comment[]) => {
  const commentMap = new Map<number, Comment & { replies: Comment[] }>();

  comments.forEach((comment) => {
    if (comment.id === undefined) {
      return;
    }

    commentMap.set(comment.id, {
      ...comment,
      replies: [],
    });
  });

  const roots: Comment[] = [];

  comments.forEach((comment) => {
    if (comment.id === undefined) {
      return;
    }

    const node = commentMap.get(comment.id);

    if (!node) {
      return;
    }

    const parentId = comment.parentComment?.id;

    if (parentId !== undefined && commentMap.has(parentId)) {
      commentMap.get(parentId)?.replies.push(node);
      return;
    }

    roots.push(node);
  });

  const sortByDate = (left: Comment, right: Comment) =>
    new Date(left.createdAt ?? 0).getTime() - new Date(right.createdAt ?? 0).getTime();

  const sortTree = (nodes: Comment[]): Comment[] =>
    [...nodes]
      .sort(sortByDate)
      .map((node) => ({
        ...node,
        replies: node.replies ? sortTree(node.replies) : [],
      }));

  return sortTree(roots);
};

const flattenReplies = (comments: Comment[]): Comment[] => {
  const flattened: Comment[] = [];

  const visit = (nodes: Comment[]) => {
    nodes.forEach((node) => {
      flattened.push(node);

      if (node.replies?.length) {
        visit(node.replies);
      }
    });
  };

  visit(comments);

  return flattened;
};

const ChapterCommentSection: React.FC<Props> = ({ chapter }: Props) => {
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyDrafts, setReplyDrafts] = useState<Record<number, string>>({});
  const [visibleRepliesByThread, setVisibleRepliesByThread] = useState<Record<number, number>>({});

  const commentsKey = `comments-${chapter.chapterType}-${chapter.chapterNumber}`;

  const {
    data: comments,
    isLoading,
    error,
    mutate,
  } = useSWR<Comment[]>(commentsKey, () =>
    CommentService.getChapterComments(chapter.chapterNumber, chapter.chapterType)
  );

  const commentTree = useMemo(() => buildCommentTree(comments ?? []), [comments]);

  const getVisibleReplyCount = (threadId: number) => visibleRepliesByThread[threadId] ?? 2;

  const showMoreReplies = (threadId: number) => {
    setVisibleRepliesByThread((current) => ({
      ...current,
      [threadId]: (current[threadId] ?? 2) + 5,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newComment.trim()) return;

    try {
      await CommentService.createComment(
        newComment,
        null,
        chapter.chapterNumber,
        chapter.chapterType
      );
      setNewComment("");
      mutate(); // revalidate from server so nesting/ordering stays correct
    } catch (error) {
      console.error("Error creating comment: " + error);
    }
  };

  const handleReplySubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    parentId: number
  ) => {
    event.preventDefault();

    const replyContent = replyDrafts[parentId] ?? "";

    if (!replyContent.trim()) return;

    try {
      await CommentService.createComment(
        replyContent,
        parentId,
        chapter.chapterNumber,
        chapter.chapterType
      );
      setReplyDrafts((current) => {
        const next = { ...current };
        delete next[parentId];
        return next;
      });
      setReplyingTo(null);
      mutate();
    } catch (error) {
      console.error("Error creating reply: " + error);
    }
  };

  const toggleReply = (id: number, username: string | null) => {
    setReplyingTo((current) => (current === id ? null : id));

    setReplyDrafts((current) => ({
      ...current,
      [id]: current[id] ?? `${username ? `@${username} ` : ""}`,
    }));
  };

  const updateReplyDraft = (parentId: number, value: string) => {
    setReplyDrafts((current) => ({
      ...current,
      [parentId]: value,
    }));
  };

  const renderReplyForm = (parentId: number) => (
    <form
      className="flex flex-col gap-2 mt-3"
      onSubmit={(e) => handleReplySubmit(e, parentId)}
    >
      <textarea
        className="w-full resize-none rounded-md bg-blue-900 p-2 text-sm text-white placeholder-blue-400 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={2}
        placeholder="Write a reply..."
        value={replyDrafts[parentId] ?? ""}
        onChange={(e) => updateReplyDraft(parentId, e.target.value)}
        autoFocus
      />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="px-3 py-1 text-xs font-medium text-blue-300 hover:text-white transition"
          onClick={() => {
            setReplyingTo((current) => (current === parentId ? null : current));
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
        >
          Reply
        </button>
      </div>
    </form>
  );

  const renderComment = (comment: Comment) => {
    const replies = flattenReplies(comment.replies ?? []);
    const visibleReplyCount = getVisibleReplyCount(comment.id ?? 0);
    const visibleReplies = replies.slice(0, visibleReplyCount);
    const hasMoreReplies = replies.length > visibleReplyCount;

    return (
      <li key={comment.id ?? comment.content} className="flex items-start gap-4">
        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm hover:opacity-90 transition">
          {comment.user?.username?.charAt(0).toUpperCase() || "?"}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-blue-300">
              {comment.user?.username}
            </span>
            <span className="text-xs text-blue-400">
              {comment.createdAt && <DateConverter date={comment.createdAt} />}
            </span>
          </div>
          <p className="text-sm text-white mb-2">{comment.content}</p>

          {comment.id !== undefined && (
            <div className="flex items-center gap-4 text-blue-400 text-xs">
              <button
                type="button"
                className="hover:underline transition"
                onClick={() => toggleReply(comment.id as number, comment.user?.username ?? null)}
              >
                Reply
              </button>
            </div>
          )}

          {comment.id !== undefined && replyingTo === comment.id && renderReplyForm(comment.id)}

          {replies.length > 0 && (
            <div className="mt-4 pl-6 border-l border-blue-700">
              <ul className="space-y-4">
                {visibleReplies.map((reply) => (
                  <li key={reply.id ?? reply.content} className="flex items-start gap-3">
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xs hover:opacity-90 transition">
                      {reply.user?.username?.charAt(0).toUpperCase() || "?"}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-sm font-semibold text-blue-300">
                          {reply.user?.username}
                        </span>
                        <span className="text-xs text-blue-400">
                          {reply.createdAt && <DateConverter date={reply.createdAt} />}
                        </span>
                        {reply.parentComment?.user?.username && (
                          <span className="text-xs text-blue-500">
                            replying to @{reply.parentComment.user.username}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-white mb-2">{reply.content}</p>
                      <div className="flex items-center gap-4 text-blue-400 text-xs">
                        <button
                          type="button"
                          className="hover:underline transition"
                          onClick={() => toggleReply(reply.id as number, reply.user?.username ?? null)}
                        >
                          Reply
                        </button>
                      </div>

                      {replyingTo === reply.id && renderReplyForm(reply.id as number)}
                    </div>
                  </li>
                ))}
              </ul>

              {hasMoreReplies && (
                <button
                  type="button"
                  className="mt-4 text-xs font-medium text-blue-300 hover:text-white transition"
                  onClick={() => showMoreReplies(comment.id as number)}
                >
                  Show more replies ({replies.length - visibleReplyCount} more)
                </button>
              )}
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <div className="mx-auto w-full max-w-2xl p-4">
      <h3 className="text-xl font-bold text-white mb-6">Comments</h3>

      {/* New Comment Form */}
      <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit}>
        <textarea
          className="w-full resize-none rounded-md bg-blue-900 p-3 text-sm text-white placeholder-blue-400 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            Comment
          </button>
        </div>
      </form>

      {error && (
        <p className="text-center text-red-500 mb-4">Failed to load comments</p>
      )}
      {isLoading && (
        <p className="text-center text-blue-300 mb-4">Loading comments...</p>
      )}

      {/* Comments List */}
      <ul className="space-y-6">
        {commentTree.length > 0 ? (
          commentTree.map((comment) => renderComment(comment))
        ) : !isLoading ? (
          <li>
            <p className="text-blue-300 italic">Be the first to comment!</p>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default ChapterCommentSection;