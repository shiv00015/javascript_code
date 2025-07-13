function personalDeatils(name, age) {
    return {
        getPersonalDetails: function () {
            return `Name: ${name}, Age: ${age}`;
        },
        setPersonalDetails: function (newName, newAge) {
            name = newName;
            newAge = newAge;
        }
    }
}

export function wrapperMulitply(fn, varint) {
    return function (...args) {
        return fn.apply(this, args) * varint;
    }
}

function addDataCart(item, price) {
    return {
        getItem: function () {
            return item;
        },
        getPrice: function () {
            return price;
        },
        setItem: function (newItem) {
            item = newItem;
        },
        setPrice: function (newPrice) {
            price = newPrice;
        }
    }
}

export function internalFunction() {
    for (var i = 1; i <= 3; i++) {
        (function (j) {
            setTimeout(() => {
                console.log(`After ${j} second(s): ${j}`);
            }, j * 1000);
        })(i);
    }
}
    

export { personalDeatils, addDataCart };