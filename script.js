'use strict';
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');

class Game {
  #numberSecret = Math.floor(Math.random() * 20) + 1;
  #valueChecked;
  #score = 20;

  constructor() {
    this.#methodCheckNumber();
    this.#methodNumberSecret();
    numberEl.textContent = '?';
  }

  #methodNumberSecret() {
    numberEl.textContent = this.#numberSecret;
  }

  #methodCheckNumber() {
    btnCheck.addEventListener('click', () => {
      this.#valueChecked = +guessEl.value;
      this.#scoreGame();
      this.#winnerGame();
    });
  }

  #winnerGame() {
    if (this.#valueChecked === this.#numberSecret) {
      messageEl.textContent = 'You Mon';
      document.body.style.backgroundColor = '#60b347';
    }
  }

  #scoreGame() {
    if (this.#valueChecked !== this.#numberSecret) {
      if (this.#score > 1) return (scoreEl.textContent = --this.#score);

      scoreEl.textContent = 0;
      messageEl.textContent = 'You lost!';
      document.body.style.backgroundColor = '#b34c47';
    }
  }
}

const app = new Game();
