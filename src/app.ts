import dotenv from 'dotenv'
import express, { Request, Response } from 'express'

//Load Environment Variables
const NODE_ENV: string = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}` })

const app = express();

app.get('/', (_req: Request, res: Response): void => {
    res.send('Hello, TypeScript with Express!');
});

export default app;