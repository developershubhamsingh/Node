let mongodb = require('mongodb');
let mongoClient = mongodb.MongoClient;
let mongoUrl = "mongodb://127.0.0.1:27017";
//default port of mongodb 27017 .
let db;

const dbConnect = async () => {
    const client = new mongoClient(mongoUrl);
    await client.connect();
    db = client.db('node');
    console.log("Database connection successful .");
}
module.exports = {
    dbConnect
}