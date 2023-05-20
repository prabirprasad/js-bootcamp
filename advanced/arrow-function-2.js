// DIFFERENCE BETWEEN REGULAR FUNCTIONS AND ARROW FUNCTIONS
// --------------------------------------------------------

// arrow function don't bind arguments, they don't bind this

// 1. arguments only exist in regular functions it is not bound, there is no local variable in arrow function
const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44));

// arrow function doesn't bind arguments
const addArrow = () => {
    return arguments[0] + arguments[1]
}

console.log(addArrow(11, 22, 33, 44));

// 2. arrow function don't bind their this value, meaning they are bad candidates for most methods
const car = {
    color: 'Red',
    getSummary: function () {
        return `The car is ${this.color}`
    }
    // when we are creating methods/functions on object property 
    // we should stick to regular functions rather than arrow function
    // getSummary: () => {
    //     return `The car is ${this.color}`
    // }
}

console.log(car.getSummary());