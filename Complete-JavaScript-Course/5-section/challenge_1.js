function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);

  for (let i = 0; i < this.answers.length; i++) {
    console.log(i + ": " + this.answers[i]);
  }
};

const q1 = new Question(
  "Is JS the coolest programming language in the world?",
  ["Yes", "No"],
  0
);

const q2 = new Question(
  "What is the name of this course's teacher?",
  ["John", "Michael", "Jonas"],
  2
);

const q3 = new Question(
  "What does best describe coding?",
  ["Boring", "Hard", "Fun", "Tedious"],
  2
);

const questions = [q1, q2, q3];

const n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();
