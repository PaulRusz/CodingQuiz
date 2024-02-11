/*  
function generateQuiz(questions, quizContainer, resultsContainer, submitButon) {
    function showQuestions(questions, quizContainer) {

    }
}
*/

function start() {
    timerID = setinterval(clockTick, 1500)
    timerEl.textContent = time;

    let startScreenEl = 
    document.getElementById("start")
    startScreenEl.setAttribute ("class", "hide")
    questionsEl.removeAttribute("class")
    getQuestion()
}