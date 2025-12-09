let mongodb = require('mongodb');
let mongoClient = mongodb.MongoClient;
let mongoUrl = "mongodb://127.0.0.1:27017";
// let mongoUrl = "mongodb://localhost:27017";
//default port of mongodb 27017 .
let db;

const dbConnect = async () => {
    try {
        const client = new mongoClient(mongoUrl);
        await client.connect();
        db = client.db('node');
        console.log("Database connection successful .");
    } catch (error) {
        console.log("Database connection failed .");
    }

}
// getting data from database.//
const getData = async (colName, query) => {
    return await db.collection(colName).find(query).toArray();
}

module.exports = {
    dbConnect,
    getData
}


