const arr = [{ num: 2344 }, { num: 45643 }];
let p  = 0
arr.map((item) => {
    p += item.num
})
console.log(p)
