import { PrismaClient } from "@prisma/client"
import { ResponseError } from "../helper/errorInstance";

export const prismaClient = new PrismaClient({
    errorFormat: "pretty",
    log: ["query", "warn", "error", "info"]
})

async function CheckConnection() {
    try {
        await prismaClient.$connect();
        console.log("Database is connected!");
    } catch (error) {
        throw new ResponseError(400, `Connection to database is failed: ${error}`);
    }
}

CheckConnection()