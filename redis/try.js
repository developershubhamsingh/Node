import express from "express";
import axios from "axios";
import { createClient } from "redis";
let apps = express();
let port = 7000;

//creating client//
let client = createClient({
    socket: {
        host: "localhost",
        port: 6379
    }
})
// connecting client//
await client.connect();

apps.get("/", async (req, res) => {
    let city = req.query.city ? req.query.city.trim() : "Delhi";
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //checking in redis//
    let cacheData = await client.get(city);
    if (cacheData) {
        let result = JSON.parse(cacheData)
        res.send(result)
    } else {
        // call apis //
        let apiResponse = await axios.get(url);
        let apiOutput = apiResponse.data;
        //first saving in redis .//
        await client.set(city, JSON.stringify({ source: "Redis Cache", apiOutput }), { EX: 3600, NX: true })
        res.send({ source: "Api", apiOutput })
    }
})

process.on("SIGINT", async () => {
    await client.quit();
    process.quit(0);
})


apps.listen(port, () => {
    console.log("server is running in port", port);
}).on("error", (error) => {
    console.log("problem in starting server")
})