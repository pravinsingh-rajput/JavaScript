'use strict';

const print = (content) =>
  (document.querySelector('.message').textContent = content);

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let num = document.querySelector('.secretNumber').textContent;

let score = 20;
let highScore = document.querySelector('.highScore').textContent;

// Checking Condition

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value);
  console.log(guess);
  if (score < 1) {
    print('No Change Left Restart');
    document.querySelector('.mainContainer').style.backgroundColor = 'red';
  } else {
    if (!guess) {
      print('No Number🔢');
    } else if (guess != randomNumber) {
      document.querySelector('.guess').value = '';
      const checking = guess > randomNumber ? 'Two High⬆️' : 'Two Low⬇️';
      score--;
      document.querySelector('.score').textContent = score;
      print(checking);
    } else if (guess === randomNumber) {
      print('Correct Number 🎉');
      document.querySelector('.secretNumber').textContent = randomNumber;
      document.querySelector('.mainContainer').style.backgroundColor = 'green';
      document.querySelector('.highScore').textContent = score;
    } else {
      print('Error');
    }
  }
});

document.querySelector('.tryagain').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing 🤔';
  document.querySelector('.score').textContent = score;
  document.querySelector('.secretNumber').textContent = '?';
  document.querySelector('.mainContainer').style.backgroundColor = '#26C6DA';
  document.querySelector('.guess').value = '';
});
