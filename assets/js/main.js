const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "As I see it, yes.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "It is certain.",
    "It is decidedly so.",
    "Most likely.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Outlook good.",
    "Reply hazy, try again.",
    "Signs point to yes.",
    "Very doubtful.",
    "Without a doubt.",
    "Yes.",
    "Yes – definitely.",
    "You may rely on it.",
    "The cake is a lie.",
    "42 is the answer to everything."
];


/**
 * @description Gets a random answer from the answers array.
 * @returns {string} The answer to the question.
 * @throws {Error} If the answers array is empty.
 * @throws {Error} If the question is invalid.
 * @see answers
 * @see getRandomAnswer
 */
const getRandomAnswer = (question) => {
    if (!answers.length) throw new Error("The answers array is empty.")
    if (!isValidQuestion(question)) throw new Error("Please enter a valid question ending with a question mark.")

    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

/**
 * @description Gets the question from the input and returns a random answer.
 * @returns {string} The answer to the question.
 * @throws {Error} If the question is invalid.
 */
const setAnswerToDOM = (questionElement, answerElement) => {
    const question = questionElement.value;
    answerElement.innerText = getRandomAnswer(question);
};

/**
 * @description Checks if the question is valid.
 * @param {string} q The question to check.
 * @returns {boolean} True if the question is valid, false otherwise.
 */
const isValidQuestion = (q) => {
    return q[q.length - 1] === "?";
}

// Add this line at the end of your script.js file
export { isValidQuestion, setAnswerToDOM, getRandomAnswer };