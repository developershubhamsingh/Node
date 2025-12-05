import express from "express";
import axios from "axios";
import { createClient } from "redis";
let apps = express();
let ports = 7000;

// creating client object  to talk to redis//
let client = createClient({
    socket: {
        host: "localhost",
        port: 6379 //default port of redis//
    }
})

// handling error ://
client.on("error", (error) => {
    console.error("Redis Client Error", error);
});
// connecting redis
await client.connect();

apps.get("/", async (req, res) => {
    let city = req.query.city ? req.query.city.trim() : "Delhi";
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //checking wether data exist in memory or not//
    let cacheData = await client.get(city);
    if (cacheData) {
        let result = JSON.parse(cacheData);
        res.send(result)
    } else {
        // if data not there in the memory//
        // calling api 
        let apiResponse = await axios.get(url);
        let apiOutput = apiResponse.data;
        //first storing data in redis
        await client.set(city, JSON.stringify({ source: "Redis Cache", apiOutput }), { EX: 3600, NX: true });
        res.send({ source: "Api", apiOutput })
    }
})
// quit client when server stops //
process.on("SIGINT", async () => {
    await client.quit();
    process.exit(0);
})

apps.listen(ports, (err) => {
    if (err) {
        console.log("error in running server");
    } else {
        console.log(`server is running at port ${ports}`);
    }
})
// key: fbf712a5a83d7305c3cda4ca8fe7ef29
// https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid= ${process.env.KEY}

// for learning//
// const redis = require("redis");
// const client = redis.createClient();

// client.on("connect", () => {
//     console.log("Redis connected successfully");
// });

// client.on("ready", () => {
//     console.log("Redis client is ready to use");
// });

// client.on("error", (error) => {
//     console.error("Redis Client Error:", error);
// });

// client.on("end", () => {
//     console.log("Redis connection closed");
// });

// // actual connection
// client.connect();






