import colors from 'colors';
import express, { Request, Response, Express } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createApp = () => {
    const app: Express = express();

    app.use(express.json())

    app.get("/", (_req: Request, res: Response) => {
        res.json({
            message: "Test"
        })
    })

    return app;
}

