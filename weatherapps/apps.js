import express from 'express';
// import request from 'request';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';//path → Node.js ka built-in module, paths handle karne ke liye.
import { fileURLToPath } from 'url';//fileURLToPath → ES module me current file ka URL ko path me convert karta hai.

const __filename = fileURLToPath(import.meta.url);//import.meta.url → Current ES module file ka URL deta hai, jaise:
const __dirname = path.dirname(__filename);//fileURLToPath → Is URL ko normal Windows/Linux path me convert kar deta hai:


let apps = express();
let port = process.env.PORT || 9800;

apps.use(express.static(__dirname + "/public"));
apps.set("views", "./src/views");
apps.set("view engine", "ejs");

apps.get("/weather", async (req, res) => {
    try {
        let city = req.query.city ? req.query.city : "Delhi";
        let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=${process.env.KEY}`;
        let response = await axios.get(url);
        let result = response.data;
        // res.send(result);
        res.render("index", { title: "Weather", result });
    }
    catch (error) {
        console.log(error)
        res.send("Error occurred while fetching weather data.");
    }
})


apps.listen(port, (error) => {
    if (error) throw error;
    console.log("Weather Apps server is running on port " + port);
})
// fbf712a5a83d7305c3cda4ca8fe7ef29
// https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid= ${process.env.KEY}