import { prismaClient } from "../app/database";

export async function findData() {
    const find = await prismaClient.user.findFirst({
        where: {
            name: "rizq"
        }
    })

    console.log(find?.name)
} 

findData()