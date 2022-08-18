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



function gameStart() {
    let score = 0;

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
                document.getElementById(q[i + 1]).innerHTML =
                "Question " + [i + 1] +": You answered '" + response + "', which isn't even a real answer??";score += 1;
                correct = true;
                break;
            }
        }
    }
    if (correct === false) {
        alert("Sorry, that is not correct");
    }       
}

/*    switch (ques1.toLowerCase()){
        case "yes":
            
        case "no":
            //console.log("Sorry, that is not correct.");
            alert("Sorry, that is not correct");
            document.getElementById(q[i]).innerHTML =
            "Question 1: You answered '" + ques1 + "', which is not correct :(";
            break;
        default:
            //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
            alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
            document.getElementById("q1").innerHTML =
            "Question 1: You answered '" + ques1 + "', which isn't even a real answer??";
    }

// Question 2
    let ques2 = prompt("Have I completed a college degree?")
    switch (ques2.toLowerCase()){
        case "no":
            //console.log("Correct!");
            alert("You are correct!");
            document.getElementById("q2").innerHTML =
            "Question 2: You answered '" + ques2 + "', correct!";
            score += 1;
            break;
        case "yes":
            //console.log("Sorry, that is not correct.");
            alert("Sorry, that is not correct");
            document.getElementById("q2").innerHTML =
            "Question 2: You answered '" + ques2 + "', which is not correct :(";
            break;
        default:
            //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
            alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
            document.getElementById("q2").innerHTML =
            "Question 2: You answered '" + ques2 + "', which isn't even a real answer??";
    }

// Question 3
    let ques3 = prompt("Was I studying Underwater Basket Weaving in college?")
    switch (ques3.toLowerCase()){
        case "no":
            //console.log("Correct!");
            alert("You are correct!");
            document.getElementById("q3").innerHTML =
            "Question 3: You answered '" + ques3 + "', correct!";
            score += 1;
            break;
        case "yes":
            //console.log("Sorry, that is not correct.");
            alert("Sorry, that is not correct");
            document.getElementById("q3").innerHTML =
            "Question 3: You answered '" + ques3 + "', which is not correct :(";
            break;
        default:
            //console.log("Nice try, be sure to answer with 'Yes' or 'No' next time.")
            alert("Nice try, be sure to answer with 'Yes' or 'No' next time.");
            document.getElementById("q3").innerHTML =
            "Question 3: You answered '" + ques3 + "', which isn't even a real answer??";
    }

// Question 4
    let ques4 = prompt("Was my favorite job that I've worked at a place to play video games?")
    switch (ques4.toLowerCase()){
        case "yes":
            //console.log("Correct!");
            alert("You are correct!");
            document.getElementById("q4").innerHTML =
            "Question 4: You answered '" + ques4 + "', correct!";
            score += 1;
            break;
        case "no":
            //console.log("Sorry, that is not correct.");
            alert("Sorry, that is not correct");
            document.getElementById("q4").innerHTML =
            "Question 4: You answered '" + ques4 + "', which is not correct :(";
            break;
        default:
            //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
            alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
            document.getElementById("q4").innerHTML =
            "Question 4: You answered '" + ques4 + "', which isn't even a real answer??";
    }

// Question 5
    let ques5 = prompt("Am I currently learning new things with Code Fellows?")
    switch (ques5.toLowerCase()){
        case "yes":
            //console.log("Correct!");
            alert("You are correct!");
            document.getElementById("q5").innerHTML =
            "Question 5: You answered '" + ques5 + "', correct!";
            score += 1;
            break;
        case "no":
            //console.log("Sorry, that is not correct.");
            alert("Sorry, that is not correct");
            document.getElementById("q5").innerHTML =
            "Question 5: You answered '" + ques5 + "', which is not correct :(";
            break;
        default:
            //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
            alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
            document.getElementById("q5").innerHTML =
            "Question 5: You answered '" + ques5 + "', which isn't even a real answer??";
    }
*/
    alert("Okay, we're no longer answering with 'Yes' or 'No' here.")

// Question 6
    
    let numGuess = 24;
    for (let attempts = 4; attempts > 0; attempts--) {
        let ques6 = parseInt(prompt("What number am I thinking of?"));
    
        if (ques6 === numGuess) {
            score += 1;
            alert("Correct! That's the number I was thinking of!");
            document.getElementById("q6").innerHTML =
            "Question 6: You answered '" + ques6 + "', correct!";
        } else if (ques6 < numGuess) {
            alert("You're too low. Think higher! You have " + attempts + " attempts left.");
        } else {
            alert("You're too high. Think lower! You have " + attempts + " attempts left.");
        }
        
        // ques6 = parseInt(prompt("What number am I thinking of?"));
    }
    // if (ques6 === numGuess) {
        
    // } else {
    //     alert("Sorry, you're out of guesses. The number I was thinking of was " + numGuess + ".");
    //     document.getElementById("q6").innerHTML =
    //     "Question 6: You answered '" + ques6 + "', which is not correct :(";
    // }
}
// Question 7
    let musicAttempts = 6;
    let favBands = ['Rush', 'Electric Light Orchestra', 'Pendulum', 'Genesis', 'TWRP', 'Casiopea', 'Styx', 'Breaking Benjamin', 'Starcadian', 'Gemini Syndrome'];
    let ques7 = prompt("Who is one of my favorite artists?").toLowerCase();
    console.log(ques7);
    console.log(typeof(ques7));
    let isFav = false;

    while (musicAttempts > 0) {
        for (let i = 0; i < favBands.length; i++) {
            if(ques7 === favBands[i].toLowerCase()) {
                isFav = true;
            }
        }
    }

    if (isFav === false) {
        alert("That's not right. Remember the top 10 list... You have " + musicAttempts + " attempts left.");
    } else if (isFav === true) {
        score += 1;
        alert("That's correct! I sure do love " + ques7);
        document.getElementById("q7").innerHTML =
        "Question 7: You answered '" + ques7 + "', correct!";
    }
    musicAttempts -= 1;
    if (musicAttempts === 0) {
        alert("Uh oh! You have run out of attempts.")
    }
    ques7 = prompt("Who is one of my favorite artists?");


    alert("Thanks for playing! You got " + score + "/7!");
    document.getElementById("score").innerHTML =
    "Alright, you got " + score + "/7! Thanks for playing " + userName + "!";
