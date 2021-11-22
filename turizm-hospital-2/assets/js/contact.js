let firstScreen = document.querySelector('.first-screen');
let first_1_screen = document.querySelector('.first-1-screen');
let first_1_1_screen = document.querySelector('.first-1-1-screen ');
let first_1_2_screen = document.querySelector('.first-1-2-screen');
let contactScreen = document.querySelector('.contact-screen');

let yesBtn = document.querySelector('#quest-yes');
let noBtn = document.querySelector('#quest-no');
let sickYesBtn = document.querySelector('#sick-quest-yes');
let sickNoBtn = document.querySelector('#sick-quest-no');

yesBtn.addEventListener('click', ()=> {
  firstScreen.style.display = 'none';
  first_1_screen.style.display = 'flex';
});

noBtn.addEventListener('click', ()=> {
  firstScreen.style.display = 'none';
  contactScreen.style.display = 'flex';
});

sickYesBtn.addEventListener('click', ()=> {
  first_1_screen.style.display = 'none';
  first_1_1_screen.style.display = 'flex';
});

sickNoBtn.addEventListener('click', ()=> {
  first_1_screen.style.display = 'none';
  first_1_2_screen.style.display = 'flex';
});