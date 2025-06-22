import { Chapter, Comment } from "@/types";
import { useEffect, useState } from "react";
import DateConverter from "./DateConverter";
import useSWR from "swr";
import CommentService from "@/services/CommentService";

type Props = {
    chapter: Chapter
}

const ChapterCommentSection: React.FC<Props> = ({chapter}: Props) => {
    const [comment, setComment] = useState<Comment>();
    const [listOfComments, setListOfComments] = useState<Comment[]>([]);

    const fetchComments = async() => {
        const comments = await CommentService.getChapterComments(chapter.chapterNumber, chapter.chapterType);
        setListOfComments(comments);
    }

    const {data, isLoading, error} = useSWR("comments", fetchComments);

    return <>
        <div className="mx-auto w-full max-w-2xl p-4">
        <h3 className="text-xl font-bold text-white mb-6">Comments</h3>

        {/* Comment Form */}
        <form className="flex flex-col gap-4 mb-8">
            <textarea
            className="w-full resize-none rounded-md bg-blue-900 p-3 text-sm text-white placeholder-blue-400 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Add a comment..."
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

        {/* Comments List */}
        <ul className="space-y-6">
            {listOfComments && listOfComments.length > 0 ? listOfComments.filter((comment => !comment.parentComment)).map((comment: Comment, idx) => (
            <li key={idx} className="flex items-start gap-4">
                {/* Avatar */}
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm hover:opacity-90 transition">
                {comment.user?.username?.charAt(0).toUpperCase() || "?"}
                </div>

                {/* Main Comment */}
                <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-blue-300">{comment.user?.username}</span>
                    <span className="text-xs text-blue-400">
                    {comment.createdAt && <DateConverter date={comment.createdAt} />}
                    </span>
                </div>
                <p className="text-sm text-white mb-2">{comment.content}</p>

                <div className="flex items-center gap-4 text-blue-400 text-xs">
                    <button className="hover:underline transition">Reply</button>
                </div>

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                    <ul className="mt-4 space-y-4 pl-6 border-l border-blue-700">
                    {comment.replies.map((reply, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3">
                        {/* Reply Avatar */}
                        <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xs hover:opacity-90 transition">
                            {reply.user?.username?.charAt(0).toUpperCase() || "?"}
                        </div>

                        {/* Reply Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-blue-300">{reply.user?.username}</span>
                            <span className="text-xs text-blue-400">
                                {reply.createdAt && <DateConverter date={reply.createdAt} />}
                            </span>
                            </div>
                            <p className="text-sm text-white mb-2">{reply.content}</p>
                            <div className="flex items-center gap-4 text-blue-400 text-xs">
                            <button className="hover:underline transition">Reply</button>
                            </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            </li>
            )) : (<li>
                <p className="text-blue-300 italic">Be the first to comment!</p>
            </li>)}
        </ul>
        </div>
    </> 
}

export default ChapterCommentSection;

