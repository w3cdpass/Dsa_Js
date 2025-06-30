// find second largest number in an array

// function getsmallstNumber(arr) {
//     let large = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > large) {
//             large = arr[i]
//         }
//     }
//     let secondlarge = large
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < secondlarge) {
//             secondlarge  = arr[i]
//         }
//     }
//     // if (arr[i] < secondlarge) {
        
//     // }
//     return secondlarge
// }
// let arr = [4, 1, 6, 7, 82, 2];
// const large = getsecontLargeNum(arr)
// console.log(large)


/**
 *  
 * @param {*} arr to get the second largest number  
*  @description to get check tow var if one greater than fst and seond          
 * @returns 
// if the first element[0] is greater than - Infinity before updating the firstlargest variable
// it should update the secondlargest variable then update the secondlargest variable
// now done we have to check the secondlargest variable if the element[0] is greater than
// secondlargest get the update secondlargest = element[0]
 */

// conerCases
function getseclarg(arr) {
    if(arr.length < 2) return null
    let fstlg = -Infinity;
    let seclg = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > fstlg) {
            seclg = fstlg
            fstlg = arr[i]
        } else if (arr[i] > seclg && arr[i] != fstlg) {
            seclg = arr[i]
        }
    }
    return seclg
}

const arr = [34, 34, 3];

const get = getseclarg(arr)
console.log(get)

// Corner Case :- 
/** 
 * what if array is empty?
 * what if array has negative number?
 * what if array has duplicates?
 */