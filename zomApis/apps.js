import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { dbConnect, getData } from './controller/dbcontroller.js';
import { ObjectId } from 'mongodb';
// import bodyParser from 'body-parser';
const apps = express();
const port = process.env.PORT || 3000;
const key = process.env.AUTH_KEY;

const VALID_USERNAME = process.env.VALID_USERNAME || 'admin';
const VALID_PASSWORD = process.env.VALID_PASSWORD || 'password';
// Middleware:
// “Server पर आने वाली हर request के लिए CORS permission लगा दो”
apps.use(cors());

// earlier for parsing body we used body-parser
// apps.use(express.urlencoded({ extended: true })) ;
// apps.use(bodyParser.json());

//“Server पर आने वाली हर request के JSON body को automatically parse कर दो”
//express has install body parser in itself  JSON body को parse करता है
apps.use(express.json());

const basicAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return res.status(401).send('Unauthorized Access');
    }
    //decode with base64 encoded string
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        return next();
    } else {
        return res.status(401).send('Unauthorized Access');
    }
}

//heartbeat route
apps.get("/", (req, res) => {
    res.status(200).send("Heartbeat is up and running !");
})
//====================**Home page (page 1):**=================//

// without authentication
// get all cities api // 
apps.get("/location", async (req, res) => {
    let query = {};
    let result = await getData("location", query);
    res.status(200).send(result);
})
// get all restaurants api and restaurants wrt stateId//
apps.get("/restaurants", async (req, res) => {
    let query = {};
    let stateId = Number(req.query.stateId)
    if (stateId) {
        query = { state_id: stateId };
    }
    let result = await getData("restaurants", query);
    res.status(200).send(result);
})
// get all mealTypes api //
apps.get("/mealTypes", async (req, res) => {
    let query = {};
    let result = await getData("mealTypes", query);
    res.status(200).send(result);
})
// > `Details of Restaurant WRT ID(GET)`
apps.get("/details/:id", async (req, res) => {
    let query = {};
    let restId = req.params.id;
    if (restId) {
        query =
            ({ "restaurant_id": Number(restId) });
    }
    let result = await getData("restaurants", query);
    res.status(200).send(result);
})

// with authentication if working then need to write basicAuth else no need to write.
// apps.get("/location", basicAuth, async (req, res) => {
//     let query = {};
//     let result = await getData("location", query);
//     res.status(200).send(result);
// })

//authentication with key to access the api
// apps.get("/location", async (req, res) => {
//     let authKey = req.headers["x-auth-key"];
//     let query = {};
//     if (authKey == key) {
//         let result = await getData("location", query);
//         res.status(200).send(result);
//     } else {
//         res.status(401).send("Unauthorized Access");
//     }
// });
// ===============================================================//

apps.listen(port, () => {
    dbConnect();
    console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});  