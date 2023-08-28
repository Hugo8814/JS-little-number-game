'use strict';
// console.log(document.querySelector('.message').textContent);

// console.log(
//   (document.querySelector('.message').textContent = '🎉 correct Number!')
// );

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  displayNumber('?');
  displayMessage('start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber('15rem');
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    /// not input
    displayMessage('🛑No Number!');
  } else if (guess === number) {
    // when player wins
    displayMessage('🎉 correct Number!');
    displayNumber(`${number}`);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // to high
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high!' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost 🎮gg');
    }
  }
});
