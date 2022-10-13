
var readLine = require("readline-sync");
var chalk = require("chalk");

console.log(chalk.blue.bold.underline("How Well Do You Know Me?"), "\n\n");

var name = readLine.question(chalk.whiteBright("What is Your name?"));

console.log(chalk.cyan("\nWelcome to the game, ", name.toUpperCase()), "\n");


var questions = [
  {
    question: "Which state in India do I live?",
    answer: "Kerala"
  },
  {
    question: "Who is my favorite superhero?",
    answer: "Krrish"
  },
  {
    question: "Who is my favorite movie actor?",
    answer: "Hrithik Roshan"
  },
  {
    question: "Which is my favorite movie?",
    answer: "Yesman"
  },
  {
    question: "Which month was I born?",
    answer: "october"
  },
  {
    question: "What is my favorite food?",
    answer: "pazhampori"
  },
  {
    question: "How old am I:\n\ta)23\n\tb)22\n\tc)24\n\td)25?\n",
    answer: "c"
  }
]

var highScores = [
  {
    player: "Steeve",
    points: "3"
  },
  {
    player: "Kiran",
    points: "2"
  }
]
var score = 0;
function quiz(question, answer) {
  var attempt = readLine.question(chalk.whiteBright(question));
  if (attempt.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log(chalk.green("You got it right."));
    console.log(chalk.yellow("Current Score ="), score);
    console.log("\n");
  }
  else {
    console.log(chalk.red("You are wrong. The answer is,"), answer);
    console.log("\n");
  }
}

for (var i = 0; i < questions.length; i++) {
  quiz(questions[i].question, questions[i].answer);
}

console.log("Your Final Score = ", score);
console.log(chalk.bgBlue("\nx-----------Leader Board-----------x\n"));
console.log(chalk.bgCyan("\nName\t\tPoints"));
for (var j = 0; j < highScores.length; j++) {
  console.log(chalk.magentaBright(highScores[j].player), "\t\t", chalk.yellowBright(highScores[j].points));
}


console.log(chalk.bgYellow("\n\nIf you have scored above than the players in the high score, please do take a screenshot and mail me at ajaykumarmkaju@gmail.com. I will update the leaderboard.\n\n"))
