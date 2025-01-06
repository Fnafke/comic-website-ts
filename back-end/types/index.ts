type Role = 'Admin' | 'User';

type User = {
    id?: number;
    username: string;
    email: string;
    password: string;
}

export {
    User,
    Role
}