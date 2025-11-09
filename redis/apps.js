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
    console.log("Redis connection error", error)
})

apps.get("/", async (req, res) => {
    await client.connect(); ///when connection gets created  it automatically established connection to redis server.
    let UInputs=req.query.country.trim();
    let url=``;
})