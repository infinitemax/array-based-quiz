// the overall quiz object which keeps track of the score, contains the questions, keeps track of the index, and records the answers.

function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    this.answerRecord = [];
}

// needs methods to get the current index, check if the quiz has ended and...

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

    this.answerRecord.push(guess);

    // this bit is my code - different to the one in the video, I will implement theirs, then try mine. I think it's basically the same, he's just using the function to access the question, whereas I'm writing it out in the if statement.
    // if (this.questions[this.questionIndex].checkAnswer(guess)) {
    //     this.score++
    // }

    if(this.getQuestion().checkAnswer(guess)){
        this.score;
    }
}