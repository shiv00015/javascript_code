/*

Basic example of currying in JavaScript.
This function takes three arguments and returns their sum.
*/

export function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

export function curry(fun) {
    return function curried(...args) {
        if (args.length >= fun.length) {
            return fun.apply(this, args);
        }
        return function (...next) {
            return curried.apply(this, [...args, ...next])
        }
    }
}