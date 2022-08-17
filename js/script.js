let name = "";

function getName() {
    let tempName = prompt("Hi there! Please tell me your name!");
    if (tempName != "") {
        name = tempName;
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

    alert("Welcome to my game of five questions! Please answer with either a 'Yes' or a 'No' for each question.")

    let ques1 = prompt("Am I old enough to vote?")
    switch (ques1.toLowerCase()){
        case "yes":
            //console.log("Correct!");
            alert("You are correct!");
            document.getElementById("q1").innerHTML =
            "Question 1: You answered '" + ques1 + "', correct!";
            score += 1;
            break;
        case "no":
            //console.log("Sorry, that is not correct.");
            alert("Sorry, that is not correct");
            document.getElementById("q1").innerHTML =
            "Question 1: You answered '" + ques1 + "', which is not correct :(";
            break;
        default:
            //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
            alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
            document.getElementById("q1").innerHTML =
            "Question 1: You answered '" + ques1 + "', which isn't even a real answer??";
    }

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

    alert("Thanks for playing! You got " + score + "/5!");
    document.getElementById("score").innerHTML =
    "Alright, you got " + score + "/5! Thanks for playing " + name + "!";
}