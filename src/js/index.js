$(document).ready(function() {
    $('.header-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 500,
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                vertical: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                vertical: false,
                autoplaySpeed: 400,
              }
            },
          ]
    })
})

let btn = document.querySelector('.mobile-menu')
let burger = document.querySelector('.mobile-btn')
let nav = document.querySelector('.header-nav')
let item = document.querySelectorAll('.header-nav-item')
let navActive = document.querySelector('.header-nav-mobile')

btn.addEventListener('click', function (e) {
    nav.classList.toggle('header-nav-mobile')
    burger.classList.toggle('mobile-btn-active')
    document.body.classList.toggle('body-scroll')
})

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function (e) {
        nav.classList.toggle('header-nav-mobile')
        burger.classList.toggle('mobile-btn-active')
        document.body.classList.toggle('body-scroll')
    })
}
