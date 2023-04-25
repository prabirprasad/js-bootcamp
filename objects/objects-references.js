let myAccount = {
    name: 'Prabir Prasad',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount

// otherAccount.income = 1000
// otherAccount = {}   //This doesn't affect the original object same as the function object
// console.log(otherAccount);

let addIncome = function(account, income) {
    account.income = account.income + income
}

let addExpenses = function (account, amount) {
    // account = {}     This doesn't affect the original object
    account.expenses = account.expenses + amount
}

let getAccountSummary = function(account) {
    let balance = account.income -account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

// addExpenses(myAccount, 2.5)
// console.log(myAccount);
addIncome(myAccount, 1000)
addExpenses(myAccount, 100)
addExpenses(myAccount,100)
console.log(getAccountSummary(myAccount));
resetAccount(myAccount)
console.log(getAccountSummary(myAccount));
