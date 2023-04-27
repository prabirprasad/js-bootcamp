const todos = ['Work 1', 'Work 2', 'Work 3', 'Work 4', 'Work 5']

todos.splice(2, 1)
todos.push('new last work')
todos.shift()

console.log(`You have ${todos.length} todos.`);
// console.log(todos);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`);
})

// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`);
// }