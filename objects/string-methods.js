let name ='   Prabir Prasad   '

// Length property
console.log(name.length);

// Convert to Uppercase
console.log(name.toUpperCase());

// Convert to Lowercase
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'));

// Trim
console.log(name.trim());


let isValidPassword = function (userPassword) {
    return userPassword.length >= 8 && !userPassword.includes('password')
}

console.log(isValidPassword('kjh'));
console.log(isValidPassword('kjhdkjfhsdfkjgdfhjb'));
console.log(isValidPassword('kjhpasswordkjvkjbxvc'));