import { prismaClient } from "../app/database";

async function createData() {
    const create = await prismaClient.user.create({
        data: {
            name: "test",
            email: "test@example.com",
            posts: {
                create: {
                    title: "my first post"
                }
            },
            profile: {
                create: {
                    bio: "prisma with mysql"
                }
            }
        }
    })
    console.log(create)
}

createData()