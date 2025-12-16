// import mongodb from "mongodb";
// const mongoClient = mongodb.MongoClient;
//modern way//
import {MongoClient} from "mongodb";
import dotenv from 'dotenv';
dotenv.config();
const mongoUrl = process.env.MONGO_URL;
let db;

const dbConnect = async () => {
    try {
        const client = new MongoClient(mongoUrl);
        await client.connect();
        db = client.db("Restaurents");
        console.log("Database connection successful.");
    } catch (error) {
        console.log("Database connection failed.");
    }
}
const getData = async (colName, query) => {
    return await db.collection(colName).find(query).toArray();
}
export {
    dbConnect,
    getData
}