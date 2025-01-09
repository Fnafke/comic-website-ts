import { User } from "../model/user";
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

export default {
    getAllUsers
}