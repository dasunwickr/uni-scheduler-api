import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"
import colors from "colors"

dotenv.config()

const app: Express = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (_req: Request, res: Response) => {
    res.json({
        message: "Test"
    })
})

app.listen(port, async () => {
    try {
        await prisma.$connect();
        console.log(colors.yellow("[server]: Database connected successfully"))
    } catch (error) {
        console.log(colors.cyan("[server]: Failed to connect to database:") + ` ${colors.red((error as Error).message)}`)
    }
    console.log(colors.cyan(`[server]: Server is running at http://localhost:${port}`))
})
