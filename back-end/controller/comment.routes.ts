import express, { NextFunction, Request, Response } from 'express';
import commentService from '../service/comment.service';

const commentRouter = express.Router();

commentRouter.get("/chapter/:chapterNumber/:chapterType", async(req: Request, res: Response, next: NextFunction) => {
    try {
        const comments = await commentService.getChapterComments(parseInt(req.params.chapterNumber), req.params.chapterType)
        res.status(200).json(comments);
    } catch (error: any) {
        res.status(400).json({status: "Error", error: error})
    }
})

commentRouter.post("/chapter/:chapterNumber/:chapterType", async(req: Request & {auth?: any}, res: Response, next: NextFunction) => {
    try {
        const {content, parentCommentId} = req.body;
        const auth = req.auth;

        if (!auth?.email) {
            throw new Error("Authentication required");
        }

        const {email} = auth;
        const comment = await commentService.createComment(content, parentCommentId, parseInt(req.params.chapterNumber), req.params.chapterType, email)
        res.status(200).json(comment);
    } catch (error: any) {
        next(error);
    }
})

export default commentRouter;