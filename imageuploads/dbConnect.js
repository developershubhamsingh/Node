import { MongoClient } from "mongodb";  
const mongoUrls = "mongodb://localhost:27017"
let db;

const dbConnect = async () => {
    try {
        const client = new MongoClient(mongoUrls);
        await client.connect();
        db = client.db("imageUploads");
        console.log("Database Connected Successfully")
    } catch (error) {
        console.error("Problem Occurred in Connecting to Database")
    }
}
const saveData = async (colName, data) => {
    return db.collection(colName).insertOne(data)
}
export { dbConnect, saveData }