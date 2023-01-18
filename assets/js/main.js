AOS.init();

AOS.init({
    offset: 120,
    delay: 0,
    duration: 700,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

// Do not repeat the aos animation when scrolling again
window.addEventListener('scroll', function () {
    const x = document.querySelectorAll(".aos-init");
    for (let i = 0; i < x.length; i++) {
        if (x[i].classList.contains('aos-animate')) {
            x[i].dataset.aos = '';
        }
    }
});