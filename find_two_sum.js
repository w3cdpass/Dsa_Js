function twoSum(arr) {
    if (arr.length < 2) return null;
    let initial = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > initial) {
            console.log(arr[i])
        }
    }
    // return initial
}
const arr = [2, 7, 11, 15, 89]; // target = 9
const get = twoSum(arr)
console.log(get)