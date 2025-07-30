// let num = 18
// const str = num.toString()
// const arr = str.split('')
// const f = arr.entries()
// let full = []
// for (let i = 0; i < arr.length; i++){
//     // full.push(f.next().value)
//     full.push([i, arr[i]])

// }

// console.log(full)
// // for (let i = 0; i < arr.entries(); i++){
// //     // let
// //     console.log(arr.next().value)
// // }
let x = 121
let y = x
let rev = 0;
while (x > 0) {
    let rem = x % 10;
    rev = (10 * rev) + rem
    x = x / 10
}  
console.log(rev)
