// Regular function
const square = function (num) {
    return num * num
}

console.log(square(3));

// Arrow function
const squareArrow = (num) => {
    return num * num
}

console.log(squareArrow(4));

// Short hand arrow function
const squareShort = (num) => num * num

console.log(squareShort(5));

const people = [
    {
        name: 'Andrew',
        age: 22
    },
    {
        name: 'Vikram',
        age: 31
    },
    {
        name: 'Jess',
        age: 27
    }
]

const under30 = people.filter(function (person) {
    return person.age < 30
})

const under30Arrow = people.filter((person) => person.age < 30)

console.log(under30);
console.log(under30Arrow);

const person = people.find((person) => person.age === 22)

console.log(person.name);