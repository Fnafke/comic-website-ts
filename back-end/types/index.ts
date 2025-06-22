type Role = 'Admin' | 'User';

type User = {
    id?: number;
    username: string;
    email: string;
    password: string;
    role: Role;
}

type AuthenticationResponse = {
    token: string,
    username: string,
    email: string,
    role: Role
}

type Chapter = {
    id?: number;
    chapterNumber: number;
    chapterCoverHash: string;
    chapterTitle: string;
    chapterDescription: string;
    chapterImagesHash: string;
    chapterType: string
    chapterReleaseDate: Date
    comment: Comment[]
}

type Comment = {
    id?: number;
    userId: number;
    chapterId: number;
    content: string;
    commentId?: number | null;
    createdAt: Date;
    updatedAt?: Date | null;
    isEdited: boolean;
    user?: User;
    chapter?: Chapter;
    parentComment?: Comment | null;
    replies?: Comment[];
}

export {
    User,
    Role,
    AuthenticationResponse,
    Chapter,
    Comment
}