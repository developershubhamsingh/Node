let express = require('express');
//  To access the method from the express we have to make the objects of express.
let app = express();
let port = 7000;
//Try express router when dealing with routes .
let {dbConnect}= require('./src/controller/dbcontroller');


let navLink = [
    { name: "Home", link: "/" },
    { name: "Category", link: "/category" },
    { name: "Products", link: "/products" },
]

let categoryRouter = require('./src/controller/categoryRouter')(navLink);
let productsRouter = require('./src/controller/productsRouter')(navLink);

// static file path //
app.use(express.static(__dirname + "/public"))
//ejs file path //
app.set("views", "./src/views")
// view engine//
app.set("view engine", "ejs")

// Get > Retrieve the data
// default routes .//
app.get('/', (req, res) => {
    // res.send(`<h1>Hello from express .</h1>`)
    res.render("index", { title: "Home Pages .", text: "full Stack ." })
    // this is how data can be binned.//
    //     <h2><%=title%></h2>
});



app.use('/category', categoryRouter);
app.use('/products', productsRouter);

app.listen(port, (err) => {
    dbConnect();
    if (err) throw err;
    console.log(`server is running on port ${port}`)
})

