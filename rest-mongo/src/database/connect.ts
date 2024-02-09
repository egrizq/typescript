import { MongoClient } from "mongodb";

const uri = 'mongodb://127.0.0.1:27017/firstDB';

async function connectToMongoDB(): Promise<MongoClient> {
    try {
      const client = new MongoClient(uri);
      await client.connect();

      console.log('Connected to MongoDB!');
      return client;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error
    }
}

export { connectToMongoDB }