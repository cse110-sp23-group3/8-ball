document.getElementById("ask").addEventListener("click", function() {
  const question = document.getElementById("question").value.trim();
  if (!question || question[question.length - 1] !== "?") {
    alert("Please enter a valid question ending with a question mark.");
    return;
  }

  document.getElementById("ball").classList.add("shake");
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
      "Very doubtful."
    ];

    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById("answer").textContent = randomAnswer;

    document.getElementById("ball").classList.remove("shake");
  }, 3000);
});
