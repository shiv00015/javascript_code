import { internalFunction, personalDeatils } from "./concepts/closure.js";
import { wrapperDivide, wrapperMulitply } from "./concepts/higherorder-functions.js";


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

// const varint = 10;
// const getAByMultiply = wrapperMulitply(obj.getA.bind(obj), varint)
// const getAByDivide = wrapperDivide(obj.getA.bind(obj), varint)

// console.log(getAByMultiply(2));
// console.log(getAByDivide(2));


// const inStance = personalDeatils("Shivprasad", 25);
// console.log(inStance.getPersonalDetails());
// inStance.setPersonalDetails('rahul', 30);
// console.log(inStance.getPersonalDetails());
// console.log(inStance.getPersonalDetails());

// const inStance2 = personalDeatils("raj", 25);
// console.log(inStance2.getPersonalDetails());
// inStance.setPersonalDetails('rahul', 30);
// console.log(inStance.getPersonalDetails());
// console.log(inStance.getPersonalDetails());

internalFunction();


