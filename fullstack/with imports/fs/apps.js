import express from "express";
import ejs, { name } from "ejs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let apps = express();
let port = 7000;
import categoryRouter from "./src/controller/category.js"
import productsRouter from "./src/controller/products.js"
import { dbConnect } from "./src/controller/dbConnect.js";

const Link = [
    { link: "/", name: "Home" },
    { link: "/category", name: "category" },
    { link: "/products", name: "products" }
]
//static //
apps.use(express.static(__dirname + "/public"));
//ejs path//
apps.set("views", "./src/view")
// view engine
apps.set("view engine", "ejs")


apps.get("/", (req, res) => {
    res.render("index", { title: "Hello from Server !" })
})

apps.use("/category", categoryRouter(Link));
apps.use("/products", productsRouter(Link));

apps.listen(port, () => {
    dbConnect();
    console.log("Server is Running in port ", port)
}).on("error", (Error) => {
    console.log("Problem Occurred Running Server", Error)
})