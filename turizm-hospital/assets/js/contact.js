let doctorBtn = document.querySelector('#doctor');
let patientBtn = document.querySelector('#patient');

let firstScreen = document.querySelector('.first-screen');
let doctorScreen = document.querySelector('.doctor-screen');
let patientScreen = document.querySelector('.patient-screen');

doctorBtn.addEventListener('click', ()=> {
  firstScreen.style.display = 'none';
  doctorScreen.style.display = 'flex';
});

patientBtn.addEventListener('click', ()=> {
  firstScreen.style.display = 'none';
  patientScreen.style.display = 'flex';
});