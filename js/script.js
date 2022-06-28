window.addEventListener('load', init);

// Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

const currentLevel = levels.easy;

// Globals
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Word's is manually printing
const words = [
    'smart',
    'sing',
    'last',
    'twelve',
    'dragon',
    'evening',
    'morning',
    'giraphe',
    'down',
    'drown',
    'kitchen',
    'cat',
    'dog',
    'morning',
    'sunday',
    'wednesday',
    'three',
    'jump'
];

// Initialize game
function init() {
    // Show number of seconds left in UI
    seconds.innerHTML = currentLevel;
    // load word from array words
    showWord(words);

    // Start game
    wordInput.addEventListener('input', startMatch);

    // Countdown
    setInterval(countdown, 1000);

    // Game status
    setInterval(checkStatus, 50);
}

// Start game
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // if score is -1
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Inputing word
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = '<p class="text-info">Correct!!!</p>';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}


function showWord(words) {
    // random array
    const randomIndex = Math.floor(Math.random() * words.length);

    // output random
    currentWord.innerHTML = words[randomIndex];
}

// Countdown
function countdown() {
    if(time > 0) {
        time--;
    } else if(time === 0) {
        isPlaying = false;
    } else {
        return false;
    }

    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!isPlaying && time == 0) {
        message.innerHTML = '<p class="text-warning">Game Over!!!</p>';
        score = -1;
    }
}

