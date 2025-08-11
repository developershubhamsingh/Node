// let os = require('os');

// console.log("platform : " + os.platform());
// console.log("architecture : ", os.arch());
// // console.log("cpu's: ", os.cpus());
// // console.log("cpu's: ", JSON.stringify(os.cpus()));
// console.log("cpu's: ", os.cpus().length, " core");
// // console.log("free memory: ", os.freemem() / 1024 / 1024, " MB");
// console.log("free memory: ", os.freemem() / 1024 , " GB");

// ===========================================//
// let fs = require('fs');
//creating file and writing content into it .
// fs.writeFile("file1", "content of file 1", (error) => {
//     if (error) throw error
//     console.log("file created and content inserted")
// })
// fs.appendFile("file1", "\n next content .", (error) => {
//     if (error) throw error
//     console.log("next content inserted")
// })
// fs.rename("file1","file1.txt",(error)=>{
//     if (error) throw error
//      console.log(" file renamed .")
// })
// fs.readFile("file1.txt",'utf-8', (error, data) => {
//     if (error) throw error;
//     console.log(data)
// })
// fs.unlink("file1.txt",(error)=>{
//     if(error)throw error
//     console.log("file deleted")
// })
// ===========================================//

// let http = require('http');
// let server = http.createServer((req, res) => {
//     res.write("<h1>Hello from http servers .</h1>")
//     res.end()
// })
// server.listen(7000, (error) => {
//     if (error) throw error;
//     console.log("server running on port no 7000")
// })

// ===========================================//
// let http = require('http');
// let fs = require("fs");

// let server = http.createServer((req, res) => {
//     fs.readFile("city.json", "utf-8", (error, data) => {
//         if (error) throw error;
//         res.write(data);
//         res.end();
//     })
// })

// server.listen(7000, (error) => {
//     if (error) throw error;
//     console.log("server running on port no 7000")
// })
// ===========================================//
