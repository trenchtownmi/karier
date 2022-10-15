$(function () {
    $('.main__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1330,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
    ScrollReveal().reveal('.header', {
        reset: true,
        // scale: 0.5,
        distance: '100px',
        origin: 'top',
    });
    ScrollReveal().reveal('article', {
        reset: true,
        // scale: 0.5,
        distance: '100px',
        origin: 'bottom',
    });
    ScrollReveal().reveal('.wellcome', {
        reset: true,
        // scale: 0.5,
        distance: '-100px',
        origin: 'right',
    });
    ScrollReveal().reveal('.gallary', {
        reset: true,
        // scale: 0.5,
        distance: '100px',
        origin: 'bottom',
    });
    ScrollReveal().reveal('.map', {
        reset: true,
        // scale: 0.5,
        distance: '100px',
        origin: 'top',
    });
    ScrollReveal().reveal('.footer', {
        reset: true,
        // scale: 0.5,
        distance: '-100px',
        origin: 'right',
    });

    $('.menu_btn').on('click', function () {
        $('.menu').addClass('active');
    });
    $('.menu_close').on('click', function () {
        $('.menu').removeClass('active');
    });
})


// аккордеон

$(document).ready(function () {
    $('.accordion_title').click(function (event) {
        if ($('.accordion').hasClass('one')) {
            $('.accordion_title').not($(this)).removeClass('active');
            $('.accordion_text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

/* <div class="accordion one">
    <div class="accordion_item">
        <h3 class="accordion_title"> Опен бля</h3>
        <p class="accordion_text">Саламалйеум ьояяяываывар ывапры воап ывоа ыва ыпа оывп</p>
    </div>
    <div class="accordion_item">
        <h3 class="accordion_title"> Опен бля</h3>
        <p class="accordion_text">Саламалйеум ьояяяываывар ывапры воап ывоа ыва ыпа оывп</p>
    </div>
    <div class="accordion_item">
        <h3 class="accordion_title"> Опен бля</h3>
        <p class="accordion_text">Саламалйеум ьояяяываывар ывапры воап ывоа ыва ыпа оывп</p>
    </div>
</div> */