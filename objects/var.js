//var keywoord variables are function based scope
// while let and const are block scope

var firstName = 'Prabir'

firstName = 'Prasad'

var firstName = 'Ram'   //valid using var keyword

console.log(firstName);

if (10 === 10) {
    var lastName = 'Prasad'
}

console.log(lastName);

const setName = function () {
    //function based scope
    var name = 'ABC'
}

setName()
// console.log(name);

console.log(age);
var age = 10    //The variable get hoisted(only for var keyword) on the top but its value doesn't, eg: var age


num = 2
console.log(num);
var num