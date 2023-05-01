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

const incompleteTodos = todos.filter(function (item) {
    return !item.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(summary)

todos.forEach(function (item) {
    const p = document.createElement('p')
    p.textContent = item.text
    document.querySelector('body').appendChild(p)
})