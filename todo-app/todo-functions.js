const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

const saveTodo = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//  Remove todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const generateDOM = function (todo) {
    const todoElement = document.createElement('div')
    const checkboxElement = document.createElement('input')
    const textElement = document.createElement('span')
    const buttonElement = document.createElement('button')

    //  Setup todo checkbox
    checkboxElement.setAttribute('type', 'checkbox')
    todoElement.appendChild(checkboxElement)

    //  Setup the todo text
    textElement.textContent = todo.text
    todoElement.appendChild(textElement)

    //  Setup the remove button
    buttonElement.textContent = 'x'
    todoElement.appendChild(buttonElement)
    buttonElement.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodo(todos)
        renderTodos(todos, filters)
    })

    return todoElement
}

const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
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
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach(function (item) {
        document.querySelector('#todos').appendChild(generateDOM(item))
    })
}