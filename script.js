'use strict';

const number = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const guessEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const noNumber = document.querySelector('.message-nonumber');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');

let numberRandom = Math.floor(Math.random() * 5) + 1;
let score = 20;
let highscore = 0;

const messageDisplay = function (message) {
  messageEl.textContent = message;
};

const winner = function () {
  number.textContent = numberRandom;
  if (highscore < score) highscoreEl.textContent = highscore = score;
  document.querySelector('body').style.backgroundColor = '#60b347';
  messageDisplay('YOU WON 🎉🏆');
};

const lostGame = function (verifiedValue) {
  if (score > 1) {
    verifiedValue > numberRandom
      ? messageDisplay('HIGH VALUE 📈')
      : messageDisplay('LOW VALUE 📉');

    scoreEl.textContent = --score;
  } else {
    scoreEl.textContent = 0;
    messageDisplay('YOU LOST 😢');
  }
};

checkBtn.addEventListener('click', function () {
  const verifiedValue = +guessEl.value;

  if (!verifiedValue) return noNumber.classList.add('active');

  noNumber.classList.remove('active');

  if (verifiedValue === numberRandom) winner();

  if (verifiedValue !== numberRandom) {
    lostGame(verifiedValue);
  }
});

const restartGame = function () {
  numberRandom = Math.floor(Math.random() * 5) + 1;
  number.textContent = '?';
  guessEl.value = '';
  score = 20;
  scoreEl.textContent = score;
  messageEl.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
};

againBtn.addEventListener('click', restartGame);
