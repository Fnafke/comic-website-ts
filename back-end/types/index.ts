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
    chapterDescription: string;
    chapterImagesHash: string;
}

export {
    User,
    Role,
    AuthenticationResponse,
    Chapter
}