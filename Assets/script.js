 var testQuestions = [    
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Text Managment Link",
            "Hyper Link Text Manager"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "What is the universal selector for CSS?",
        options: [
            "#",
            ".",
            "*"
        ],
        answer: "*"
    }
]

let quizContainer = document.querySelector("container")
let timerEl = document.querySelector("time")
let startButton = document.querySelector("start")
let questionsEl = document.querySelector("question")
let optionsEl = document.querySelector("options")
let answerEl = document.querySelector("answer")

let time = testQuestions.length * 10;
let timerID;

let currentQuestion = 0;
let score = 0;
let incorrectAnswer = 0;



/*function timerClock() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
    timerClock()
}
*/


/*
function start() {
    let startScreenEl = 
    document.getElementById("start-screen")
    startScreenEl.setAttribute ("class", "hide")
    questionsEl.removeAttribute("class")
    startQuestions()
}

function startQuestions() {
    let currentQuestion = question[currentQuestion];
    let quesEl = document.getElementById("ques")

    quesEl.textContent = currentQuestion.question;
    optionsEl = ""
    currentQuestion.options.forEach(
        function (choice, i) {
            let choiceButton = document.createElement("button");
            choiceButton.setAttribute("value", choice);
            choiceButton.textContent = i + 1 + ". " + choice;
            choiceButton.onclick = questionClick;
            optionsEl.appendChild(choiceButton)
        }
    )
}
*/





/*function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
*/














/*
function startQuiz() {
    var testData = testQuestions[currentQuestion];
    questionsEl = testData.testData;

    optionsEl = ""
    testData.options.forEach(option =>  
    {
        var button = document.createElement("button");
        button.innerText = option;
        optionsEl.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer() {
    var selectedButton = target;
    var answer = testQuestions[currentQuestion].answer;
    
    if (selectedButton === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < testQuestions.length) {
        startQuiz();
} }

startQuiz();
*/