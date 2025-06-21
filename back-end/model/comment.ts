import { Chapter } from "./chapter";
import { User } from "./user";

export class Comment {
    public id?: number;
    public user: User;
    public chapter: Chapter;
    public content: string;
    public parentComment?: Comment;
    public replies: Comment[] = [];
    public createdAt: Date;
    public updatedAt?: Date;
    public isEdited: boolean = false;

    constructor(comment: {id?: number, user: User, chapter: Chapter, content: string, parentComment: Comment, createdAt: Date}) {
        this.validate(comment);

        this.id = comment.id;
        this.user = comment.user;
        this.chapter = comment.chapter;
        this.content = comment.content;
        this.createdAt = comment.createdAt;
        this.parentComment = comment.parentComment;
    }

    validate(comment: {id?: number, user: User, chapter: Chapter, content: string, parentComment: Comment, createdAt: Date}) {
        if (comment.content.trim().length < 1) {
            throw new Error("Comment content is too short.");
        }
    }

    addReply = (reply: Comment) => {
        reply.parentComment = this
        this.replies.push(reply);
    }

    editContent = (newContent: string) => {
        this.content = newContent;
        this.updatedAt = new Date();
        this.isEdited = true
    }
}