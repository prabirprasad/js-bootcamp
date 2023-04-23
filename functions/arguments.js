// Multiple arguments
let add = function (a, b, c) {
    return a + b +c
}

let result = add(10, 1, 3)
console.log(result);

// Default arguments
let getPlayerScore = function (playerName = 'Anonymous', playerScore = 0) {
    return `Name: ${playerName}, Score: ${playerScore}`
    // return 'Name: ' + playerName + '\nScore: ' + playerScore 
}

let playerScore = getPlayerScore(undefined, 20)
console.log(playerScore);

let getTipAmount = function (billedAmount, tipPercent = 0.2) {
    let percent = tipPercent * 100
    let tipAmount = billedAmount * tipPercent
    return `A ${percent}% tip on $${billedAmount} would be $${tipAmount}`
    // return 'Tip Amount: ' + (billedAmount) * tipPercent
}

let tipAmount = getTipAmount(40, 0.25)
console.log(tipAmount);

let name = 'Vikram'
let age = 12

console.log(`My name is ${name}. I'm ${age} years old!`);