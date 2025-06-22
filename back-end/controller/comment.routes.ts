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

export default commentRouter;