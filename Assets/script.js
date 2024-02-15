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





form.onLoad = function () {
    if (localStorage) {

        document.getElementById('form').addEventListener('submit', function () {
            var name = document.getElementById("name").value;
            var score = document.getElementById("score").value;

            localStorage.setItem("name", name)
            localStorage.setItem("score", score)
        })
    }
}

function showResults() {
    showResults.style.display = "block"
    let scorePercent = math.round(100 * score / testQuestions.length);

    showResults.innerHTML = scorePercent

}


function retryQuiz() {

}




startQuizEl.addEventListener("click", startQuiz);