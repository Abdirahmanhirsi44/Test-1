const quizData = [
    {
        question:"How many faces does a Dodecahedron have?",
        a: "10",
        b: "18",
        c: "16",
        d: "12",
        correct: "d",
    },
    {
        question:"What company was originally called Cadabra?",
        a: "Amazon",
        b: "Ebay",
        c: "Microsoft",
        d: "Bing",
        correct: "a",
    },
    {
        question:"What car manufacturer had the highest revenue in 2020?",
        a: "BMW",
        b: "Volkswagen",
        c: "Volvo",
        d: "Honda",
        correct: "b",
    },
    {
        question:"How many minutes are in a full week?",
        a: "40,000",
        b: "124,650",
        c: "10,080",
        d: "99,999",
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
            quiz.innerHTML = `<h2>You got ${score}/${currentQuiz} on our test</h2>

            <a href="testfind.html"><button>test finder</button></a>
            
            `
        }
    }
})