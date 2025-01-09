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

export {
    User,
    Role,
    AuthenticationResponse
}