function personalDeatils(name, age)  {
    return {
        getPersonalDetails: function() {
            return `Name: ${name}, Age: ${age}`;
        },
        setPersonalDetails: function(newName, newAge) {
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

function addDataCart (item, price) {
    return {
        getItem: function() {
            return item;
        },
        getPrice: function() {
            return price;
        },
        setItem: function(newItem) {
            item = newItem;
        },
        setPrice: function(newPrice) {
            price = newPrice;
        }
    }
}

export { personalDeatils, addDataCart };