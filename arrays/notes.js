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
    {},
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

console.log(notes.length);
console.log(notes);

const index = notes.findIndex(function (note, index) {
    console.log(note);
    return note.title === 'Habbits to work on'
})

console.log(index);