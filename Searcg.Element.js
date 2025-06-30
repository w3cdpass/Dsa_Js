// Find a index of the given array
// let arr = [4, 5, 7, 6, 30];

// function findIndex(arr, ind) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === ind) {
//             return i
//         }
//     }
//     return -1

// }

// const value = findIndex(arr, 46)
// console.log(value)

// find the negative number




/**
 * 
 * @param {*} array to get the lenght of the negative int
 * @returns 
 */
function getnegative(array) {
    let cout = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            cout  += 1
            
        }
    }
    return cout
}
let arr = [5, 6, 7, -1, 5, -2, -7, 6,7,8,-9,-2,-7,4,-3,-9];
const to = getnegative(arr)
// console.log(to);

/**
 * 
 * @param {*} array  to get the value of the negative 
 */
function getnegativeNums(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0) {
            console.log(array[i])
        }
    }
}
// getnegativeNums(arr)




// to find the largest number in given array 
// solution 1 with bug 
let findlarg = [90,4, 5, 7, 6, 30, 880];

/**
 * 
 * @param {*} arr  let initialize the largest is -1 then compare one by one in given array 
 * @returns 
 */
function find(arr) {
    let lg = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lg) {
            lg = arr[i]
        }
        // console.log(findlarg[i] / 2)
    }
    return lg
}

const SolutionWithBug= find(findlarg)
console.log('Solution 1 with the bug',SolutionWithBug)


// solution 2 with build in module in js
function findlg(array) {
    let lg = -Infinity
    for (let i = 0; i < array.length; i++){
        if (array[i] > lg) {
            lg = array[i]
        }
    }
    return lg
}

const SolutionWithInfinite = findlg(findlarg)
console.log('Solution with the Built in method in js Infinite', SolutionWithInfinite);


// solution 3 with perfect flow

function findlgr(array) {
    let lg = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] > lg) {
            lg = array[i]
        }
    }

    return lg
}

const SolutionWith1stElementIndex = findlgr(findlarg)
console.log('Solution with the perfect comparing flow like suppose the initial is first idex of the array ',SolutionWith1stElementIndex)