class ChooseQ {
    #situation;
    #questionText;
    #badAnswers;
    #goodAnswer;

    constructor (situation, question, goodAnswer) {
        this.setQuestionText(question);
        this.setSituation(situation);
        this.setGoodAnswer(goodAnswer);
        this.#badAnswers = [];
    }

    setQuestionText(quiestion) {
        this.#questionText = quiestion;
    }

    setSituation(situation) {
        this.#situation = situation;
    }

    setGoodAnswer(answer) {
        this.#goodAnswer = answer;
    }

    addBadAnswer(answer) {
        this.#badAnswers.push(answer);
    }

    getQuestionText() {
        return this.#questionText;
    }

    getGoodAnswer() {
        return this.#goodAnswer;
    }

    getBadAnswers() {
        return this.#badAnswers;
    }

    getSituation() {
        return this.#situation;
    }
}