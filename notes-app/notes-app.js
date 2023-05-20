'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', () => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

//  Unix epoch  -   January 1st 1970 12:00:00 

// const date1 = new Date('March 1 2027 12:00:00')
// const timestamp1 = date1.getTime()
// const date2 = new Date()
// const timestamp2 = date2.getTime()

// if (timestamp1 > timestamp2) {
//     console.log(`Timestamp1 is greater ${new Date(timestamp1).toString()}`);
// } else {
//     console.log(`Timestamp2 is greater ${new Date(timestamp2).toString()}`);
// }

// const now = moment()
// now.add(1, 'year').subtract(20, 'days')
// console.log(now.toString());
// console.log(now.format('MMMM Do, YYYY'));

// const birthday = moment()
// console.log(birthday.valueOf());
// birthday.year(1998).month(9).date(10)
// console.log(birthday.format('MMM D, YYYY'));