export type User = {
    id?: number;
    username: string;
    email: string;
    password: string;
    role: Role;

}

export type Chapter = {
    id?: number;
    chapterNumber: number;
    chapterTitle: string;
    chapterDescription: string;
    chapterImagesHash: string;
    chapterType: string;
}

export type Role = 'Admin' | 'User';
