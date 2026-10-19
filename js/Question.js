class Question {
    #questionText;
    #badAnswers;
    #goodAnswer;

    constructor (question, goodAnswer) {
        this.setQuestionText(question);
        this.setGoodAnswer(goodAnswer);
        this.#badAnswers = [];
    }

    setQuestionText(quiestion) {
        this.#questionText = quiestion;
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
}