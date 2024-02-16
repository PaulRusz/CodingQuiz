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
    },
    {
        question: "What book is the character Ronald Weasley from?",
        choices: ["Game of Thrones", "Harry Potter", "Chronicles of Narnia"],
        answer: "Harry Potter"
    }
]

var testQuestionsIndex = 0
var correctCounter = 0
var incorrectCounter = 0
var storeName = 0
var storeScore = 0
var initials = ""

var startQuizEl = document.querySelector("#startQuiz")
var quiz = document.querySelector(".quiz")
var startScreenEl = document.querySelector("#start-screen")
var questionEl = document.querySelector("#question")
var choicesEl = document.querySelector("#choices")
var resultEl = document.querySelector("#result")
var timerEl = document.querySelector("#timer")
var buttonEl = document.querySelector("#button")
var formEl = document.querySelector("#form")
var nameEl = document.querySelector("#name")
var scoreEl = document.querySelector("#score")
var scoreEl2 = document.querySelector(".score")


var timer = 10;


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
    /*
     if (testQuestionsIndex === questionEl.length) {
         setTimeout(endGame, 1000)
         return;
         */
}
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
    scoreEl.textContent = correctCounter;
    scoreEl2.textContent = ("Score: ")
}

function handleAnswerSubmission(event) {
    var answer = event.target.textContent
    var correctAnswer = testQuestions[testQuestionsIndex].answer;

    if (answer === correctAnswer) {
        correctCounter++
    } else {
        incorrectCounter++
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
    setScore()
}

function loseGame() {
    resultEl.textContent = "You lost!"
    setScore()
}

function setScore(e) {
    e.preventDefault()
    scoreEl.textContent = correctCounter
    console.log(initials)
    initials = nameEl.value
    console.log(nameEl)
    localStorage.setItem("correctCount", correctCounter)
    localStorage.setItem("initials", initials)
}

formEl.addEventListener("submit", setScore)

function storeData() {
    storeName.textContent = storeName
    localStorage.setItem("Stored Name", storeName)
    storeScore.textContent = storeScore
    localStorage.setItem("Stored Score", storeScore)
}






function showScore() {
    scoreEl.textContent = ("Score: ")

}


function retryQuiz() {

}




startQuizEl.addEventListener("click", startQuiz);