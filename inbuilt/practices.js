// const fs = require('fs');

//creating file and writing content into it .//

// fs.writeFile('hello.text', 'hello writefile', (error) => {
//     if (error) throw error;
//     console.log(`file created and data inserted successfully`)
// });

//Appending data .//

// fs.appendFile('hello.text', "\n data appended successfully .", (error) => {
//     if (error) throw error;
//     console.log('data appended success')
// })

// reading data .//
// fs.readFile('hello.text', 'utf-8', (error, data) => {
//     if (error) throw error;
//     console.log('file read :', data)
// })

//renaming the file .//

// fs.rename('hello.text', 'hello.txt', (error) => {
//     if (error) throw error;
//     console.log('file renamed successfully')
// })


//file deletion .// 
// fs.unlink('hello.txt', (error) => {
//     if (error) throw error;
//     console.log('file deletion success')
// })

// const fs = require('fs')
// const http = require('http');

// const server = http.createServer((req, res) => {
//     //reading file .//
//     fs.readFile('city.json', 'utf-8', (error, data) => {
//         if (error) throw error;
//         console.log('file reading success')
//         res.write(data)
//         res.end()
//     })

// })
// server.listen(7000, (error) => {
//     if (error) throw error;
//     console.log('server running on port no 7000')
// })