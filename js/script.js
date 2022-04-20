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