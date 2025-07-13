function wrapperMulitply(fun, n) {
    return function (...args) {
        return fun.apply(this, args) * n;
    }
}

function wrapperDivide(fun, n) {
    return function (...args) {
        return fun.apply(this, args) / n;
    }
}

export { wrapperMulitply, wrapperDivide };