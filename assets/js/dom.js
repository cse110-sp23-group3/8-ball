import { isValidQuestion, setAnswerToDOM } from './main.js';

const AUDIO_FILE = "assets/media/mystical8ball.mp3"

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

            // Loading state
            answer.innerHTML = "..."
            askButton.disabled = true
            addBallShakeEffect()
            await playSound();

            // Answering
            setAnswerToDOM(question, answer)
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
