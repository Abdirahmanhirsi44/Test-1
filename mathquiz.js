let quizData = [
    {
        question: "What is 5x5",
        a: "30",
        b: "10",
        c: "25",
        d: "35",
        correct: "c",
    },
    {
        question: " What is 100x100?",
        a: "10,000",
        b: "1,000",
        c: "1",
        d: "100,000",
        correct: "a",
    },
    {
        question: "What is 81/9",
        a: "23",
        b: "18",
        c: "24",
        d: "9",
        correct: "d",
    },
    {
        question:"what 120/12",
        a: "12",
        b: "20",
        c: "10",
        d: "16",
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