let mobileBtn = document.querySelector('.mobile-btn a');
let mobileMenu = document.querySelector('.mobile-full-area');
let mobileMenuCloseBtn = document.querySelector('.menu-close a');

mobileBtn.addEventListener('click', ()=> {
    mobileMenu.classList.add('active');
});

mobileMenuCloseBtn.addEventListener('click', ()=> {
    mobileMenu.classList.remove('active');
});