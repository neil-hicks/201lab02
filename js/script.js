let userName = "";

function getName() {
    let tempName = prompt("Hi there! Please tell me your name!");
    if (tempName != "") {
        userName = tempName;
        document.getElementById("welcome").innerHTML =
            "Welcome, " + tempName + "!";
    } else {
        document.getElementById("welcome").innerHTML =
            "Welcome, friendly stranger!";
    }
}
window.onload = getName();

let score = 0;

function gameStart() {
    

    alert("Welcome to my game of seven questions! Please answer with either a 'Yes' or a 'No' for each question.")

// Question 1

let questions = [
    'Am I old enought to vote?',
    'Have I completed a college degree?',
    'Was I studying Underwater Basket Weaving in college?',
    'Was my favorite job that I\'ve worked at a place to play video games?',
    'Am I currently learning new things with Code Fellows?',
];

let answers = [
    ['yes', 'y'],
    ['no', 'n'],
    ['no', 'n'],
    ['yes', 'y'],
    ['yes', 'y'] 
];

for (i = 0; i < questions.length; i++) {
    let response = prompt(questions[i]);
    let correct = false;
    if (typeof(answers[i]) !== 'string') {
        for (let answer of answers[i]) {
            if  (response.toLowerCase() === answer) {
                //console.log("Correct!");
                alert("You are correct!");
                // document.getElementById("").innerHTML =
                // "You answered '" + question[i] + "', correct!";
                let domId = 'q' + (i + 1);
                document.getElementById(domId).innerHTML = "Question " + (i + 1) + ": You answered '" + response + "', which is correct.";
                score += 1;
                correct = true;
                break;
            }
        }
    }
    if (correct === false) {
        let domId = 'q' + (i + 1);
        document.getElementById(domId).innerHTML = "Question " + (i + 1) +": You answered '" + response + "', which isn't correct.";
        alert("Sorry, that is not correct");
    }       
}

    alert("Okay, we're no longer answering with 'Yes' or 'No' here.")

// Question 6
    
// Question 6
let attempts = 4;
let numGuess = 24;
let ques6 = parseInt(prompt("What number am I thinking of?"));
while (ques6 !== numGuess && attempts > 1) {
  if (ques6 < numGuess) {
    attempts -= 1;
    alert(
      "You're too low. Think higher! You have " + attempts + " attempts left."
    );
  } else {
    attempts -= 1;
    alert(
      "You're too high. Think lower! You have " + attempts + " attempts left."
    );
  }
  ques6 = parseInt(prompt("What number am I thinking of?"));
}
if (ques6 === numGuess) {
  score += 1;
  alert("Correct! That's the number I was thinking of!");
  document.getElementById("q6").innerHTML =
    "Question 6: You answered '" + ques6 + "', correct!";
} else {
  alert(
    "Sorry, you're out of guesses. The number I was thinking of was " +
      numGuess +
      "."
  );
  document.getElementById("q6").innerHTML =
    "Question 6: You answered '" + ques6 + "', which is not correct :(";
}
    
band();
}
// Question 7
// Question 7
let musicAttempts = 6;
let favBands = [
  "Rush",
  "Electric Light Orchestra",
  "Pendulum",
  "Genesis",
  "TWRP",
  "Casiopea",
  "Styx",
  "Breaking Benjamin",
  "Starcadian",
  "Gemini Syndrome",
];

function band() {
let isFav = false;

while (musicAttempts > 0 && isFav === false) {
  let ques7 = prompt("Who is one of my favorite artists?");
  //let ques7 = "Rueeeesh";
  ques7 = ques7.toLowerCase();
  musicAttempts -= 1;
  for (let i = 0; i < favBands.length; i++) {
    if (ques7 === favBands[i].toLowerCase()) {
      alert("That's correct!");
      score += 1;
      isFav = true;
      break;
    }
  }

  if (isFav === false && musicAttempts < 6) {
    alert(
      "That's not right. Remember the top 10 list... You have " +
        musicAttempts +
        " attempts left."
    );
  } 

  if (musicAttempts === 0) {
    alert("Uh oh! You have run out of attempts.");
  }
 
}

alert("Thanks for playing! You got " + score + "/7!");
document.getElementById('score').innerHTML = "Alright, you got " + score + "/7! Thanks for playing " + userName + "!";
  
}
    