let express = require('express');
let categoryRouter = express.Router();

let categoryData = [
    {
        "id": 1,
        "category": "Fashion",
        "thumb": "https://i.ibb.co/56VP0Fn/cloths.jpg"
    },
    {
        "id": 2,
        "category": "Electronics",
        "thumb": "https://i.ibb.co/pw5Wtdx/appliances.jpg"
    },
    {
        "id": 3,
        "category": "Essentials",
        "thumb": "https://i.ibb.co/0cw34xm/essentials.jpg"
    },
    {
        "id": 4,
        "category": "Footwear",
        "thumb": "https://i.ibb.co/r3SZq8S/footware.jpg"
    }
]
const router = () => {

    categoryRouter.route('/')
        .get((req, res) => {
            // res.send(`<h1>This is category Route .</h1>`)
            res.render('category', { categories: categoryData ,title:"category page" })
        })

    categoryRouter.route('/details')
        .get((req, res) => {
            res.send(`<h1>This is category details Route .</h1>`)

        })
    return categoryRouter
}
module.exports = router