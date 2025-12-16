import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { dbConnect } from './controller/dbcontroller.js';
// import bodyParser from 'body-parser';
const apps = express();
const PORT = process.env.PORT || 3000;

// Middleware:
// “Server पर आने वाली हर request के लिए CORS permission लगा दो”
apps.use(cors());

// earlier for parsing body we used body-parser
// apps.use(express.urlencoded({ extended: true })) ;
// apps.use(bodyParser.json());

//“Server पर आने वाली हर request के JSON body को automatically parse कर दो”
//express has install body parser in itself  JSON body को parse करता है
apps.use(express.json());


//heartbeat route
apps.get("/", (req, res) => {
    res.status(200).send("Server is up and running ");
})


apps.listen(PORT, () => {
    dbConnect();
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});