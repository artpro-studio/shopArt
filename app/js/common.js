$(function() {
    $('.detail .preview a').on('click', function () {
        $('.detail .preview a').removeClass('active');
        $(this).addClass('active');
        let img = $(this).attr('attr-img');
        $(this).parents('.slider').find('.image').css('background-image', 'url("'+ img +'")');
    });

    $('.detail .tabs a').on('click', function () {
        $('.detail .tabs a').removeClass('active');
        $(this).addClass('active');
        let idTab = $(this).attr('attr-tab');
        $('.detail .tab').removeClass('active');
        $(`.detail .tab.tab${idTab}`).addClass('active');
    });

    $('.selects .placeholder').on('click', function () {
        if($(this).parents('.selects').hasClass('active')){
            $(this).parents('.selects').removeClass('active');
        }else{
            $('.selects').removeClass('active');
            $(this).parents('.selects').addClass('active');
        }
    });
    $('.selects li').on('click', function () {
        let id = $(this).attr('attr-id'),
        text = $(this).text();
        $(this).parents('.selects').find('.placeholder').text(text).attr('attr-id',id);
        $(this).parents('.selects').removeClass('active');
    });

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
    $('.grid').masonry({
        percentPosition: true,
        itemSelector: '.grid-item',
        horizontalOrder: true
    });
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
