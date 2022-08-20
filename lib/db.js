import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
    // console.log('DB connection...');
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.brwnb.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority'`;
    const client = await MongoClient.connect(connectionString);
    console.log('connected DB');
    return client;
}