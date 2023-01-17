const  word = document.getElementById('word');
const  text = document.getElementById('text');
const  scoreEl = document.getElementById('score');
const  timeEl = document.getElementById('time');
const  endgameEl = document.getElementById('end-game');
const  settingsbtn = document.getElementById('settings-btn');
const  settings = document.getElementById('settings');
const  settingsForm = document.getElementById('settings-form');
const  difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;


// // Generate random word using random word API
// async function fetchWords() {
//   try {

//     const response = await fetch('https://random-word-api.herokuapp.com/word?number=1000&lang=en')
//     const data = await response.json();

//     return randomWord = data[Math.floor(Math.random() * data.length)];

//     console.log(randomWord);
    
//   } catch (error) {
//     console.log("Error: " + error);
//   }

// }

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}



addWordToDOM();

// Event listeners

text.addEventListener('input', e => {
  const insertedText = e.target.value;
    if(insertedText === randomWord) {
      addWordToDOM();
      updateScore();

      // Clear
      e.target.value = '';
    }
});