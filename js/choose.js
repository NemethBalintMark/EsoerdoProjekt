var chooses = [];

function init() {
    for (let i = 0; i < scenarios.length; i++) {

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
}

