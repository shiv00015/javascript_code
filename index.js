import { internalFunction, personalDeatils } from "./concepts/closure.js";
import { curry, log } from "./concepts/curry.js";
import { debounce } from "./concepts/debounce.js";
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

// internalFunction();

// currying example

function add(a , b, c) {
    return a + b + c;
}

// const curriedAdd = curry(add);
// console.log(curriedAdd(2)(4)(6));
// console.log(curriedAdd(2, 4)(6));
// console.log(curriedAdd(2)(3, 9));

// const errorLogName = log("error")(new Date().toISOString());
// errorLogName("Some thing went wrong");

// const succcessFullyLogName = log("success")(new Date().toISOString());
// succcessFullyLogName("the service executed successfully!");


function getText(text) {
    return "sh".includes(text) ? text : '';
}
 const checkText = debounce(getText, 1200);
 checkText("sfd").then((result) => {
    console.log('Final result:', result); // Logs "Final result: 10" after 1 second
});
 checkText('asfsdf').then((result) => {
    console.log('Final result:', result); // Logs "Final result: 10" after 1 second
});
 checkText('sh').then((result) => {
    console.log('Final result:', result); // Logs "Final result: 10" after 1 second
});