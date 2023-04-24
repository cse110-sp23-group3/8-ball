// declare variables to store previous question to ensure user does not ask same question twice
let prevQuestion = "";

document.getElementById("ask").addEventListener("click", function() {
  const question = document.getElementById("question").value.trim();
  const shakeSound = document.getElementById("shake-sound");
  if (!question || question[question.length - 1] !== "?") {
    alert("Please enter a valid question ending with a question mark.");
    return;
  }

  if (question == prevQuestion) {
    alert("This question has already been answered. Please ask a different question.");
    return;
  }

  prevQuestion = question;

  document.getElementById("ball").classList.add("shake");
  shakeSound.play();
  setTimeout(function() {
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

    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById("answer").textContent = randomAnswer;

    document.getElementById("ball").classList.remove("shake");
  }, 3000);
});
