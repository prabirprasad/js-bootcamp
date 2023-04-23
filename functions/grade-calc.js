let getGrade = function (obtainedMarks, totalMarks) {
    let percentage = 0
    let letterGrade = ''
    let msg = ''
    if(obtainedMarks > totalMarks) {
        msg = `Obtained marks ${obtainedMarks} cannot be greater than Total marks ${totalMarks}`
    } else {
        percentage = (obtainedMarks /totalMarks) * 100
        if(percentage >= 90 && percentage <= 100) {
            letterGrade = 'A'
        } else if(percentage >= 80) {
            letterGrade = 'B'
        } else if(percentage >= 70) {
            letterGrade = 'C'
        } else if(percentage >= 60) {
            letterGrade = 'D'
        } else {
            letterGrade = 'F'
        } 
        msg = `You got a ${letterGrade} (${percentage}%)`
    }

    return msg

}

let displayGrade = getGrade(12, 20)
console.log(displayGrade);