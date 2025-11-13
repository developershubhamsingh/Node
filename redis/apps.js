import express from "express";
import axios from "axios";
import { createClient } from "redis";
let apps = express();
let ports = 7000;

// creating  connection with redis//
let client = createClient({
    host: "localhost",
    port: 6379 //default port of redis//
})

//connecting redis :
client.on("error", (error) => {
    console.error("Redis Client Error", error);
});
apps.get("/data", async (req, res) => {
    await client.connect(); ///when connection gets created  it automatically established connection to redis server.
    let city = req.query.city ? req.query.city.trim() : "delhi";
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    // checking in redis.
    let cachedData = await client.get(city);
    if (city) {
        const outputs = JSON.parse(cachedData);
        res.send(outputs);
    } else {
        //calling api using axios//
        let response = await axios.get(url);
        let data = response.data;
        //first store data in redis//
        await client.set(city, JSON.stringify({ source: "Redis Cache", data }), ({ EX: 3600, NX: true }));//,NX:true (non existence data and EX: 3600 data will be expired after 1 hour//
        res.send({ source: "API Response", data });
    }
    await client.quit(); //closing connection//
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







