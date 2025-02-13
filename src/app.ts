import express, { Request, Response, Express } from 'express';
import morgan from "morgan"

export const createApp = () => {
    const app: Express = express();

    app.use(morgan("dev"))
    app.use(express.json())

    app.get("/", (_req: Request, res: Response) => {
        res.json({
            message: "Test"
        })
    })

    return app;
}

