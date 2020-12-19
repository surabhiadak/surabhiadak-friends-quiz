var readlineSync = require("readline-sync");

var userName = readlineSync.question ("what is your name? ")
var score= 0;

//Chalk package
const chalk = require("chalk");
const log = console.log;

log(chalk.yellow("Hi "+ userName + " Welcome to FRIENDS QUIZ"))

//highscores
var highScores =
[
  {
    name: "Surabhi",
    score: "4"
  },
  {
    name: "Ashu",
    score: "4"
  }
]
//Function
function play(question,answer)
{
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer)
  {
    log(chalk.green("YAY! You are right"))
    score = score + 1;
  }
  else
  {
    log(chalk.red("OOPS! You are wrong"))
    score = score - 1;
  }
  log(chalk.white("Your score is: " +score))
  log(chalk.white("-----------------------------------------------"))
}

//Array of objects
var questions = 
[
  {
    question: 
    "How many sisters does Joey have? \n a: 6 \n b: 7 \n ",
    answer: "b"
  },
  {
    question: "How many times has Ross been married? \n a: 3 \n b: 4 \n",
    answer: "a"
  },
  {
    question: "what is Joey's fake name? \n a: Mike Hannigan \n b: Ken Adams \n ",
    answer: "b"
  },
  {
    question: "What’s the name of Phoebe’s most popular song? \n a: Smelly cat \n b: Scaredy cat \n",
    answer: "a"
  }
]

//for loop
for (var i=0;i<questions.length;i++)
{
  currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

//Print the final score
log(chalk.yellow("YAYYY! Your final score is: " +score))

log(chalk.white("-----------------------------------------------"))

//Print the highest scores 
log(chalk.blue("Here are the highest scores: "))
for (var i=0;i<highScores.length;i++)
{
  var currentScore = highScores[i]
  console.log (currentScore.name)
  console.log (currentScore.score)
}



