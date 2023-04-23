// Undefined for variables
let name

name = 'Prabir'

if(name === undefined) {
    console.log('Please provide a name');
} else {
    console.log(name);
}

// Undefined for function arguments
// Undefined as function return default value
let squareAGivenNumber = function (number) {
    console.log(number);
}

let result  = squareAGivenNumber()
console.log(result);

// Null as value
let age = 27

age = null

console.log(age);