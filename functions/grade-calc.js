const getGrade = function (obtainedMarks, totalMarks) {
    if (typeof obtainedMarks !== 'number' || typeof totalMarks !== 'number') {
        throw Error('Please provide only numbers')
    }

    let msg = ''
    
    if (obtainedMarks > totalMarks) {
        msg = `Obtained marks ${obtainedMarks} cannot be greater than Total marks ${totalMarks}`
    } else {
        const percentage = (obtainedMarks / totalMarks) * 100
        let letterGrade = ''

        if (percentage >= 90 && percentage <= 100) {
            letterGrade = 'A'
        } else if (percentage >= 80) {
            letterGrade = 'B'
        } else if (percentage >= 70) {
            letterGrade = 'C'
        } else if (percentage >= 60) {
            letterGrade = 'D'
        } else {
            letterGrade = 'F'
        }
        msg = `You got a ${letterGrade} (${percentage}%)`
    }

    return msg

}

try {
    const displayGrade = getGrade(9, 20)
    console.log(displayGrade);
} catch (e) {
    console.log(e.message);
}