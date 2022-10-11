// let quizquestions= [
//     {
// question: "Math invented by who?",
// a:"albert einstein",
// b:"Random guy 2",
// c:"random guy 3",
// d:"Random guy 4"
//     }
//     ,
// {
//     question: "What is 10x10?",
//     a:"1090000",
//     b:"45",
//     c:"100",
//     d:"3213"

// }



// ,
// {
//     question: "what is 3x3?",
//     a:"9",
//     b:"7",
//     c:"4",
//     d:"3"

// }




// ,
// {
//     question: "what is 6/2?",
//     a:"23",
//     b:"3 ",
//     c:"1",
//     d:"100"

// }
// ,


// ];

// let quiz = document.getElementById("quiz")
// let answerEls = document.querySelectorAll(".answer")
// let question1 = document.getElementById("question")
// let a_block = document.getElementById("a_block")
// let b_block = document.getElementById("b_block")
// let c_block = document.getElementById("c_block")
// let d_block = document.getElementById("d_block")
// let submitbtn = document.getElementById("submit")

// let currentquiz = 0
// let score = 0

// loadquiz()

// function loadquiz (){

//     deselectanswers()

//     let currentquizdata = quizquestions[currentquiz]

//     question1.innertext = currentquiz.question
//     a_block.innertext = currentquizdata.a
//     b_block.innertext = currentquizdata.b
//     c_block.innertext = currentquizdata.c
//     d_block.innertext = currentquizdata.d

// }

// function deselectanswers(){
//    answerEls.forEach(answerEls => answerEls.checked = false)

//     }

//     function getselected() {
//         let answer
//         answerEls.forEach(answerEl=>{
//             if(answerEl.checked){
//                 answer = answerEl.id
//             }
//         })
//         return answer
//     }

//     submitbtn.addEventListener("click", () => {
//         let answer = getselected()
//         if(answer) {
//             if(answer === quizquestions[currentquiz].correct){
//                 score++
            
//             }}})
    