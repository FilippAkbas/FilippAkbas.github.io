let mobileBtn = document.querySelector('.mobile-btn a');
let mobileMenu = document.querySelector('.mobile-full-area');
let mobileMenuCloseBtn = document.querySelector('.menu-close a');
let langItem = document.querySelector('.lang-item');

mobileBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('active');
    if(mobileMenu.classList.contains('active')) {
        mobileBtn.innerHTML = '<img src="assets/img/mobil-menü-open.png" alt="Open menu">';
    } else {
        mobileBtn.innerHTML = '<img src="assets/img/mobil-menü-close.png" alt="Open menu">';
    }
});

langItem.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('active');
});