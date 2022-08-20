import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
    console.log('DB connection...');
    const client = await MongoClient.connect('mongodb+srv://dev:Renard+221@cluster0.brwnb.mongodb.net/ddd-DB?retryWrites=true&w=majority');
    console.log('connected DB');
    return client;
}