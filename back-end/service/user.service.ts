import { User } from "../model/user";
import {AuthenticationResponse, User as UserInput} from '../types'
import userDb from "../repository/user.db"
import bcrypt from 'bcrypt'
import generateJwtToken from "../util/jwt";


const getAllUsers = async(role: string): Promise<User[]> => {
    if (role == 'Admin'){
        return await userDb.getAllUsers();
    } else {
        throw new Error("You are unauthorized to perform this action.")
    }
}

const createUser = async({username, email, password}: UserInput): Promise<User> => {
    const existing_user = await userDb.getUserByEmail(email);

    if (existing_user) {
        throw new Error("User with this email already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({username, email, password: hashedPassword, role: 'User'})

    return await userDb.createUser(user);

}

const authenticate = async({email, password}: UserInput): Promise<AuthenticationResponse> => {
    const user = await userDb.getUserByEmail(email);
    if (!user) {
        throw new Error("Email or password are wrong.");
    }

    const isValidPassword = await bcrypt.compare(password, user.getPassword());
    if (!isValidPassword) {
        throw new Error("Email or password are wrong.")
    }

    return {
        token: generateJwtToken(email, user.getRole()),
        username: user.getUsername(),
        email: email,
        role: user.getRole()
    }
}

export default {
    getAllUsers,
    createUser,
    authenticate
}