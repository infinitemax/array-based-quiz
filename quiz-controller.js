// the overall quiz object which keeps track of the score, contains the questions, keeps track of the index, and records the answers.

function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    this.answerRecord = [];
}

// needs methods to get the current index, check if the quiz has ended and to manage an attempt

// returns the current question, accessing the question index using the current questionIndex
// see what happens when we remove this.
Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}


// function to see if quiz has ended
Quiz.prototype.hasQuizEnded = function() {
    return this.questions.length === this.questionIndex;
}

// function to call when an attempt is made
Quiz.prototype.attempt = function(guess) {
    this.questionIndex++;

    this.answerRecord[this.questionIndex] = guess;

    if(this.getQuestion().checkAnswer(guess)){
        this.score++;
        console.log("correct")
    } else {
        console.log("incorrect");
    }
}