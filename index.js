import { wrapperDivide, wrapperMulitply } from "./concepts/first-class-functions.js";


const obj = {
    a: 10,
    b: 23,
    getA (n) {
        return (this.a + this.b) / n
    },
    getB () {
        return this.b;
    }
}

const varint = 10;
const getAByMultiply = wrapperMulitply(obj.getA.bind(obj), varint)
const getAByDivide = wrapperDivide(obj.getA.bind(obj), varint)

console.log(getAByMultiply(2));
console.log(getAByDivide(2));