const replicax = require('replicax')

const app = replicax();

app.get('/', (req, res) => {
    res.json({ message: ' linked and working!' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
// let n = 5;
// for (let i = n; i > 0; i--){
//     let row = ''
//     for (let j = 0; j < i -1; j++){
//         row += " *"
//         // console.log('i=',i, 'j=',j)
//     }
//     console.log(row)
// }

// output
// * * * *
//  * * *
//  * *
//  *


// for (let i = 0; i < n; i++){
//     let row = ''
//     for (let j = 0; j < n; j++){
//         row += " *"
//         console.log('i=',i, 'j=',j)
//     }
//     // console.log(row)
// }


// for (let i = n; i > 0; i--){
//     let row = ''
//     for (let j = 0; j > n; j++){
//         row += ' *'
//     }
//     console.log(row)
// }

// for (let i = 0; i < n; i++){
//     let row = ''
//     for (let j = 0; j <= i; j++){
//         row +=  ` ${ i + 1}`
//     }
//     console.log(row)
// }
//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5

// for (let i = n; i > 0; i--) {
//     let row = ''
//     for (let j = 0; j < i; j++) {
//         // row += ` ${j + 1}`
//         row += " *"
//     }
//     console.log(row)
// }

//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1


// for (let i = 0; i < n; i++){
//     let row = ''
//     for (let j = 0; j < n - (i + 1); j++){
//         row += "_"
//     }
//     for (let k = 0; k < i + 1; k++){
//         row += "*"
//     }
//     console.log( row)
// }

// for (let i = 0; i < n; i++) {
//     let row = ''
//     // let swit = 1;
//     for (let j = 0; j < i + 1; j++) {
//         row += i
//         // console.log(i)
//     }
//     console.log(row)
// }