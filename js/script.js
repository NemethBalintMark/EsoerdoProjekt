
var questions = [];
var answers = [];
var actualQuestion = 0;

var nextButton = document.querySelector(".quiz-next");
var previousButton = document.querySelector(".quiz-previous");

function init() {
    for (let i = 0; i < QUESTIONS.length; i++) {
        answers.push("");

        let question = new Question(
            QUESTIONS[i].question,
            QUESTIONS[i].good_answer
        );

        for (let j = 0; j < QUESTIONS[i].bad_answers.length; j++) {
            question.addBadAnswer(QUESTIONS[i].bad_answers[j]);
        }

        questions.push(question);
    }

    previousButton.disabled = true;

    showQuestion();
}

function isAnswered() {
    return document.querySelector(
        'input[name="radioDefault"]:checked'
    );
}

function nextQuestion() {
    let selected = isAnswered();

    if (!selected) {
        alert("Kérlek, válassz egy választ!");
        return;
    }

    answers[actualQuestion] = selected.value;

    if (actualQuestion < questions.length - 1) {
        actualQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

function previousQuestion() {
    if (actualQuestion > 0) {
        actualQuestion--;
        showQuestion();
    }
}

function showQuestion() {
    document.querySelector(".progress-num").innerHTML = actualQuestion + 1;

    document.querySelector(".quiz-question").textContent =
        (actualQuestion + 1) + ". " +
        questions[actualQuestion].getQuestionText();

    let answerDiv = document.querySelector(".answer-options");
    answerDiv.innerHTML = "";

    let badAnswers = questions[actualQuestion].getBadAnswers();
    let goodAnswer = questions[actualQuestion].getGoodAnswer();

    let allAnswers = [goodAnswer, ...badAnswers];

    allAnswers.sort(() => Math.random() - 0.5);

    allAnswers.forEach((answer, index) => {
        let id = `radio-${actualQuestion}-${index}`;

        let checked = answers[actualQuestion] === answer
            ? "checked"
            : "";

        let answerHTML = `
            <div class="form-check ms-3 p-3 my-4">
                <input
                    class="form-check-input me-3 ms-1"
                    type="radio"
                    name="radioDefault"
                    id="${id}"
                    value="${answer}"
                    ${checked}
                >
                <label class="form-check-label" for="${id}">
                    ${answer}
                </label>
            </div>
        `;

        answerDiv.innerHTML += answerHTML;
    });

    previousButton.disabled = actualQuestion === 0;

    nextButton.textContent =
        actualQuestion === questions.length - 1
            ? "Befejezés"
            : "Következő";

    let progress = ((actualQuestion + 1) / questions.length) * 100;

    document.querySelector(".progress-bar").style.width =
        `${progress}%`;
}

function showResult() {
    let correctAnswers = 0;

    for (let i = 0; i < questions.length; i++) {
        if (answers[i] === questions[i].getGoodAnswer()) {
            correctAnswers++;
        }
    }

    document.querySelector(".quiz-question").textContent =
        `Eredmény: ${correctAnswers} / ${questions.length}`;

    document.querySelector(".answer-options").innerHTML = "";

    nextButton.disabled = true;
    previousButton.disabled = true;

    document.querySelector(".progress-bar").style.width = "100%";
}

nextButton.addEventListener("click", nextQuestion);
previousButton.addEventListener("click", previousQuestion);

init();
