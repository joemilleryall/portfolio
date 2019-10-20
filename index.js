$(document).ready(function () {

    $('.nav-list').localScroll();
    $('.upScroll').localScroll();

    AOS.init({
        easing: 'ease',
        duration: 1800, 
        once:true
    })

    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

});