type Role = 'Admin' | 'User';

type User = {
    id?: number;
    username: string;
    email: string;
    password: string;
    role: Role;
}

export {
    User,
    Role
}