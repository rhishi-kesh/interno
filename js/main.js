let navTrigerBtn = document.getElementById('nav_triger_btn');
let nav_menu = document.getElementById('nav_menu');

//Nav Toggle
navTrigerBtn.onclick = () => {
    nav_menu.classList.toggle('active-nav');
}

//Testimonail Slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
})

//Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
    reset: true,
})

//Hero
sr.reveal('.hero__text', {origin: 'top'});
//Steps
sr.reveal('.steps__step', {distance: '100px', interval: 100});
//About
sr.reveal('.about__text', {origin: 'left'});
sr.reveal('.about__img', {origin: 'right', delay: 800,});
//Testimonial
sr.reveal('.testimonial__bg', {delay: 800,});
sr.reveal('.testimonial__title');
sr.reveal('.testimonial__slider', {delay: 1000});
//brands
sr.reveal('.brand__img', {distance: '100px', interval: 100});
// work
sr.reveal('.work__title');
sr.reveal('.work__subtitle', {delay: 800,});
sr.reveal('.work__grid', {distance: '100px', interval: 100});
//stars
sr.reveal('.stats');
sr.reveal('.stats__item', {distance: '100px', interval: 100});
//news
sr.reveal('.news__title');
sr.reveal('.news__subtitle', {delay: 800,});
sr.reveal('.news__grid', {distance: '100px', interval: 100, delay: 1000});
//contact
sr.reveal('.contact__container');
sr.reveal('.contact__text', {delay: 800,});
//footer
sr.reveal('.footer__item', {distance: '100px', interval: 100, delay: 1000});
sr.reveal('.footer__copyright');