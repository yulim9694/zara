$(function(){
    // scrolltrigger
    gsap.registerPlugin(ScrollTrigger);



    // header nav
    $(window).resize(function(){
        if (window.innerWidth < 1025){
            // 모바일,태블릿
            $('header .nav_btn').click(function(){
                $(this).toggleClass("active");
                $('nav').toggleClass("show");
            });
            $('.gnb li').click(function(){
                $('.gnb li').removeClass("active");
                $(this).addClass("active");
        
                const index = $(this).index();
        
                $('.lnb > ul').removeClass("active").hide();
                $('.lnb > ul').eq(index).addClass("active").show();
            });
        } else {
            // 데스크탑
            $('.gnb.pc > li').mouseenter(function () {
                const index = $(this).index();

                $('header nav').stop(true, true).slideDown(300);

                $('.gnb.pc > li').removeClass('active');
                $(this).addClass('active');

                $('.lnb > ul').removeClass('active').hide();
                $('.lnb > ul').eq(index).addClass('active').show();
            });

            $('header').mouseleave(function () {
                $('header nav').stop(true, true).slideUp(300);
                $('.gnb.pc > li').removeClass('active');
            });
        }
    }).resize();
    

    let prevWidth = window.innerWidth;

    $(window).on('resize', function () {
        let currentWidth = window.innerWidth;

        // 모바일과 데스크탑 경계인 1025px 기준
        if (
            (prevWidth < 1025 && currentWidth >= 1025) || 
            (prevWidth >= 1025 && currentWidth < 1025)
        ) {
            location.reload();
        }

        prevWidth = currentWidth; // 현재 값을 저장
    });

    // con2 : 스크롤에 따라 텍스트 컬러 채우기
    gsap.fromTo('#con2 .text_box .mask .text', {
        'background-size':'0% 100%'
    },{
        'background-size':'100% 100%',
        scrollTrigger: {
            trigger: '#con2 .text_box',
            pinnedContainer: '#con2 .text_box',
            start: '0% 60%',
            end: '100% 50%',
            scrub: 1,
            // markers: true
        }
    });
    gsap.fromTo('#con2 .text_box', {
        yPercent: 0
    },{
        yPercent: -50,
        scrollTrigger: {
            trigger: '#con2',
            pinnedContainer: '#con2',
            start: '0% 60%',
            end: '100% 30%',
            scrub: 1,
            // markers: true
        }
    });
    
    // footer 아코디언 메뉴
    
    $("footer .footer_menu .head").click(function(){
        if (window.innerWidth <= 1024) {
            let $this = $(this);
            let $list = $this.siblings('.list');
            let $icon = $this.find('.icon');
    
            $('footer .footer_menu .list').not($list).slideUp(300);
            $('footer .footer_menu .head .icon').not($icon).removeClass("rotate");
    
            $list.slideToggle(300);
            $icon.toggleClass("rotate");
        }
    });
    
    $("footer .footer_menu .list li, footer .footer_menu .list a").click(function(){
        if (window.innerWidth <= 1024) {
            $("footer .footer_menu .list").slideUp(300);
            $("footer .footer_menu .head .icon").removeClass("rotate");
        }
    });

});