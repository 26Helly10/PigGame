'use strict';

//Selecting elements
const scorePlayer0 = document.getElementById('score--0');
const scorePlayer1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
diceEl.classList.add('hidden');