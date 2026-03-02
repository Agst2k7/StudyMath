const img = document.getElementById("quiz-img");
const start_btn = document.getElementById("start-btn");
const input_box = document.getElementById("input-box");
const submit_btn = document.getElementById("submit-btn");
const score_label = document.getElementById("score-label");
const quiz_warn_msg = document.getElementById("quiz-warn-msg");
const end_msg = document.getElementById("end-msg");
const atmp_mgp = document.getElementById("atmp-msg");
const form = document.getElementById("quiz-form");
const instructions_div = document.getElementById("instructions-div");
const instruction = document.getElementById("instruction")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const questions = [
    {
        img: "../imgs/math/q1.png",
        correct_answer: "2+sqrt(3)"
    },
    {
        img: "../imgs/math/q2.png",
        correct_answer: "0"
    },
    {
        img: "../imgs/math/q3.png",
        correct_answer: "0"
    },
    {
        img: "../imgs/math/q4.png",
        correct_answer: "0"
    },
    {
        img: "../imgs/math/q5.png",
        correct_answer: "0"
    },
    {
        img: "../imgs/math/q6.png",
        correct_answer: "0"
    },
    
];

// sorteio das imgs


function choose_question() {

    const index = Math.floor(Math.random() * possible_questions.length);
    const question = possible_questions[index];

    possible_questions.splice(index, 1);

    console.log(possible_questions);
    return question;
}

function show_UI() {
    start_btn.classList.add("hidden");
    img.src = questions[question_index].img;
    img.classList.remove("hidden");
    input_box.classList.remove("hidden");
    submit_btn.classList.remove("hidden");
};

function game_start() {
    score = 0;
    possible_questions = Array.from(
        { length: questions.length },
        (_, i) => i
    );
}

function quizEnd() {
    img.classList.add("hidden");
    input_box.classList.add("hidden");
    submit_btn.classList.add("hidden");
    end_msg.classList.remove("hidden");
    quiz_warn_msg.classList.add("hidden");
    instructions_div.classList.add("hidden");
    instruction.classList.add("hidden")

    atmp_mgp.textContent = "Precisou de " + attempts + " tentativas em " + qs_number + " questões."
    atmp_mgp.classList.remove("hidden");
    return;
}

async function nextQuestion() {
    await sleep(500);
    if (possible_questions.length > 0) {
        question_index = choose_question();
        show_UI();
    } else {
        quizEnd();
    }
}

async function correctMsg() {
    quiz_warn_msg.classList.remove("hidden");
    quiz_warn_msg.style.color = "greenyellow";
    quiz_warn_msg.textContent = "Parabéns, você acertou!";
    await sleep(1500);
    quiz_warn_msg.classList.add("hidden");
}

async function incorrectMsg() {
    quiz_warn_msg.classList.remove("hidden");
    quiz_warn_msg.style.color = "red";
    quiz_warn_msg.textContent = "Resposta incorreta, tente novamente!";
    await sleep(1500);
    quiz_warn_msg.classList.add("hidden");
}

let score = 0;
let attempts = 0
const qs_number = questions.length;


start_btn.addEventListener("click", () => {
    game_start();
    question_index = choose_question();
    show_UI();
});

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    attempts++;

    if (input_box.value == questions[question_index].correct_answer) {
        input_box.value = "";
        console.log("Correct!");
        correctMsg();
        score++;
        score_label.textContent = "Score: " + score;
        nextQuestion();
    } else {
        input_box.value = "";
        console.log("Wrong answer, try again!");
        incorrectMsg();
    }
});
