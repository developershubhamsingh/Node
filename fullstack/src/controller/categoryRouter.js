let express = require('express');
let categoryRouter = express.Router();
const { getData } = require('./dbcontroller');
// rare case we get the data from file always data will come from the database.
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
// getting data from the database.

const router = (navLink) => {

    categoryRouter.route('/')
        .get(async (req, res) => {
            let query = {};
            let data = await getData('category', query);
            res.render('category', { title: "category page", category:data, navLink })
        })


    return categoryRouter
}
module.exports = router