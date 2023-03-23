'use strict';
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
class Game {
  #numberSecret = Math.floor(Math.random() * 20) + 1;
  #valueChecked;
  #score = 20;
  #highscore = 0;

  constructor() {
    this.#methodCheckNumber();
    this.#methodNumberSecret();
    numberEl.textContent = '?';
  }

  message(message) {
    console.log(message);
    messageEl.textContent = message;
  }

  #methodNumberSecret() {
    numberEl.textContent = this.#numberSecret;
  }

  #methodCheckNumber() {
    btnCheck.addEventListener('click', () => {
      this.#valueChecked = +guessEl.value;
      this.#scoreGame();
      this.#updateMessage();

      this.#winnerGame();
    });
  }

  #winnerGame() {
    if (this.#valueChecked === this.#numberSecret) {
      this.message('You Mon 🎉🏆🎉🏆');
      document.body.style.backgroundColor = '#60b347';
      this.#highscoreUpdate();
      numberEl.textContent = this.#numberSecret;
    }
  }

  #scoreGame() {
    if (this.#score > 1) return (scoreEl.textContent = --this.#score);
    scoreEl.textContent = 0;
  }

  #updateMessage() {
    this.#valueChecked > this.#numberSecret
      ? this.message('Very high 📈')
      : this.message('Very low  📉');
  }

  #highscoreUpdate() {
    if (this.#score > this.#highscore) {
      this.#highscore = this.#score;
      highscoreEl.textContent = this.#highscore;
    }
  }
}

const app = new Game();
