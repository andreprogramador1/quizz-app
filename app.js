const quizData = [
  {
    question: "Who is the most characteristical villan of batman series?",
    a: "Kratos",
    b: "Joker",
    c: "Homer",
    d: "enya",
    correct: "b",
  },
  {
    question: "Who is the President of brazil?",
    a: "Donald",
    b: "Bolsonaro",
    c: "Dilma",
    d: "david",
    correct: "b",
  },
  {
    question: "which one is a fruit?",
    a: "Eggplant",
    b: "lettuce",
    c: "Tomato",
    d: "pea",
    correct: "c",
},
{
    question: "What's the name of the archer from lord of the rings?",
    a: "Giml",
    b: "Frodo",
    c: "Wolf",
    d: "Legolas",
    correct: "d",
},
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer
  
  answerEls.forEach((answerEl) => {
    if(answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++
    if(currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

        <button onclick="location.reload()">Reload</button>
      `
    }
  }
})
