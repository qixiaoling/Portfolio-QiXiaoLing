const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    })
})

const portInfoBtns = document.querySelectorAll('.portfolio-info-btn');
const portTextCloseBtns = document.querySelectorAll('.portfolio-text-close-btn');

portInfoBtns.forEach(function(btn){
    btn.addEventListener('click', function(event) {
        const textOverlay = event.currentTarget.parentElement.nextElementSibling;
        textOverlay.classList.add('overlay-active');
    })
})

portTextCloseBtns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        const textOverlay = event.currentTarget.parentElement;
        textOverlay.classList.remove('overlay-active');
    })
})