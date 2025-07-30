
process.env.UV_THREADPOOL_SIZE = 10;
const fs = require('fs')
const path = require('path');
const crypto = require('crypto')
const{} = require('worker_threads')
const start = Date.now()
setTimeout(() => console.log("setTimeout 1"), 0)
setImmediate(() => console.log("this is the setImmediate funciton 1"))

const filepath = path.resolve(__dirname, './bigfile.txt');
fs.readFile(filepath, 'utf-8', () => {
  console.log("IO polling is finish")
  setTimeout(() => console.log("setTimeout 2"), 0)
  setTimeout(() => console.log("setTimeout 3"), 5 * 1000)
  setImmediate(() => console.log("this is the setImmediate funciton 2"))

  //cpu intenseve
  crypto.pbkdf2('secret', 'salt', 100000, 64,
    'sha512', () => {
      console.log(`${Date.now() - start}ms`, "password 1 done")
    })
  crypto.pbkdf2('secret', 'salt', 100000, 64,
    'sha512', () => {
      console.log(`${Date.now() - start}ms`, "password 2 done")
    })
  crypto.pbkdf2('secret', 'salt', 100000, 64,
    'sha512', () => {
      console.log(`${Date.now() - start}ms`, "password 3 done")
    })
  crypto.pbkdf2('secret', 'salt', 100000, 64,
    'sha512', () => {
      console.log(`${Date.now() - start}ms`, "password 4 done")
    })
  crypto.pbkdf2('secret', 'salt', 100000, 64,
    'sha512', () => {
      console.log(`${Date.now() - start}ms`, "password 5 done")
    })
  crypto.pbkdf2('secret', 'salt', 100000, 64,
    'sha512', () => {
      console.log(`${Date.now() - start}ms`, "password 6 done")
    })

})

console.log("Top level code")