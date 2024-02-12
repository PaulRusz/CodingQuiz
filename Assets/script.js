/*  
function generateQuiz(questions, quizContainer, resultsContainer, submitButon) {
    function showQuestions(questions, quizContainer) {

    }
}
*/


var testQuestions = [    
    {
        prompt: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Text Managment Link",
            "Hyper Link Text Manager"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        prompt: "What is the universal selector for CSS?",
        options: [
            "#",
            ".",
            "*"
        ],
        answer: "*"
    }
]

let timerEl = document.querySelector("timer")
let startButton = document.querySelector("start")
let questionsEl = document.querySelector("testQuestions")

let time = testQuestions.length * 10;
let timerID;



function timerClock() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
    timerClock()
}




function start() {
    timerID = setinterval(clockTick, 1500)
    timerEl.textContent = time;

    let startScreenEl = 
    document.getElementById("start")
    startScreenEl.setAttribute ("class", "hide")
    questionsEl.removeAttribute("class")
    start()
}
startButton.onclick = start;




