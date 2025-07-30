// Blocking code example with time exectuion
const fs = require('fs');
const path = require('path');
const filepath = path.resolve(__dirname,'./bigfile.txt')
console.time("Blocking time taken");
const data = fs.readFileSync(filepath, "utf-8")
console.timeEnd("Blocking time taken")
console.log("file content length", data.length)

// Non blocking code example

// fs.readFile(filepath, "utf-8", (err, data) => {
//     if (err) throw err;
//     console.time("non Blocking Read time");
//     console.log("File Content length", data.length)
//     console.timeEnd("non Blocking Read time");
// });

// console.log("non Blocking Read time")