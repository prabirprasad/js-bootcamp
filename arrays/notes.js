// const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop());   //Delete item from the end of an array and return it
// notes.push('my new note')   //Insert item at the end of an array

// console.log(notes.shift()); //Delete item from the start of an array and return it
// notes.unshift('my first notes') //Insert item at the start of an array

// notes.splice(position of the array, no. of element to delete)
// notes.splice(1, 2)  // Delete the item at index position 1 

//for adding an item
// notes.splice(position of the array, no. of element to delete i.e. 0, item to add)
// notes.splice(1, 0, 'my new second note')

// for replacing an item
// notes.splice(position of the array, no. of element to delete, item to add)
// notes.splice(1, 2, 'my replaced note')

// notes[2] = 'my new note 3'

// passing function as an function arguement is known as callback function
// notes.forEach(function (item, index) {
//     console.log(index);
//     console.log(item);
// })

// console.log(notes.length);
// console.log(notes);
// console.log(notes[0]);
// console.log(notes[notes.length - 1]);

// for (let count = 0; count <= 2; count++) {
//     console.log(count);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count]);
// }

// console.log(notes.indexOf({}));     //output -1
// //  comparing two object doesn't matters if they have same set of objects property and same object property value
// //  That doesn't make two object equal
// console.log({} === {}); 

// //  What make two objects equal is if they are the exact same object in memory
// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject);

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

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }


// find() return the object of the match
const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const note = findNote(notes, 'office Modification')
// console.log(note);

//  filter() return a array

const findNotes = function (notes, query) {
    return notes.filter(function (note) {
        let isTitleMatch = note.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        let isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// const filteredNotes = findNotes(notes, 'spain')
// console.log(filteredNotes);


const sortedNotes = function (notes) {
    notes.sort(function (a, b) {
        if(a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
            return -1   //  this means a should come first
        } else if (b.title.toLocaleLowerCase() < a.title.toLocaleLowerCase()) {
            return 1    //  this means b should come first
        } else {
            return 0    //  this means both are identical, no need of any change 
        }
    })
}

sortedNotes(notes)
console.log(notes);

// console.log(notes.length);
// console.log(notes);

//  findIndex() return the index of the match
// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habbits to work on'
// })

// console.log(index);