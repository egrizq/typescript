import { Request, Response } from "express"
import { connectToMongoDB } from "../database/connect"

async function show() {
    let client;
    try {
        client =  await connectToMongoDB();
        const collection = client.db("firstDB").collection("data");
        const users = await collection.find().toArray();

        return users
    } catch (error) {
        throw error
    } finally {
        if (client) {
            await client.close()
        }
    }
}

export async function ShowUsers(req: Request, res: Response) {
    try {
        const showUsers = await show()

        res.json(showUsers)
        console.log("Users Data has been shown!")
    } catch (error) {
        throw error
    }
}