const quizData = [
    {
        question:"1 + 4?",
        a: "6",
        b: "9",
        c: "3",
        d: "5",
        correct: "d",
    },
    {
        question:"764 x 835?",
        a: "637,940",
        b: "653,287",
        c: "375,964",
        d: "908,267",
        correct: "a",
    },
    {
        question:"583 - 498?",
        a: "63",
        b: "85",
        c: "29",
        d: "44",
        correct: "b",
    },
    {
        question:"4978 / 63?",
        a: "81",
        b: "80",
        c: "79.01",
        d: "78",
        correct: "c",
    },


];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0
let score = 0 

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getselected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener("click", () => {
    const answer = getselected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>Your score ${score}/${currentQuiz}on a simple test</h2>`
        }
    }
})