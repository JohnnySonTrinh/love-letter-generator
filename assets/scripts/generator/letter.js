document.getElementById('loveLetterForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Collect user input
  const partnerName = document.getElementById('partnerName').value;
  const noun1 = document.getElementById('noun1').value;
  const noun2 = document.getElementById('noun2').value;
  const eyeColor = document.getElementById('eyeColor').value;
  const adjective1 = document.getElementById('adjective1').value;
  const adjective2 = document.getElementById('adjective2').value;
  const yourName = document.getElementById('yourName').value;

  // Generate the letter
  const letter = `My dearest ${partnerName},

  Whenever I think of you, my heart swells with joy. Your eyes, as ${eyeColor} as the deep ocean, remind me of the serenity of a calm sea. They are like ${noun1}, full of life and beauty.

  You possess a ${adjective1} spirit that lights up any room and a ${adjective2} heart that shows your true kindness. It's the way that you care about the little things, like ${noun2}, that makes me love you even more.

  Every moment with you is a treasure, and I look forward to making countless more memories together.

  All my love,
  ${yourName}`;

  // Display the letter
  document.getElementById('letterOutput').innerText = letter;
});

// Function to randomize words
const randomizeWord = (inputId, wordType) => {
  // Valentine-themed nouns
  const nouns = [
    "heart", "rose", "cupid", "chocolate", "love", "kiss", "valentine", "passion",
    "arrow", "candle", "hug", "date", "promise", "flame", "jewel", "gift", "song",
    "poem", "dream", "whisper"
  ];
  // Valentine-themed adjectives
  const adjectives = [
    "loving", "romantic", "passionate", "sweet", "adorable", "charming", "affectionate", "tender",
    "warm", "gentle", "joyful", "radiant", "magical", "enchanting", "alluring", "breathtaking",
    "devoted", "elegant", "graceful", "precious"
  ];
  let randomWord;

  if (wordType === 'noun') {
    randomWord = nouns[Math.floor(Math.random() * nouns.length)];
  } else if (wordType === 'adjective') {
    randomWord = adjectives[Math.floor(Math.random() * adjectives.length)];
  }

  document.getElementById(inputId).value = randomWord;
};

// Attach event listeners to buttons for randomizing using arrow functions
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('randomizeNoun1').addEventListener('click', () => randomizeWord('noun1', 'noun'));
  document.getElementById('randomizeNoun2').addEventListener('click', () => randomizeWord('noun2', 'noun'));
  document.getElementById('randomizeAdjective1').addEventListener('click', () => randomizeWord('adjective1', 'adjective'));
  document.getElementById('randomizeAdjective2').addEventListener('click', () => randomizeWord('adjective2', 'adjective'));
});