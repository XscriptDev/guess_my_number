'use strict';
//If we want to change the content of a class in html we will do this:
// document.querySelector('.number').textContent = 13;
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.score').textContent = 10;
// //but in the case that the content is inside an input we will do:
// document.querySelector('.guess').value = '50';

//we will generate a new number

let num = Math.trunc(Math.random() * 100) + 1;

// if we want to interact when they click we will use an event
// event are used in many case for example a mouse click , a mouse moving , a key press
let score = 10;
let finish = false;
let initmsg = document.querySelector('.message').textContent;
let initscore = document.querySelector('.score').textContent;
let bestscore = 0;
let initnum = document.querySelector('.number').textContent;
let initinput = document.querySelector('.guess').value;

//functions

const displaymsg = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayscore = function (score) {
  document.querySelector('.score').textContent = score;
};
displayscore(score);
document.querySelector('.check').addEventListener('click', function () {
  if (!finish) {
    if (score > 0) {
      let guess = Number(document.querySelector('.guess').value);
      // if the input has no value
      if (!guess) {
        displayscore(score);
        displaymsg('🛑 No Number!');
        score = score + 1;
      } else {
        if (guess > 100 || guess < 0) {
          displayscore(score);
          displaymsg('The number is outside the range 😶(read the top right)');
          score = score + 1;
        } else if (guess > num) {
          displayscore(score);
          displaymsg('The number you entered is higher than my number 😁');
        } else if (guess < num) {
          displayscore(score);
          displaymsg('The number you entered is lower than my number 😄');
        } else {
          displayscore(score);
          displaymsg('🎉 Correct Number!');
          finish = true;
          document.querySelector('.number').textContent = num;
          document.querySelector('body').style.backgroundColor = '#60b347';
          if (score > bestscore) {
            bestscore = score;
            document.querySelector('.highscore').textContent = bestscore;
          }
        }
      }
      score = score - 1;
    } else {
      displayscore(score);
      displaymsg(
        'Your score is 0 you cant go any further! But man you are bad!🙄(prove me wrong and retry)'
      );
      finish = true;
      document.querySelector('body').style.backgroundColor = '#DC143C';
      document.querySelector('.number').textContent = num;
    }
  }
});

// note that function is only called when the click event happened
// Whenever we get an input from the user it always a string

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  finish = false;
  displayscore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.color = '#eee';
  num = Math.trunc(Math.random() * 100) + 1;
  displaymsg(initmsg);
  document.querySelector('.score').textContent = initscore;
  document.querySelector('.number').textContent = initnum;
  document.querySelector('.guess').value = initinput;
});

displayscore(score);
