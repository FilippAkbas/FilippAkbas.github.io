let closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', (e)=> {
  let topHeader = e.target.parentNode.parentNode;

  topHeader.style.display = 'none';
});