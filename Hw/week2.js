function sumOfSquareAreas (a,b) {
    return (a*a + b*b);
}

console.log(sumOfSquareAreas(3,9));
console.log(sumOfSquareAreas(3,4));
console.log(sumOfSquareAreas(3,5));

function gradeCalculator (homeworkAvg, quizAvg, examAvg) {
    return (0.1 * homeworkAvg + 0.15 * quizAvg + 0.75 * examAvg);
}

console.log (gradeCalculator(100,100,100));
console.log (gradeCalculator(100,100,10));
console.log (gradeCalculator(100,0,100));

