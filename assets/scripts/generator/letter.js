document.getElementById('loveLetterForm').addEventListener('submit', function(event) {
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
