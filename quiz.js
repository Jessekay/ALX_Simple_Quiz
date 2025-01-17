function checkAnswer() {
  const correctAnswer = "4";

  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  const feedback = document.getElementById('feedback');

  if (correctAnswer === userAnswer) {
    feedback.textContent = "Correct! Well Done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer)




