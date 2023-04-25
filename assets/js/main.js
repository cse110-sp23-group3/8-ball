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
    "The cake is a lie.",
    "42 is the answer to everything."
];

/**
 * @description Gets a random answer from the answers array.
 * @param {string} question The question being asked
 * @param {string} prevQuestion The previous question asked by the user.
 * @param {string} prevAnswer The previous answer given to the user.
 * @returns {string} The answer to the question.
 * @throws {Error} If the answers array is empty.
 * @throws {Error} If the question is invalid.
 * @throws {Error} If the question has been asked before, but user was not prompted to ask again.
 * @see answers
 * @see getRandomAnswer
 */
const getRandomAnswer = (question, prevQuestion, prevAnswer) => {
    if (!answers.length) throw new Error("The answers array is empty.")
    if (!isValidQuestion(question)) throw new Error("Please enter a valid question ending with a question mark.")
    if (askedBefore(question, prevQuestion, prevAnswer)) throw new Error("This question has already been answered. Please ask a different question.")

    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

/**
 * @description Checks if the question is valid.
 * @param {string} q The question to check.
 * @returns {boolean} True if the question is valid, false otherwise.
 */
const isValidQuestion = (q) => {
    return q[q.length - 1] === "?";
}

/**
 * @description Checks if the question has been asked previously, unless the user was prompted to ask again.
 * @param {string} q The question to check.
 * @param {string} pq The previous answer given.
 * @returns {boolean} True if the question has been asked before, false otherwise.
 */
const askedBefore = (q, pq, pa) => {
    if (!(pa.includes("again")) && !(pa.includes("now"))) {
        return q === pq;
    }
    return false;
}

// Add this line at the end of your script.js file
export { askedBefore, isValidQuestion, getRandomAnswer };