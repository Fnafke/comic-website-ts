export type User = {
    id?: number;
    username: string;
    email: string;
    password: string;
    role: Role;

}

export type Role = 'Admin' | 'User';
