document.getElementById('loveLetterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect user input
    const name = document.getElementById('name').value;
    const crush = document.getElementById('crush').value;
    const reason = document.getElementById('reason').value;
    const gift = document.getElementById('gift').value;
    const date = document.getElementById('date').value;

    // Generate the letter
    const letter = `Dear ${crush},

    I've been thinking a lot about us and how much I enjoy our time together. One thing that stands out to me is ${reason}. It's something that makes you incredibly special to me.

    I've been wanting to show you how much I care, so I've decided to give you ${gift} as a token of my affection. I hope it brings a smile to your face.

    Let's make a plan to spend some quality time together on ${date}. I'm looking forward to creating more beautiful memories with you.

    With all my love,
    ${name}`;

    // Display the letter
    document.getElementById('letterOutput').innerText = letter;
  });