import { PrismaClient } from "@prisma/client"

export const prismaClient = new PrismaClient({
    errorFormat: "pretty",
    log: ["query", "warn", "error", "info"]
})

async function CheckConnection() {
    try {
        await prismaClient.$connect();
        console.log("Database is connected!");
    } catch (error) {
        console.log("Connection to database is failed");
    }
}

CheckConnection()