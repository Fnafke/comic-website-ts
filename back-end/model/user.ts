import { Role } from "../types";
import { User as UserPrisma } from "@prisma/client";

export class User {
    private id?: number;
    private username: string;
    private email: string;
    private password: string;
    private role: Role;

    constructor(user: {id?: number, username: string, email: string, password: string, role: Role}) {
        this.validate(user);

        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
    }

    validate(user: {id?: number, username: string, email: string, password: string, role: Role}) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ( !user.username || user.username.trim() == "") {
            throw new Error("Domain Error: Username must not be empty")
        };
        
        if (!user.email || user.email.trim() == "" || emailRegex.test(user.email)) {
            throw new Error("Domain Error: Email must be correct format.")
        };

        if (!user.password || user.password.trim() == "" || user.password.length < 8) {
            throw new Error("Domain Expansion: Password must be at least 8 characters long.");
        };

    }

    static from({id, username, email, password, role}: UserPrisma) {
        return new User({
            id,
            username,
            email,
            password,
            role: role as Role
        })
    }

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getUsername() {
        return this.username;
    };

    getPassword() {
        return this.password;
    };

    getRole() {
        return this.role;
    };

}