'use strict';

//Selecting elements

const Player0 = document.querySelector('.player--0');
const Player1 = document.querySelector('.player--1');
const scorePlayer0 = document.getElementById('score--0');
const scorePlayer1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function() {
    scorePlayer0.textContent = 0;
    scorePlayer1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    Player0.classList.remove('player--winner');
    Player0.classList.add('player--active');
    Player1.classList.remove('player--winner');
    diceEl.classList.add('hidden');
    playing = true;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
}
init();

//rolling dice functionality
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    Player0.classList.toggle('player--active');
    Player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function() {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', function() {
    init();
})