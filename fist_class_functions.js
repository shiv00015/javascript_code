
function wrapperMulitply(fun, n) { // First class function and higher order function
    return function (...args) {
        return fun.apply(this, args) * n;
    }
}

function wrapperDivide(fun, n) { // First class function and higher order function
    return function (...args) {
        return fun.apply(this, args) / n;
    }
}   

const obj = { // object with methods
    a: 10,
    b: 23,
    getA(n) {
        return (this.a + this.b) / n
    },
    getB() {
        return this.b;
    }
}

const varint = 10;
const getAByMultiply = wrapperMulitply(obj.getA.bind(obj), varint) // bind method to set the context of 'this' to obj
const getAByDivide = wrapperDivide(obj.getA.bind(obj), varint) // bind method to set the context of 'this' to obj

console.log(getAByMultiply(2)); // Outputs: 165
console.log(getAByDivide(2)); // Outputs: 1.65