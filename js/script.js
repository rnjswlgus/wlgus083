window.onload = function() {};
$(document).ready(function() {
    AOS.init();

    // 위로가기 기능
    $('.go-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        });
    });

    // 모바일 메뉴 관련
    let navi = $('.navi');
    let menubtn = $('.menubtn');

    menubtn.click(function(){
        navi.FadeIn();
    });

     // 주메뉴 fadeout
    let header = $('.header');
    $(window).scroll(function () {
        let scrollbar = $(window).scrollTop();
        // console.log(scrollbar);
        if (scrollbar > 100) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }
    });


    // 주메뉴 이동
    var moveEl = $('.move');
    $.each(moveEl, function () {
        $(this).click(function (e) {
            e.preventDefault();
            var tg = $(this).attr('href');
            var num;
            if (tg == '#') {
                num = 0;
            } else {
                num = $(tg).offset().top;
            }
            $('html, body').stop().animate({
                scrollTop: num
            }, 800);
        });
    });
    
    //퍼블리싱-swiper
    var swi_pub = new Swiper('.swi-pub', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 800,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
    });

    $('.sw-red').mouseenter(function() {
        sw_red.autoplay.stop();
    });
    $('.swi-red').mouseleave(function() {
        sw_red.autoplay.start();
    });



    //리디자인-swiper
    var sw_red = new Swiper('.sw-red', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 800,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
    });

    $('.swi-pub').mouseenter(function() {
        swi_pub.autoplay.stop();
    });
    $('.swi-pub').mouseleave(function() {
        swi_pub.autoplay.start();
    });

    let rede_view_a = $('.rede-view a');
    $.each(rede_view_a, function(index, item) {
        $(this).click(function(e) {
            // href 막기
            e.preventDefault();
            sw_red.slideTo(index + 1);
        });
    });

    // 디자인더보기 모달창
    var moreClose = $('.more_close');
    var moreWrap = $('.more_modal_wrap');
    var moreConImg = $('.more_con img');

    var imgUrlList = [];

    $('.more_gnb, .more_modal_box').click(function(e){
        e.stopPropagation();
    });
    moreWrap.click(function(e) {
        moreWrap.hide();
        $('html, body').css('overflow-x', 'hidden');
        $('html, body').css('overflow-y', 'auto');
    });
    moreClose.click(function() {
        moreWrap.hide();
        $('html, body').css('overflow-x', 'hidden');
        $('html, body').css('overflow-y', 'auto');
    });

    var moreBox = $('.more_box');
    var moreBoxIndex = 0;
    var moreBoxTotal = 0;
    $('.more_prev').click(function(e){
        e.preventDefault();
        moreBoxIndex--;
        if(moreBoxIndex < 0) {
            moreBoxIndex = moreBoxTotal - 1;
        }
        var url = imgUrlList[moreBoxIndex];
        moreConImg.attr('src', url);
        $('.more_con').scrollTop(0);
    });

    $('.more_next').click(function(e){
        e.preventDefault();
        moreBoxIndex++;
        if(moreBoxIndex > moreBoxTotal - 1) {
            moreBoxIndex = 0;
        }
        var url = imgUrlList[moreBoxIndex];
        moreConImg.attr('src', url);
        $('.more_con').scrollTop(0);
    });

    $.each(moreBox, function(index, item) {
        var imgUrl = $(this).attr('data-url');
        if(imgUrl != undefined) {
            imgUrlList.push(imgUrl);
        }
        moreBoxTotal = imgUrlList.length;
        
        $(this).click(function(e) {
            e.preventDefault();

            var url = imgUrlList[index];
            if (url != undefined) {
                moreBoxIndex = index;
                moreConImg.attr('src', url);
                moreWrap.show();
                $('html, body').css('overflow', 'hidden');
            }

        });
    });


});