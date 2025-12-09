import express from "express";
import mongodb from "mongodb";
let mongoClient = mongodb.MongoClient;
let mongoUrl = "mongodb://localhost:27017"
let db;

const dbConnect = async () => {
    try {
        let client = new mongoClient(mongoUrl);
        await client.connect();
        db = client.db("node");
        console.log("Database Connection Success !")
    } catch (error) {
        console.log("Database Connection failed !")
    }

}
const getData = async (colNam, query) => {
    return await db.collection(colNam).find(query).toArray();
}

export { dbConnect, getData }