import { User } from "../model/user";
import {User as UserInput} from "../types"
import database from "../util/database"


const getAllUsers = async(): Promise<User[]> => {
    try {
        const usersPrisma = await database.user.findMany();
        return usersPrisma.map((user) => User.from(user));

    } catch (error) {
        console.error(error)
        throw new Error("Database error: Could not fetch all users from the database.")
    }
}

const getUserByEmail = async(email: string): Promise<User | null> => {
    try {
        const userPrisma = await database.user.findUnique({
            where: {
                email: email
            }
        });
        return userPrisma ? User.from(userPrisma) : null

    } catch (error) {
        console.error(error)
        throw new Error("Database error: Could not fetch user by email from the database.")
    }
}

const createUser = async(user: User): Promise<User> => {
    try {
        const userPrisma = await database.user.create({
            data: {
                username: user.getUsername(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            }
        });
        return User.from(userPrisma);
    } catch (error) {
        console.error(error)
        throw new Error("Database error: Could not create user in the database.")
    }
}

export default {
    getAllUsers,
    getUserByEmail,
    createUser,
}