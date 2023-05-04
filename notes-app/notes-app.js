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

const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    },
    {
        title: 'Office Modification',
        body: 'Get a new seat'
    }
]

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
        noteElement.textContent = note.title
        document.querySelector('#notes').append(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'Button was clicked'  
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
})