'use strict';

let guessNum = Math.round(Math.random() * 21);

let passNum = document.createElement('p');
passNum.setAttribute('id', 'guessNum');
passNum.append(guessNum);
document.querySelector('#output').appendChild(passNum);

let checkButton = document.querySelector('#check');
let outputDisplayer = document.querySelector('#guessNum');
let body = document.querySelector('body');

let hintOne = document.querySelector('#hintOne');
hintOne.style.opacity = '0';

let reTriesMax = 20;
let reTries = document.createElement('p');
reTries.setAttribute('id', 'reTries');
reTries.append(reTriesMax);
document.querySelector('#trailsLeft').appendChild(reTries);

let highscoreNumber = 0;
let highscoreValue = document.createElement('p');
highscoreValue.setAttribute('id', 'highscoreValue');
highscoreValue.append(highscoreNumber);
document.querySelector('#highscore').appendChild(highscoreValue);

checkButton.addEventListener('click', function () {
  let text;
  let insertedValue = Number(document.querySelector('#addNum').value);
  text = insertedValue;
  let guessSymbol = document.querySelector('#guessSymbol');
  let errorita = document.querySelector('#errorita');
  let gameOver = document.querySelector('#gameOver');
  let hintOne = document.querySelector('#hintOne');
  let hintTwo = document.querySelector('#hintTwo');
  let hintThree = document.querySelector('#hintThree');
  let hintFour = document.querySelector('#hintFour');
  let hintFive = document.querySelector('#hintFive');
  let hintSix = document.querySelector('#hintSix');
  let hintSeven = document.querySelector('#hintSeven');
  let hintEight = document.querySelector('#hintEight');

  if (guessNum === text) {
    guessSymbol.style.opacity = '0';
    errorita.style.opacity = '0';
    outputDisplayer.style.opacity = '1';
    body.style.backgroundColor = 'rgb(40, 80, 25)';
    hintOne.style.opacity = '1';
    hintTwo.style.opacity = '0';
    hintThree.style.opacity = '0';
    hintFour.style.opacity = '0';
    hintFive.style.opacity = '0';
    hintSix.style.opacity = '0';
    hintEight.style.opacity = '0';

    if (
      document.querySelector('#reTries').textContent >
      document.querySelector('#highscoreValue').textContent
    ) {
      document.querySelector('#highscoreValue').textContent =
        document.querySelector('#reTries').textContent;
    }
  } else if (!text) {
    guessSymbol.style.opacity = '0';
    errorita.style.opacity = '1';
    hintEight.style.opacity = '1';
    hintOne.style.opacity = '0';
    hintTwo.style.opacity = '0';
    hintThree.style.opacity = '0';
    hintFour.style.opacity = '0';
    hintFive.style.opacity = '0';
    hintSix.style.opacity = '0';
    hintSeven.style.opacity = '0';
    body.style.backgroundColor = 'rgb(75, 5, 5)';
  } else if (text > 20) {
    guessSymbol.style.opacity = '0';
    errorita.style.opacity = '1';
    hintTwo.style.opacity = '1';
    hintOne.style.opacity = '0';
    hintThree.style.opacity = '0';
    hintFour.style.opacity = '0';
    hintFive.style.opacity = '0';
    hintSix.style.opacity = '0';
    hintSeven.style.opacity = '0';
    hintEight.style.opacity = '0';
    document.querySelector('#reTries').textContent = reTriesMax--;
    body.style.backgroundColor = 'rgb(75, 5, 5)';
    outputDisplayer.style.opacity = '0';
  } else if (text < guessNum) {
    if (reTriesMax >= 1) {
      guessSymbol.style.opacity = '1';
      errorita.style.opacity = '0';
      hintThree.style.opacity = '1';
      hintOne.style.opacity = '0';
      hintTwo.style.opacity = '0';
      hintFour.style.opacity = '0';
      hintFive.style.opacity = '0';
      hintSix.style.opacity = '0';
      hintSeven.style.opacity = '0';
      hintEight.style.opacity = '0';
      document.querySelector('#reTries').textContent = reTriesMax--;
      body.style.backgroundColor = 'rgb(25, 25, 25)';
      outputDisplayer.style.opacity = '0';
    } else if (reTriesMax <= 0) {
      guessSymbol.style.opacity = '0';
      errorita.style.opacity = '0';
      passNum.remove();
      gameOver.style.opacity = '1';
      hintSeven.style.opacity = '1';
      hintOne.style.opacity = '0';
      hintTwo.style.opacity = '0';
      hintThree.style.opacity = '0';
      hintFour.style.opacity = '0';
      hintFive.style.opacity = '0';
      hintSix.style.opacity = '0';
      hintEight.style.opacity = '0';
      body.style.backgroundColor = 'rgb(25, 25, 25)';
      document.querySelector('#reTries').textContent = 0;
    }
  } else if (text > guessNum) {
    if (reTriesMax >= 1) {
      guessSymbol.style.opacity = '1';
      errorita.style.opacity = '0';
      hintFour.style.opacity = '1';
      hintOne.style.opacity = '0';
      hintTwo.style.opacity = '0';
      hintThree.style.opacity = '0';
      hintFive.style.opacity = '0';
      hintSix.style.opacity = '0';
      hintSeven.style.opacity = '0';
      hintEight.style.opacity = '0';
      document.querySelector('#reTries').textContent = reTriesMax--;
      body.style.backgroundColor = 'rgb(25, 25, 25)';
      outputDisplayer.style.opacity = '0';
    } else if (reTriesMax <= 0) {
      guessSymbol.style.opacity = '0';
      errorita.style.opacity = '0';
      passNum.remove();
      gameOver.style.opacity = '1';
      hintSeven.style.opacity = '1';
      hintOne.style.opacity = '0';
      hintTwo.style.opacity = '0';
      hintThree.style.opacity = '0';
      hintFour.style.opacity = '0';
      hintFive.style.opacity = '0';
      hintSix.style.opacity = '0';
      hintEight.style.opacity = '0';
      body.style.backgroundColor = 'rgb(25, 25, 25)';
      document.querySelector('#reTries').textContent = 0;
    }
  }
});

let againButton = document.querySelector('#reset');

againButton.addEventListener('click', function () {
  document.querySelector('#addNum').value = '';
  passNum.remove();
  reTries.remove();
  guessNum = Math.round(Math.random() * 21);
  body.style.backgroundColor = 'rgb(25, 25, 25)';
  guessSymbol.style.opacity = '1';
  errorita.style.opacity = '0';
  gameOver.style.opacity = '0';

  passNum = document.createElement('p');
  passNum.setAttribute('id', 'guessNum');
  passNum.append(guessNum);
  document.querySelector('#output').appendChild(passNum);

  reTriesMax = 20;
  reTries = document.createElement('p');
  reTries.setAttribute('id', 'reTries');
  reTries.append(reTriesMax);
  document.querySelector('#trailsLeft').appendChild(reTries);

  let checkButton = document.querySelector('#check');
  let outputDisplayer = document.querySelector('#guessNum');

  let hintOne = document.querySelector('#hintOne');
  let hintTwo = document.querySelector('#hintTwo');
  let hintThree = document.querySelector('#hintThree');
  let hintFour = document.querySelector('#hintFour');
  let hintFive = document.querySelector('#hintFive');
  let hintSix = document.querySelector('#hintSix');
  let hintSeven = document.querySelector('#hintSeven');
  let hintEight = document.querySelector('#hintEight');

  hintOne.style.opacity = '0';
  hintTwo.style.opacity = '0';
  hintThree.style.opacity = '0';
  hintFour.style.opacity = '0';
  hintFive.style.opacity = '0';
  hintSix.style.opacity = '1';
  hintSeven.style.opacity = '0';
  hintEight.style.opacity = '0';

  checkButton.addEventListener('click', function () {
    let text;
    let insertedValue = Number(document.querySelector('#addNum').value);
    text = insertedValue;

    if (guessNum === text) {
      outputDisplayer.style.opacity = '1';
      body.style.backgroundColor = 'rgb(40, 80, 25)';
    }
  });
});
