let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 356
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pagecountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let myBookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(myBookSummary.summary);
console.log(otherBookSummary.pagecountSummary);

let convertFarenheit = function (farenheit) {
    return {
        tempInFarenheit: farenheit,
        tempInCelsius: (farenheit - 32) * 5/9,
        tempInKelvin: (farenheit +459.67) * 5/9
    }
}

let tempSummary = convertFarenheit(74)

console.log(tempSummary);