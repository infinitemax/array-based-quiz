//#region QUESTIONS
const questionSet = [
    {
        id: 1,
        question: "First test question, First test question?",
        answers: {
            0: "first test answer 1",
            1: "first test answer 2",
            2: "first test answer 3",
            3: "first test answer 4",
        },
        correct: "first test answer 3",
    },
    {
        id: 2,
        question: "Second test question, Second test question?",
        answers: {
            0: "second test answer 1",
            1: "second test answer 2",
            2: "second test answer 3",
            3: "second test answer 4",
        },
        correct: "second test answer 1",
    },
    {
        id: 3,
        question: "Third test question, Third test question?",
        answers: {
            0: "third test answer 1",
            1: "third test answer 2",
            2: "third test answer 3",
            3: "third test answer 4",
        },
        correct: "third test answer 2",
    },
];
//#endregion

// CREATE AN ARRAY OF QUESTION OBJECTS
// initialise the array
const todaysQuestions = [];

// for each item in questionSet, create question object and push to the new array
questionSet.forEach((question) => {
    let quizItem = new Question(
        question.question,
        question.answers,
        question.correct
    );
    todaysQuestions.push(quizItem);
});

// create new quiz object
const quiz = new Quiz(todaysQuestions);

// populate the quiz
const populate = () => {
    // TO DO: check if quiz has ended

    // populate quesiton
    let question = document.getElementById("question");
    question.innerHTML = quiz.questions[quiz.questionIndex].questionText;

    // populate answer buttons
    const buttons = document.querySelectorAll(".choiceBtn");
    buttons.forEach((button, index) => {
        const answer = quiz.getQuestion().answerOptions[index];
        button.innerHTML = answer;
        console.log(`index is ${index}, answer is ${answer}`);
    });
};
