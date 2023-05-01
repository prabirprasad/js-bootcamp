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

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove

const ps = document.querySelectorAll('p')

ps.forEach(function (item) {
    item.textContent = '*****'
    // console.log(item.textContent);
    // item.remove()
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new paragraph'
document.querySelector('body').appendChild(newParagraph)