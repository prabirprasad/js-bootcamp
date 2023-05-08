// const ps = document.querySelectorAll('p')

// ps.forEach(function (item) {
//     if(item.textContent.toLowerCase().includes('the')) {
//         item.remove()
//     }
// })

// const todos = [
//     {
//         text: 'Clean the kitchen',
//         completed: true
//     },
//     {
//         text: 'Book flights',
//         completed: false
//     },
//     {
//         text: 'Research museum',
//         completed: false
//     },
//     {
//         text: 'Walk the dog',
//         completed: true
//     },
//     {
//         text: 'Finish this course!',
//         completed: false
//     }
// ]

let todos = []

const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
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

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })

    localStorage.setItem('todos', JSON.stringify(todos))
    
    renderTodos(todos, filters)

    e.target.elements.todoText.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})