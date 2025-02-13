
import colors from "colors";
import { prisma } from "./prisma";

export const connectDatabase = async () => {
    try {
        await prisma.$connect();
        console.log(colors.yellow.underline("[server]: Database connected successfully"))
    } catch (error) {
        console.log(colors.cyan("[server]: Failed to connect to database:") + ` ${colors.red((error as Error).message)}`)
    }
}