let express = require('express');
//  To access the method from the express we have to make the objects of express.
let app = express();
let port = 7000;

//Try express router when dealing with routes .

let categoryRouter = require('./src/controller/categoryRouter')();
let productsRouter = require('./src/controller/productsRouter')();

// Get > Retrieve the data
// default routes .//
app.get('/', (req, res) => {
    res.send(`<h1>Hello from express .</h1>`)
});



app.use('/category', categoryRouter);
app.use('/products', productsRouter);

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`server is running on port ${port}`)
})

