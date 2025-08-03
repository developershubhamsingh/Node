let express = require('express');
//  To access the method from the express we have to make the objects of express.
let app = express();
let port = 7000;

// Get > Retrieve the data
// default routes .//
app.get('/', (req, res) => {
    res.send(`<h1>Hello from express .</h1>`)
});

//adding more routes .//
  
app.get('/products',(req,res)=>{
    res.send(`<h1>This is products Routes . </h1>`)
})

app.get("/details",(req,res)=>{
    res.send(`<h1>This is products details Route .</h1>`)
})

app.get("/category",(req,res)=>{
    res.send(`<h1>This is category details Route .</h1>`)
})

app.get("/details",(req,res)=>{
    res.send(`<h1>This is category details Route .</h1>`)
})
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`server is running on port ${port}`)
})


