$(function() {
    $('.mobile_touch .search a').on('click', function () {
        $('.mobile_touch .search').toggleClass('active')
    });
    $('.mobile_touch .search .close').on('click', function () {
        $('.mobile_touch .search').toggleClass('active')
    });
    $('.burger').on('click',function () {
        $('.mobile_menu').toggleClass('active');
    });
    $('.mobile_menu .close').on('click',function () {
        $('.mobile_menu').toggleClass('active');
    });
    $('.filter_button').on('click', function () {
        $(this).toggleClass('active');
        $('.filter form').slideToggle();
    });
    // $('.catalog_products').masonry({
    //     columnWidth: 200,
    //     itemSelector: '.grid-item'
    // });
    $('.js--main-banner').slick({
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        dots: true,
        dotsClass: 'main-banner__dots'
    });
    $('.js--main-works__items').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 651,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    prevArrow: '',
                    nextArrow: 	'<button class="next-arrow"></button>'
            }
            },
        ]
    });
    $('.js--main-collection').slick({
        arrows: true,
        prevArrow: '.prev-arrow',
        nextArrow: '.next-arrow'
    });
});
