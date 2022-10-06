let headerMenu = document.querySelector('.header_menu');
let burgerButton = document.querySelector('.header_burger');
let closeMenuButton = document.querySelector('.close_menu');

burgerButton.addEventListener('click', (e)=> {
    headerMenu.classList.add('active');
})

closeMenuButton.addEventListener('click', (e)=> {
    headerMenu.classList.remove('active');
})