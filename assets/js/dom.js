import { askedBefore, isValidQuestion, getRandomAnswer } from './main.js';

const AUDIO_FILE = "assets/media/mystical8ball.mp3"

let prevAnswer = "";
let prevQuestion = "";

/**
 * @description Main function that runs when the DOM is loaded.
 */
document.addEventListener('DOMContentLoaded', async () => {
    const askButton = document.getElementById("ask");
    const question = document.getElementById("question");
    const answer = document.getElementById("answer");

    askButton?.addEventListener("click", async () => {
        try {
            if (!isValidQuestion(question.value)) {
                throw new Error("Please enter a valid question ending with a question mark.")
            }
            if (askedBefore(question.value, prevQuestion, prevAnswer)) {
                throw new Error("This question has already been answered. Please ask a different question.")
            }

            // Loading state
            answer.innerHTML = "..."
            askButton.disabled = true
            addBallShakeEffect()
            await playSound();

            // Answering
            setAnswerToDOM(question, answer)

            // Store question and answer for later
            prevAnswer = answer.innerText;
            prevQuestion = question.value;
        } catch (e) {
            alert(e.message)
        }
        finally {
            // Resetting state
            askButton.disabled = false
        }
    })
});

/**
 * @description Waits for the given amount of time.
 * @param {number} ms The amount of time to wait in milliseconds.
 * @returns {Promise<void>}
 */
const continueAfter = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
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
 * @description Adds the answer effect to the answer element.
 * @returns {Promise<void>}
 * @see continueAfter
 */
const addBallShakeEffect = async () => {
    const ball = document.getElementById("ball");
    ball?.classList.add("shake");
    await continueAfter(3000);
    ball?.classList.remove("shake");
}

/**
 * @description Plays the sound effect.
 * @returns {Promise<void>}
 * @see continueAfter
 */
const playSound = async () => {
    const sfx = new Audio(AUDIO_FILE)
    sfx.play();
    await continueAfter(3000);
    sfx.pause();
}

