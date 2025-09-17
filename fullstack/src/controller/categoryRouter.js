let express = require('express');
let categoryRouter = express.Router();
const { getData } = require('./dbcontroller');

const router = (navLink) => {

    categoryRouter.route('/')
        .get(async (req, res) => {
            let query = {};
            let data = await getData('category', query);
            res.render('category', { title: "category page", category: Data, navLink })
        })


    return categoryRouter
}
module.exports = router