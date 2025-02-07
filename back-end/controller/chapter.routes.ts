import express, { NextFunction, Request, Response } from 'express';
import chapterService from '../service/chapter.service';

const chapterRouter = express.Router()


// GET REQUESTS
chapterRouter.get('/:chapterType', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const chapters = await chapterService.getAllChapters(req.params.chapterType);
        res.status(200).json(chapters);
    } catch (error: any) {
        res.status(400).json({status: 'Error', errorMessage: error.message})
    }
})

chapterRouter.get('/:chapterNumber/:chapterType', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const chapter = await chapterService.getChapter(parseInt(req.params.chapterNumber), req.params.chapterType);
        res.status(200).json(chapter);
    } catch (error: any) {
        res.status(400).json({status: 'Error', errorMessage: error.message})
    }
})

export default chapterRouter;