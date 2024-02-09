import { Request, Response } from "express"
import { MongoClient } from "mongodb";
import { connectToMongoDB } from "../database/connect";

async function insertUsers(client:MongoClient, name:string, age:number): Promise<any> {
    try {
        const db = client.db("firstDB");
        const collection = db.collection("data");
        const users = await collection.insertOne({ name, age })

        return users;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function main(name:string, age:number) {
    try {
        const client = await connectToMongoDB();
        const users = await insertUsers(client, name, age);

        console.log('Users has been inserted:', users)
        await client.close()
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// todo Create User Controllers
export async function CreateUsers (req: Request, res: Response) {
    try {
        const {name, age} = req.body;
        if (!name || !age) {
            return res.json("data is empty");
        }
        console.log(name, age);

        const insertedUser =  await main(name, age);
        res.json({message: insertedUser})
    } catch (error) {
        throw error
    }
}