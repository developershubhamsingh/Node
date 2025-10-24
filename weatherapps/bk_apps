let express = require('express');
let request = require('request');
let dotenv = require('dotenv');
dotenv.config();
let apps = express();
let port = process.env.PORT || 9800;

apps.use(express.static(__dirname + "/public"));
apps.set("views", "./src/views");
apps.set("view engine", "ejs");

apps.get("/weather", (req, res) => {
    let city = req.query.city ? req.query.city : "Delhi";
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=${process.env.KEY}`;

    request(url, (error, response) => {
        if (error) throw error;
        let data = JSON.parse(response.body);
        // res.send(data);
         res.render("index", { title: "Weather App", result: data });
    })
})


apps.listen(port, (error) => {
    if (error) throw error;
    console.log("Weather Apps server is running on port " + port);
})
// fbf712a5a83d7305c3cda4ca8fe7ef29
// https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid= ${process.env.KEY}