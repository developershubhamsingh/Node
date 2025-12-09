import express from "express";
import { getData } from "./dbConnect.js";

let categoryRouter = express.Router();
// let category = [
//     {
//         "id": 1,
//         "category": "Fashion",
//         "thumb": "https://i.ibb.co/56VP0Fn/cloths.jpg"
//     },
//     {
//         "id": 2,
//         "category": "Electronics",
//         "thumb": "https://i.ibb.co/pw5Wtdx/appliances.jpg"
//     },
//     {
//         "id": 3,
//         "category": "Essentials",
//         "thumb": "https://i.ibb.co/0cw34xm/essentials.jpg"
//     },
//     {
//         "id": 4,
//         "category": "Footwear",
//         "thumb": "https://i.ibb.co/r3SZq8S/footware.jpg"
//     }
// ]
const Router = (Link) => {
    categoryRouter.route("/")
        .get(async (req, res) => {
            let query = {};
            let category = await getData("category", query)
            res.render("category", { title: "Category Page", category, Link })
        })
    return categoryRouter;
}
export default Router;