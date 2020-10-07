$(function() {
    $('.openSearch').on('click', function () {
        $('.search').toggleClass('active')
    });
    $('.burger').on('click',function () {
        $('.mobile_menu').toggleClass('active');
    });
    $('.mobile_menu .close').on('click',function () {
        $('.mobile_menu').toggleClass('active');
    });
    $('.js--main-banner').slick({
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        dots: true,
        dotsClass: 'main-banner--dots'
    });
});
