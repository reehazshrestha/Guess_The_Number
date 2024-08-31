'use strict';

'siuu';

// Generating a random number between 1 to 20
let number = Math.trunc(Math.random() * 20) + 1;

// Fetching score and converting into a number
let score = 20;

// Fetching high_score and converting into a number
let higher_score = 0;

// Selecting input tag that have .guess class
let guessinput = document.querySelector('.guess');

const message = message => {
  document.querySelector('.message').textContent = message;
};

// Desiding what happens when user click on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('body').style.backgroundColor = '#F5E058';
  } else {
    document.querySelector('body').style.backgroundColor = '#222';
  }
  // When guess is empty
  if (!guess) {
    message('🚫 Invalid Number...');
    // When player wins
  } else if (guess == number) {
    if (score >= 1) {
      guessinput.disabled = true;

      document.querySelector('.number').textContent = number;
      message('🎉 Correct Guess...');

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > higher_score) {
        higher_score = score;
        document.querySelector('.highscore').textContent = higher_score;
      }
    }

    // When guess !== number
  } else if (guess !== number) {
    if (score > 1) {
      message(guess > number ? '📈 Too High Guess...' : '📈 Too Low Guess...');
      score--;
      document.querySelector('.score').textContent = score;

      // When score is lower then 1
    } else {
      guessinput.disabled = true;

      document.querySelector('.score').textContent = 0;
      message('😭 You Lost The Game...');

      document.querySelector('body').style.backgroundColor = '#E13636';
      document.querySelector('.number').style.width = '30rem';
    }

    // When guess is higher then the number
  }
  //  else if (guess <= 0 || guess > 20) {
  //   document.querySelector('.message').textContent = '🚫 Invalid Number ...';
  // } else if (guess > number) {
  //   // When score is higher then 1

  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High Guess...';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //     // When score is lower then 1
  //   } else {
  //     guessinput.disabled = true;

  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent =
  //       '😭 You Lost The Game...';

  //     document.querySelector('body').style.backgroundColor = '#E13636';
  //     document.querySelector('.number').style.width = '30rem';
  //   }

  //   // When the guess is lower than number
  // } else if (guess < number) {
  //   // When score is higher thean number

  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Low Guess...';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //     // When guess is lower than number
  //   } else {
  //     guessinput.disabled = true;

  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent =
  //       '😭 You Lost The Game...';

  //     document.querySelector('body').style.backgroundColor = '#E13636';
  //     document.querySelector('.number').style.width = '30rem';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  guessinput.disabled = false;

  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';

  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  message('Start Guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
