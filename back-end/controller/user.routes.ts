import express, { NextFunction, Request, Response } from 'express';
import userService from '../service/user.service';
import {User as UserInput} from '../types'

const userRouter = express.Router();

// GET REQUESTS
userRouter.get('/', async(req: Request & {auth?: any}, res: Response, next: NextFunction) => {
    try {
        const {role} =  req.auth;
        const users = await userService.getAllUsers(role);
        res.status(200).json(users);
    } catch (error: any) {
        res.status(400).json({status: "Error", errorMessage: error.message});
    }
});

userRouter.get('/:email', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.getUserByEmail(req.params.email);
        return user;
    } catch (error: any) {
        res.status(400).json({status: "Error", errorMessage: error.message});
    }
})

// POST REQUESTS
userRouter.post('/signup', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const userInput = <UserInput>req.body;
        const user = await userService.createUser(userInput);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({status: "Error", errorMessage: error.message})
    }
})

userRouter.post('/login', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const userInput = <UserInput>req.body;
        const response = await userService.authenticate(userInput);
        res.status(200).json({message: "Authentication Succesful", ...response});
    } catch (error) {
        next(error);
    }
})

export default userRouter;