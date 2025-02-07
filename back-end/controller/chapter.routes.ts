import express, { NextFunction, Request, Response } from 'express';
import chapterService from '../service/chapter.service';

const chapterRouter = express.Router()


// GET REQUESTS
chapterRouter.get('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const chapters = await chapterService.getAllChapters(req.body.chapterType);
        res.status(200).json(chapters);
    } catch (error: any) {
        res.status(400).json({status: 'Error', errorMessage: error.message})
    }
})

chapterRouter.get('/:chapterNumber', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const chapter = await chapterService.getChapter(parseInt(req.params.chapterNumber), req.body.chapterType);
        res.status(200).json(chapter);
    } catch (error: any) {
        res.status(400).json({status: 'Error', errorMessage: error.message})
    }
})

export default chapterRouter;