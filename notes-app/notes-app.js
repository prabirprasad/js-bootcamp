// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove

// const ps = document.querySelectorAll('p')

// ps.forEach(function (item) {
//     item.textContent = '*****'
//     // console.log(item.textContent);
//     // item.remove()
// })

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new paragraph'
// document.querySelector('body').appendChild(newParagraph)

// const notes = [
//     {
//         title: 'My next trip',
//         body: 'I would like to go to Spain'
//     },
//     {
//         title: 'Habbits to work on',
//         body: 'Exercise. Eating a bit better'
//     },
//     {
//         title: 'Office Modification',
//         body: 'Get a new seat'
//     }
// ]

// localStorage.setItem('location', 'Shillong')

// console.log(localStorage.getItem('location'));

// localStorage.removeItem('location')

// localStorage.clear()

// const user  = {
//     name: 'Prabir',
//     age: 27
// }

//  Convert object to string
// const userJSON = JSON.stringify(user)
// console.log(userJSON);
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
//  Convert string to object
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`);

let notes = []

const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')

        if (note.title.length > 0) {
            noteElement.textContent = note.title
        } else {
            noteElement.textContent = 'Unnamed Note'
        }

        document.querySelector('#notes').append(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(JSON.parse(localStorage.getItem('notes')), filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
})