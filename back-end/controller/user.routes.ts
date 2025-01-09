import express, { NextFunction, Request, Response } from 'express';
import userService from '../service/user.service';
import {User as UserInput} from '../types'

const userRouter = express.Router();

// GET REQUESTS
userRouter.get('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(400).json({status: "Error", errorMessage: error.message})
    }
});

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