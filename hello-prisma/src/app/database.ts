import { PrismaClient } from "@prisma/client";
import { logger } from "./logging";

export const prismaClient = new PrismaClient({
    errorFormat: "pretty",
    log: ["query", "warn", "error", "info"]
});

// prismaClient.$on("query", (e) => {
//     logger.info(e);
// })