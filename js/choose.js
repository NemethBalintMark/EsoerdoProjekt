var chooses = [];
var actualChoose = 0;
var precentage = 100;

function init() {
    for (let i = 0; i < CHOOSES.length; i++) {
        let choose = new ChooseQ(
            CHOOSES[i].situation,
            CHOOSES[i].question,
            CHOOSES[i].correctAnswer
        );

        for (let j = 0; j < CHOOSES[i].incorrectAnswers.length; j++) {
            choose.addBadAnswer(CHOOSES[i].incorrectAnswers[j]);
        }

        chooses.push(choose);
    }

    showChoose();
}

function showChoose() {
    document.querySelector(".progress-num").innerHTML = actualChoose + 1;
    document.querySelector(".choose-options").innerHTML = "";

    document.querySelector(".choose-sit").innerHTML = chooses[actualChoose].getSituation();
    document.querySelector(".choose-q").innerHTML = chooses[actualChoose].getQuestionText();

    let allQ = [chooses[actualChoose].getGoodAnswer(), ...chooses[actualChoose].getBadAnswers()];

    allQ.sort(() => Math.random() - 0.5);

    for (let i = 0; i < allQ.length; i++) {
        let escapedText = allQ[i].replace(/'/g, "\\'");

        let choose = `<div class="form-check ms-3 p-3 my-4">
                        <label class="form-check-label d-flex choose-label choose" onclick="selectAnswer('${escapedText}')">
                            <span>${allQ[i]}</span> <i class="bi bi-arrow-up-right"></i>
                        </label>
                    </div>`;

        document.querySelector(".choose-options").innerHTML += choose;
    }
}

function selectAnswer(answer) {
    if (chooses[actualChoose].getBadAnswers().includes(answer)) {
        precentage -= 30;
        if (precentage < 0) precentage = 0;
    }

    document.querySelector(".progress-bar").style.width = precentage + "%";
    
    let percentSpan = document.querySelector(".forest-precent span");
    if (percentSpan) {
        percentSpan.innerText = precentage;
    }

    if (actualChoose + 1 < 3) {
        actualChoose++;
        showChoose();
    } else {
        finishChoose();
    }
}

function finishChoose() {
    document.querySelector(".whole-choose").classList.add("d-none");

    document.querySelector(".choose-sit").innerHTML = precentage + "%-ban menekült meg az erdőd!";
}

init();