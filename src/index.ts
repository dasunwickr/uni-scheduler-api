import dotenv from "dotenv"
import colors from "colors"
import { createApp } from "./app";
import { connectDatabase } from "./config/database";

dotenv.config()

const port: number = Number(process.env.PORT) || 3000;
const app = createApp();

app.listen(port, async () => {
    await connectDatabase();
    console.log(colors.cyan(`[server]: Server is running at http://localhost:${port}`));
})