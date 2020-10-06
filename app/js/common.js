$(function() {
    $('.openSearch').on('click', function () {
        $('.search').toggleClass('active')
    });
    $('.js--main-banner').slick({
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        dots: true,
        dotsClass: 'main-banner--dots'
    });
});
