import express from "express"
import axios from "axios"
import redis from "redis"
import { createClient } from "redis"

let apps = express();
let port = 7000;

//creating connections //
let clients = createClient({
    host: "localhost",
    port: 6379 //default port of redis//
})
await clients.connect();

apps.get("/", (async (req, res) => {
    let city = req.query.city ? req.query.city.trim() : "delhi";
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29
`
    //checking in redis cache //
    let result = await clients.get(city);
    if (result) {
        const output = JSON.parse(result);
        console.log("Data from Redis Cache");
        res.send(result);
    } else {
        //fetching from api //
        let response = await axios.get(url);
        let output = response.data;
        //storing in redis cache //
        await clients.set(city, JSON.stringify({ source: "redis cache", output }), { EX: 3600, NX: true });
        res.send({ source: "api", output });
    }
}))

//connecting redis :
clients.on("error", (error) => {
    console.error("Redis Client Error : ", error)
})

apps.listen(port, () => {
    console.log("Server is running at port ", port);
}).on("error", (error) => {
    console.log("Error in running server", error);
})


// key: fbf712a5a83d7305c3cda4ca8fe7ef29
// https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29



