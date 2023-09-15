// contains the constructor for the questions

function Question(question, answers, correctAnswer){
    this.questionText = question;
    this.answerOptions = answers;
    this.correctAnswer = correctAnswer;
    this.guess = "";
}


// methods are added outside, apparently this is good practice...

// check answer by passing in guess, and comparing that to the correct answer.
// also save guess in the object so we can later see where they went wrong.
Question.prototype.checkAnswer = function(guess) {
    this.guess = guess;
    return correctAnswer === guess;
}