
//#region QUESTIONS

const questionSet = [
    {
        id: 1,
        question: "First test question, First test question?",
        answers: {
            1: "first test answer 1",
            2: "first test answer 2",
            3: "first test answer 3", 
        },
        correct: "first test answer 3"
    },
    {
        id: 2,
        question: "Second test question, Second test question?",
        answers: {
            1: "second test answer 1",
            2: "second test answer 2",
            3: "second test answer 3", 
        },
        correct: "second test answer 1",
        givenAnswer: ""
    }
]
//#endregion


function Question(question, answers, correctAnswer){
    this.questionText = question;
    this.answerOptions = answers;
    this.correctAnswer = correctAnswer;
    this.sayText = function() {
        console.log("the correct answer is " + this.correctAnswer)
    }
}

const questions = [];

questionSet.forEach((question) => {
    let quizItem = new Question(question.question, question.answers, question.correct);
    questions.push(quizItem);
})
