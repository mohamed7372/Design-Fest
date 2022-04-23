// custom owl for each slider 
$(document).ready(function () {
    $(".owl1").owlCarousel({
        items: 4,
        dots: true,
        margin: 10,
        nav: true,
        responsive:{
            0: {items:1},
            800: {items:1},
            1000: {items:4}
        }
    });
    $(".owl2").owlCarousel({
        items: 3,
        dots: true,
        nav: true,
        margin: 100,
        responsive:{
            0: {items:1},
            800: {items:1},
            1000: {items:3}
        }
    });
    $(".owl3").owlCarousel({
        loop: true,
        nav: false,
        items: 7,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive:{
            0: {items:3},
            800: {items:3},
            1000: {items:7}
        }
    });
}); 

// animate home section in landing page 
$(document).ready(function () {
    $('h1').lettering();
    var tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 2000
    });
     tl.add({
         targets: 'h1 span',
         opacity: [0, 1],
         translateX: [100, 0],
         delay: anime.stagger(200)
     })
    .add({
        targets: '.home-txt-left h3',
        opacity: [0, 1],
        translateX: [100, 0],
        delay: anime.stagger(200)
    }, '-=2000')
    .add({
        targets: '.home-txt-left p',
        opacity: [0, 1],
        translateX: [100, 0],
        delay: anime.stagger(200)
    }, '-=1500')
    .add({
        targets: '.home-txt-left button',
        opacity: [0, 1],
        translateX: [100, 0],
        delay: anime.stagger(200)
    }, '-=1000')
    .add({
        targets: '.nav-img',
        translateY: [-100, 0],
        delay: anime.stagger(200)
    }, '-=2000')
    .add({
        targets: '.nav-link-element, nav .btn-full',
        translateY: [-100, 0],
        delay: anime.stagger(200)
    }, '-=1800');
});

// init aos to work
AOS.init();

// open/close pop up registration
console.log('hel')
var pop = document.getElementById('pop');
var reg = document.getElementById('reg');
var reg2 = document.getElementById('reg2');
var close = document.getElementById('close');

reg.addEventListener("click", () => {
    pop.style.display = 'flex';
});

reg2.addEventListener("click", () => {
    pop.style.display = 'flex';
});

close.addEventListener("click", () => {
    pop.style.display = 'none';
});