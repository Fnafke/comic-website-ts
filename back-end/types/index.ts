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
    user: User;
    chapter: Chapter;
    content: string;
    parentComment?: Comment;
    replies: Comment[];
    createdAt: Date;
    updatedAt?: Date;
    isEdited: boolean;
}

export {
    User,
    Role,
    AuthenticationResponse,
    Chapter,
    Comment
}