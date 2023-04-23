// Functions    -   input (arguments), code, output (return value)

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()

let squareAGivenNumber = function (number) {
    let result = number * number
    return result
}

let value = squareAGivenNumber(3)
let otherValue = squareAGivenNumber(10)

console.log(value);
console.log(otherValue);


let convertFarenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)
console.log(tempOne);
console.log(tempTwo);