let express = require('express');
let categoryRouter = express.Router();
const router = () => {

    categoryRouter.route('/')
        .get((req, res) => {
            res.send(`<h1>This is category Route .</h1>`)
        })

    categoryRouter.route('/details')
        .get((req, res) => {
            res.send(`<h1>This is category details Route .</h1>`)
        })
    return categoryRouter
}
module.exports = router