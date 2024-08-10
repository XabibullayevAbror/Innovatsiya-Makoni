document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Aloqa uchun rahmat! Tez orada sizga javob beraman.');
});
const quizContainer = document.getElementById('quiz');
const startButton = document.getElementById('startQuiz');

const questions = [
    {
        question: "O'zbekistonning poytaxti qaysi?",
        answers: {
            a: "Samarqand",
            b: "Toshkent",
            c: "Buxoro"
        },
        correctAnswer: "b"
    },
    {
        question: "JavaScript qaysi tillar guruhiga kiradi?",
        answers: {
            a: "Skript tili",
            b: "Mashina tili",
            c: "Bajaruvchi tili"
        },
        correctAnswer: "a"
    }
];

startButton.addEventListener('click', function() {
    let output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        let answers = [];
        for (let letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
});

quizContainer.addEventListener('change', function(e) {
    const selectedAnswer = e.target.value;
    const questionNumber = parseInt(e.target.name.replace('question', ''));
    const correctAnswer = questions[questionNumber].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        alert('To\'g\'ri javob!');
    } else {
        alert('Noto\'g\'ri javob!');
    }
});

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
}

setInterval(draw, 10);