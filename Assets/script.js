var testQuestions = [
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyper Text Markup Language",
            "Home Text Managment Link",
            "Hyper Link Text Manager"],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "What is the universal selector for CSS?",
        choices: [
            "#",
            ".",
            "*"],
        answer: "*"
    }
]

var testQuestionsIndex = 0
var correctCounter = 0
var incorrectCounter = 0
var storeName = 0
var storeScore = 0

var startQuizEl = document.querySelector("#startQuiz")
var quiz = document.querySelector(".quiz")
var startScreenEl = document.querySelector("#start-screen")
var questionEl = document.querySelector("#question")
var choicesEl = document.querySelector("#choices")
var resultEl = document.querySelector("#result")
var timerEl = document.querySelector("#timer")
var buttonEl = document.querySelector("#button")
var formEl = document.querySelector("#form")

var timer = 15;


function startTimer() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            timerEl.textContent = timer;
        } else {
            endGame();
        }
    }, 1000);

}



function startQuiz() {
    startScreenEl.classList.add("hide");
    updateQuestion();
    quiz.classList.remove("hide");
    timerEl.setAttribute("class", "show")
    startTimer();
}

function updateQuestion() {

    questionEl.textContent = testQuestions[testQuestionsIndex].question;
    choicesEl.innerHTML = ""
    for (var i = 0; i < testQuestions[testQuestionsIndex].choices.length; i++) {
        var listItem = document.createElement("li");
        var button = document.createElement("button");
        button.textContent = testQuestions[testQuestionsIndex].choices[i]

        button.addEventListener("click", handleAnswerSubmission)
        listItem.appendChild(button)
        choicesEl.appendChild(listItem);
    }
}

function endGame() {
    questionEl.setAttribute("class", "hide")
    choicesEl.setAttribute("class", "hide")
    resultEl.textContent = ("Time's up!")
    formEl.setAttribute("class", "show")
    getScore();
}

function handleAnswerSubmission(event) {
    var answer = event.target.textContent
    var correctAnswer = testQuestions[testQuestionsIndex].answer;

    if (answer === correctAnswer) {
        console.log("Correct")
    } else {
        console.log("Incorrect")
    }
    testQuestionsIndex = testQuestionsIndex + 1

    if (testQuestionsIndex < testQuestions.length) {
        updateQuestion();
    } else {
        console.log("End of Quiz")
    }
}

function winGame() {
    resultEl.textContent = "You won!"
    correctCounter++
    setScore()
}

function loseGame() {
    resultEl.textContent = "You lost!"
    incorrectCounter++
    setScore()
}

function setScore() {
    correct.textContent = correctCounter
    localStorage.setItem("correctCount", correctCounter)
    incorrect.textContent = incorrectCounter
    localStorage.setItem("incorrectCounter", incorrectCounter)
}

function storeData() {
    storeName.textContent = storeName
    localStorage.setItem("Stored Name", storeName)
    storeScore.textContent = storeScore
    localStorage.setItem("Stored Score", storeScore)
}

function getScore() {
    var storedCorrect = localStorage.getItem("CorrectCount")
    if (storedCorrect === null) {
        correctCounter = 0
    } else {
        correctCounter = storedCorrect
    }
    correct.textContent = correctCounter
}






function showResults() {
    showResults.style.display = "block"
    let scorePercent = math.round(100 * score / testQuestions.length);

    showResults.innerHTML = scorePercent

}


function retryQuiz() {

}




startQuizEl.addEventListener("click", startQuiz);