// const todos = ['Work 1', 'Work 2', 'Work 3', 'Work 4', 'Work 5']

// todos.splice(2, 1)
// todos.push('new last work')
// todos.shift()

// console.log(`You have ${todos.length} todos.`);
// console.log(todos);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

// todos.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`);
// })

// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`);
// }

const todos = [
    {
        text: 'Work 1',
        completed: true
    },
    {
        text: 'Work 2',
        completed: false
    },
    {
        text: 'Work 3',
        completed: true
    },
    {
        text: 'Work 4',
        completed: false
    },
    {
        text: 'Work 5',
        completed: true
    }
]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    
    if (index > -1) {
        todos.splice(index, 1)
    }
}

// deleteTodo(todos, 'work 5')
// console.log(todos);

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

// console.log(getThingsToDo(todos));

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if(!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos);