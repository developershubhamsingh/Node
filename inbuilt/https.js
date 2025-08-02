// creating apis with inbuilt package http then we get to know what is the problem with http and why we need express.
//handling route with http server is difficult so we work with express .
//express is a framework of node that allows to create routes very easily .
 
const http = require('http');

// creating server
// request : what we send to the server(by three ways i.e. params ,queryParams,body) .
// response: what we receive from the server .

let server = http.createServer((req, res) => {
    res.write(`<h1>Hello from http servers .</h1>`)
    res.end()
})
// 
server.listen(7000)

// error handling can also be done but not necessary .//
// server.listen(7000, (err) => {
//     if (err) throw err;
//     console.log(`Server running on port no 7000`)
// })

// localhost:7000 same as 127.0.0.1 :7000 .
// avoid port no 8080 bzs it is used by some other application .