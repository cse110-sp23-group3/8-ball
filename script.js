/**
 * @description Adds the event listeners to the ask button.
 * @returns {Promise<void>}
 * @see addAnswerEffect
 * @see getAnswer
 * @see removeAnswerEffect
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

			answer.innerHTML = "..."
			askButton.disabled = true;
			addBallShakeEffect();
			await playSound();
			setAnswerToDOM();
		} catch (e) {
			alert(e.message);
		}
		finally {
			askButton.disabled = false;
		}
	})
})



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

// ============
// == NON-UI ==
// ============

/**
 * @description Checks if the question is valid.
 * @param {string} q The question to check.
 * @returns {boolean} True if the question is valid, false otherwise.
 */
const isValidQuestion = (q) => {
	return q[q.length - 1] === "?";
}

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
const setAnswerToDOM = () => {
	const q = document.getElementById("question");
	const ans = document.getElementById("answer");

	if (!q) throw new Error("The question element is not found.")

	const question = q.value;
	ans.innerText = getRandomAnswer(question);
}


// ============
// ==== UI ====
// ============

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
	const sfx = new Audio("./mystical8ball.mp3")
	sfx.play();
	await continueAfter(3000);
	sfx.pause();
}

/**
 * @description Waits for the given amount of time.
 * @param {number} ms The amount of time to wait in milliseconds.
 * @returns {Promise<void>}
 */
const continueAfter = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}
