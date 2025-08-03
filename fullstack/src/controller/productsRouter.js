let express = require('express');
let productsRouter = express.Router();
const router = () => {
    productsRouter.route('/')
        .get((req, res) => {
            res.send(`<h1>This is products Routes . </h1>`)
        })
    productsRouter.route('/details')
        .get((req, res) => {
            res.send(`<h1>This is products details Routes . </h1>`)
        })
    return productsRouter
}
module.exports = router