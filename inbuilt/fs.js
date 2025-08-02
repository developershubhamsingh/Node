// file sys. 
let fs = require('fs');

// fs has many methods to work with files in node.js.
// writeFile | appendFile | readFile | unlink | rename ||

// creating file and writing in it .

//writeFile (fileName, data, callbackFunction)
//writeFile replace the old to new content in the file when it runs twice or thrice.

// fs.writeFile('writeFile.txt', ' Hello from writeFile ', (err) => {
//     if (err) throw err;
//     console.log('File has been created and written to.');
// });

// appending data to the file.

//appendFile (fileName, data, callbackFunction)
//if appendFile runs twice or thrice it will add the content with the old content .

// Note  :you can wite anything to the file that is already created also..
// fs.appendFile('writeFile.txt', 'appending_File  \n ', (err) => {
//   if (err) throw err;
//     console.log('In writeFile Data has been appended .');
// })

//if file name you are giving is not there then it will create another file and will write the content .
// fs.appendFile('appending_File.txt', 'appending_File  \n ', (err) => {
//     if (err) throw err;
//     console.log('Data has been appended to the file .');
// })

// Reading the file .

// readFile (fileName, encoding , callbackFunction i.e.(err, data) => {})
// it takes the file name you want to read.

// fs.readFile('appending_File.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('File content: \n', data);
// });

// Deleting the file .
//takes filename you want to delete.
//unlink (filename ,callback)
// fs.unlink('writeFile.txt', (err) => {
//     if (err) throw err;
//     console.log('File has been deleted.');
// });

// if you want to delete the file that is not there then it will throw an error.
// fs.unlink('nonExistentFile.txt', (err) => {
//     if (err) throw err;
//     console.log('File has been deleted.');
// });

// Renaming the file.
// rename (oldFileName, newFileName, callbackFunction)
// fs.rename('writeFile.doc', 'renamedFile.txt', (err) => {
//     if (err) throw err;
//     console.log('File has been renamed.');
// });



// ============================revision========================//
// let fs = require('fs')

// creating and writing content in it 
// fs.writeFile('file_1.txt', 'Hello !', (err) => {
//     if (err) throw err;
//     console.log("The File file_1.txt  created successfully .")
// })

//appending content in file_1.txt .
// fs.appendFile('file_1.txt', 'Hello Again 😊😊😊', (err) => {
//     if (err) throw err;
//     console.log("The File file_1.txt  append  successfully .")
// })

// reading the files .
// fs.readFile('file_1.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log("The data of file_1.txt  : \n", data)
// })
//Renaming the files .
// fs.rename('file_1.txt', 'file_1', (err) => {
//     if (err) throw err;
//     console.log("The file file_1.txt renamed successfully")
// });

//deleting the files .
// fs.unlink('file_1', (err) => {
//     if (err) throw err;
//     console.log("file deleted successfully")
// })

