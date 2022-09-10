import { MongoClient } from 'mongodb';

//export const connectToDatabase = async () => {
    // console.log('DB connection...');
    // const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.brwnb.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
//     console.log(process.env.MONGODB_URI);
//     const client = await MongoClient.connect(process.env.MONGODB_URI);
//     console.log('connected DB');
//     return client;
// }

const uri = process.env.NEXT_ATLAS_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

let mongoClient = null;
let database = null;

if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local')
}

export async function connectToDatabase() {
    try {
        if (mongoClient && database) {
            return { mongoClient, database };
        }
        if (process.env.NODE_ENV === "development") {
            if (!global._mongoClient) {
                mongoClient = await (new MongoClient(uri, options)).connect();
                global._mongoClient = mongoClient;
            } else {
                mongoClient = global._mongoClient;
            }
        } else {
            mongoClient = await (new MongoClient(uri, options)).connect();
        }
        database = await mongoClient.db(process.env.NEXT_ATLAS_DATABASE);
        return { mongoClient, database };
    } catch (e) {
        console.error(e);
    }
}