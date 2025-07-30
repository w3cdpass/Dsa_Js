const Router = require('router')
const obj1 = {
    name: "tiger",
    age: 3
};

const obj2 = {
    name: "tiger",
    age: 3,
    farmer : true
};
// deprecated to the mdn avoid to use the production
obj1.__proro__ = obj2
Object.setPrototypeOf(obj1, obj2)

console.log(obj1.farmer)

// function get() {
//     console.log('erer0')
// }

obj1.prototype.findsum = () => {
    console.log("this is findsum code funciton")
}

obj1.findsum()