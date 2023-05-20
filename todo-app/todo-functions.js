'use strict'

// Fetching existing todos from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
    
}

// Save todo to local storage
const saveTodo = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//  Toogle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
       todo.completed = !todo.completed
    }
}

//  Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const generateDOM = (todo) => {
    const todoElement = document.createElement('div')
    const checkboxElement = document.createElement('input')
    const textElement = document.createElement('span')
    const buttonElement = document.createElement('button')

    //  Setup todo checkbox
    checkboxElement.setAttribute('type', 'checkbox')
    checkboxElement.checked = todo.completed
    todoElement.appendChild(checkboxElement)
    checkboxElement.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodo(todos)
        renderTodos(todos, filters)
    })

    //  Setup the todo text
    textElement.textContent = todo.text
    todoElement.appendChild(textElement)

    //  Setup the remove button
    buttonElement.textContent = 'x'
    todoElement.appendChild(buttonElement)
    buttonElement.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodo(todos)
        renderTodos(todos, filters)
    })

    return todoElement
}

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((item) => !item.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach((item) => {
        document.querySelector('#todos').appendChild(generateDOM(item))
    })
}