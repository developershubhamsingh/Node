let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res) => {
    //reading files .//
    fs.readFile('city.json', 'utf-8', (err, data) => {
        if (err) throw err;
        //returns data of files
        res.write(data);
        res.end();

    })
})

server.listen(7000, (err) => {
    if (err) throw err;
    console.log(`Server running on port no 7000`)
})