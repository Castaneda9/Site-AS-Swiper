document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper ('.showcase-carousel', {
        loop: true, // ставим или не ставим цикличность в прокрутке слайдов//
        slidesPerView: 3,
        speed: 1900,
        centeredSlides: true,  // делаем активный элемент по центру //
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev',
        }
    })

 document.querySelector('video').playbackRate = 2
 })
