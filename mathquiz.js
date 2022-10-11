let quizData = [
    {
        question: "What is the part of the plant that uses light to make food?",
        a: "leaves",
        b: "flowers",
        c: "stem",
        d: "roots",
        correct: "b",
    },
    {
        question: " Which of these animals does not have a backbone?",
        a: "amphibian",
        b: "fish",
        c: "bird",
        d: "arachnid",
        correct: "d",
    },
    {
        question: "To _______ is to group or put together things that are the same.",
        a: "observe",
        b: "describe",
        c: "look",
        d: "classify",
        correct: "d",
    },
    {
        question:"What keeps a seed safe and helps its grow?",
        a: "fruit",
        b: "roots",
        c: "leaves",
        d: "stem",
        correct: "a",
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