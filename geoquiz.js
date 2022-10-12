let quizData = [
    {
        question: "How many states are there in the United States?",
        a: "49",
        b: "100",
        c: "50",
        d: "32",
        correct: "c",
    },
    {
        question: " What is the tallest mountain in the world?",
        a: "Everest",
        b: "Fiji",
        c: "Mount Kilimanjaro",
        d: "Denali",
        correct: "a",
    },
    {
        question: "What is the captial of Canada",
        a: "Toronto",
        b: "Ottawa",
        c: "Hamilton",
        d: "london",
        correct: "b",
    },
    {
        question:"How many countries in the world",
        a: "200",
        b: "45",
        c: "195",
        d: "145",
        correct: "c",
    },


];

let quiz= document.getElementById('quiz')
let answerEls = document.querySelectorAll('.answer')
let questionEl = document.getElementById('question')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    let currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    let answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You have received a total make of ${score}/${quizData.length} </h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})