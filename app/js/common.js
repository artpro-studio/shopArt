$(window).scroll(function () {
    $('.header').toggleClass('active', $(this).scrollTop() > 50);
});
$(function() {
    $('.new_service .item .title').on('click', function (e) {
        $(this).parents('.item').toggleClass('active');
        $(this).next().slideToggle();
    });




    $('.col h5').on('click', function () {
        $(this).parents('.col').toggleClass('active');
        $(this).next().slideToggle();
    });
    Notiflix.Notify.Init({
        fontFamily:"IBM Plex Sans",
        useIcon:false,
        closeButton:true,
        useGoogleFont:true,
        success: {
            background:'#041423',
            textColor:'#fff',
            childClassName:'success',
            notiflixIconColor:'rgba(255,255,255,255.2)',
            fontAwesomeClassName:'fas fa-shopping-cart',
            fontAwesomeIconColor:'rgba(25,255,255,0.2)',
            backOverlayColor:'rgba(50,198,130,0.2)',
        },
    });
    Notiflix.Notify.Success('Товар добавлен в корзину');
    // You can type your text in String format.Notiflix.Notify.Success('Sol lucet omnibus');
    $('.detail .preview a').on('click', function () {
        $('.detail .preview a').removeClass('active');
        $(this).addClass('active');
        let img = $(this).attr('attr-img');
        $(this).parents('.slider').find('.image img').attr('src', img);
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
    $('.js--delivery-type').change(function () {
        var $this = $(this);
        $('.js--deliveryType').removeClass('active');
        $('.js--deliveryType[data-type="' + $this.val() +'"]').addClass('active');
    });
    $('.js--payment-type').change(function () {
        var $this = $(this);
        $('.js--paymentType').removeClass('active');
        $('.js--paymentType[data-type="' + $this.val() +'"]').addClass('active');
    });
    $(document).ready(function () {
        updateDetailSliders();
        $(window).resize(function () {
            updateDetailSliders();
        });
    });
});

function updateDetailSliders() {
    var windowWidth = $(window).width();
    var $items = $('.js--detail-items');
    $items.filter('.slick-initialized').slick('unslick');

    $items.each(function () {
        var $this= $(this);

        var elementCount = $this.find('.detail__row-item').length;
        if (windowWidth > 1024) {
            $this.slick({
                arrows: false,
                slidesToShow: elementCount < 4 ? elementCount : 4,
            });
        } else if (windowWidth > 820) {
            $this.slick({
                arrows: false,
                slidesToShow: elementCount < 3 ? elementCount : 3,
            });
        } else if (windowWidth > 650) {
            $this.slick({
                arrows: false,
                slidesToShow: elementCount < 2 ? elementCount : 2,
            });
        } else {
            $this.slick({
                arrows: false,
                slidesToShow: 1,
                centerMode:true,
                centerPadding: '35px',
            })
        }
    });

    var $preview = $('.js--preview');
    $preview.filter('.slick-initialized').slick('unslick');
    if (windowWidth <= 650) {
        $preview.slick({
            arrows: false,
            slidesToShow: 1,
            centerMode:true,
            centerPadding: '15px',
        })
    }
}
