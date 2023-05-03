// const ps = document.querySelectorAll('p')

// ps.forEach(function (item) {
//     if(item.textContent.toLowerCase().includes('the')) {
//         item.remove()
//     }
// })

const todos = [
    {
        text: 'Clean the kitchen',
        completed: true
    },
    {
        text: 'Book flights',
        completed: false
    },
    {
        text: 'Research museum',
        completed: false
    },
    {
        text: 'Walk the dog',
        completed: true
    },
    {
        text: 'Finish this course!',
        completed: false
    }
]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (item) {
        return !item.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function (item) {
        const p = document.createElement('p')
        p.textContent = item.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
   e.target.textContent = 'Change'
})

// Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value);
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})