// write the function that returns the smallest number of the given array


function getSmallest(arr) {
    let smallNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallNum) {
            smallNum = arr[i]
        }
    }
    return smallNum
}

let array = [3, 45, 90, 2, -1];
const smallest = getSmallest(array)
// console.log(smallest)

// const matrix = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]];

// const flated = matrix.flat();

// function getnega(arr) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < 0) {
//             count =  count + 1
//         }
//     }
//     return count
// }

// const nega = getnega(flated)
// console.log(nega)

// function getlargestodd(num) {
//     for (let i = num.length - 1; i >= 0; i--){
//         if (parseIntnum[i] % 2 !== 0) {
//             return num.substring(0, i + 1);
//         }
//     }
//     return "";
// }

// let num = '239537672423884969653287101';
// const get = getlargestodd(num)
// console.log(get)  // ouput => //239537672423884969653287101





