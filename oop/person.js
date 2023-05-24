// Prototypal Inheritance

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const person1 = new Person('Prabir', 'Prasad', 25, ['Biking', 'Coding'])
const person2 = new Person('Priya', 'Hazarika', 24)
person2.setName('Raja Sonowal')

console.log(person1.getBio());
console.log(person2.getBio());