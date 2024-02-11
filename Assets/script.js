/*  
function generateQuiz(questions, quizContainer, resultsContainer, submitButon) {
    function showQuestions(questions, quizContainer) {

    }
}
*/

let timerEl = document.querySelector("#timer")
let startButton = document.querySelector("#start")

let time = questions.length * 10;
let timerID;


function start() {
    timerID = setinterval(clockTick, 1500)
    timerEl.textContent = time;

    let startScreenEl = 
    document.getElementById("start")
    startScreenEl.setAttribute ("class", "hide")
    questionsEl.removeAttribute("class")
    getQuestion()
}
startButton.onclick = start;



function timerClock() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        queizEnd();
    }
}