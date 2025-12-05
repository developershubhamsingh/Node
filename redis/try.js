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
// handling error//
client.on("error", (error) => {
    console.log("Client Error", error.massage)
})

//connecting client //
await client.connect();

apps.get("/", async (req, res) => {
    let city = req.query.city ? req.query.city.trim() : "Delhi";
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //checking wether data exist in memory or not//
    let cacheData = await client.get(city);
    if (cacheData) {
        let output = JSON.parse(cacheData);
        res.send(output)
    }else{
         // if data not there in the memory//
    // calling api 
    let apiResponse = await axios.get(url);
    let result = apiResponse.data;
    //first storing data in redis
    await client.set(city, JSON.stringify({ source: "Redis Cache", result }), { EX: 3600, NE: true })
    res.send({ source: "Api", result })
    }
   
})

process.on("SIGINT", async () => {
    await client.quit();
    process.exit(0);
});
apps.listen(port, () => {
    console.log("Server is Running on port ", port)
})
    .on("error", () => {
        console.log("Problem in Starting Server")
    })