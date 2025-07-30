// let count = 0
// while (n > 0) {
    //     n =n / 10
    //     count++
    //     console.log(count)
// }
    

// coner case  like what if the number is zero
function getDigit(n) {
    if (n === 0) return 1
    if(n < 0 ) n = -n
    

        let count = 0;
        while (n > 0) {
            n =Math.floor( n / 10);
            count++
        }
        return count
    }
    
let n = -259;
const get = getDigit(n)
console.log(get)