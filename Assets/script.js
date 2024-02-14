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




function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    updateQuestion();
    quiz.setAttribute("class", "show");
}

function updateQuestion() {
    questionEl.textContent=testQuestions[testQuestionsIndex].testQuestions
    for (var i = 0; i<testQuestions[testQuestionsIndex].choices.length; i++){
        var element = document.createElement("li");
        element.textContent = testQuestions[testQuestionsIndex].choices[i]

        choicesEl.appendChild(element);
    }
}

startQuizEl.addEventListener("click", startQuiz);