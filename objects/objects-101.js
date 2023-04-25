let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 356
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`);

let person = {
    name: 'Prabir',
    age: 27,
    location: 'India'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);