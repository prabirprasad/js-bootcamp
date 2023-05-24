const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetter = ['c', 'e']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    
    this.word.forEach((letter) => {
        if(this.guessedLetter.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

const game1 = new Hangman('Cat', 3)
const game2 = new Hangman('New Jersey', 2)

console.log(game1.getPuzzle());
console.log(game2.getPuzzle());