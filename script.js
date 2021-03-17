'use strict';

// Random Number Constant
const classMessage = document.querySelector('.message');

const classHighScore = document.querySelector('.highscore');

const classNumber = document.querySelector('.number');

const againButton = document.querySelector('.again');

const guessInput = document.querySelector('.guess');

const classScore = document.querySelector('.score');

const objectBody = document.querySelector('body');

const checkButton = document.querySelector('.check');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Initial score
let score = 20;
let highScore = 0;
// Display Random Number in place of Question Mark for testing
// document.querySelector('.number').textContent = secretNumber;

// gives the 'Check!' button the ability to capture guess value
classHighScore.textContent = highScore;

againButton.addEventListener('click', function () {
  // window.location.reload();
  guessInput.textContent = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  classScore.textContent = score;
  objectBody.style.backgroundColor = '#222';
  classNumber.style.width = '15rem';
  classNumber.textContent = '?';
  classMessage.textContent = 'Start guessing...';
  if (score > highScore) {
    highScore = score;
    classHighScore.textContent = highScore - 1;
    score = score - 1;
    classScore.textContent = score;
  }
});

checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  console.log(guess);
  // else if statements for guessing instructions no number
  if (!guess) {
    classMessage.textContent = 'Please Enter a Number';

    //guess is correct
  } else if (guess === secretNumber) {
    classMessage.textContent = 'Correct!';
    score = score + 1;

    document.querySelector('body').style.backgroundColor = '#60b347';

    classNumber.style.width = '30rem';

    classNumber.textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      classMessage.textContent =
        guess > secretNumber ? 'Too High!' : 'Too Low!';
      score = score - 1;
      classScore.textContent = score;
    } else {
      classMessage.textContent = 'You lost the game!';
    }
  }
});
// guess is high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too High';
//     score = score - 1; //same as score--
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You Lost The Game!.';
// }
// GUess is low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low';
//     score = score - 1; //same as score--
//     document.querySelector('.score').textContent = score;
//   } else
//     document.querySelector('.message').textContent = 'You Lost The Game!.';
// }

// document.querySelector('.message').textContent = 'Correct Number!';
// });

// 1. select the element with the again class and attach a click event handler

// 2. in the handler function restore initial values to the score and and number variables

// 3.restore the initial conditions of the message number and score guess input field

// 4. also restore the original background color #222 and number width ( rem 15)
