import * as dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import helmet from 'helmet';
import userRouter from './controller/user.routes';
import { expressjwt } from 'express-jwt';
import chapterRouter from './controller/chapter.routes';
import commentRouter from './controller/comment.routes';

const app = express();
dotenv.config();
app.use(helmet())
const port = process.env.APP_PORT || 3000;

app.use(
    expressjwt({
        secret: process.env.JWT_SECRET || 'default_secret',
        algorithms: ['HS256'],
    }).unless({
        path: ["/api-docs", /^\/api-docs\/.*/, "/users/login", "/users/signup", "/status", /^\/chapters\/.*/],
    })
)

app.use(cors());
app.use(bodyParser.json());
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.name == "UnauthorizedError") {
        res.status(401).json({status: "Unauthorized", errorMessage: err.message});
    }
})

app.get('/status', (req, res) => {
    res.json({ message: 'Comic Back-end is running...' });
});

app.listen(port || 3000, () => {
    console.log(`Comic Back-end is running on port ${port}.`);
});

// ENDPOINTS
app.use('/users', userRouter);
app.use('/chapters', chapterRouter);
app.use('/comments', commentRouter);
