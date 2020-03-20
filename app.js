$(function () {
    $('.nav1').click(function (e) { 
        e.preventDefault();
        $('.nav1').removeClass('active');
        $(this).addClass('active');
    });

    $('.n1').click(function (e) { 
        e.preventDefault();

        $('body').animate({
            scrollTop: $('header').offset().top
        },1000)
        
    });

    $('.n2').click(function (e) { 
        e.preventDefault();

        $('body').animate({
            scrollTop: $('.khoi2').offset().top
        },1000)
        
    });

    $('.n3').click(function (e) { 
        e.preventDefault();

        $('body').animate({
            scrollTop: $('.khoi3').offset().top
        },1000)
        
    });

    $('.n4').click(function (e) { 
        e.preventDefault();

        $('body').animate({
            scrollTop: $('.khoi4').offset().top
        },1000)
        
    });

    $('.n5').click(function (e) { 
        e.preventDefault();

        $('body').animate({
            scrollTop: $('.khoi5').offset().top
        },1000)
        
    });

    $('.n6').click(function (e) { 
        e.preventDefault();

        $('body').animate({
            scrollTop: $('.khoi6').offset().top
        },1000)
        
    });

    $('.mauxanh').click(function (e) { 
        e.preventDefault();
        $('body').addClass('xanh');
        $('body').removeClass('vang');
    });

    $('.mauvang').click(function (e) { 
        e.preventDefault();
        $('body').addClass('vang');
        $('body').removeClass('xanh');
    });

    $('.maucam').click(function (e) { 
        e.preventDefault();
        $('body').removeClass('vang');
        $('body').removeClass('xanh');
    });

    
    $(window).scroll(function () { 
        
        if (window.pageYOffset >= 200) {
            $('.backtotop').addClass('hienra');
        } else { 
            $('.backtotop').removeClass('hienra');
        }

    });

    
    $('.backtotop').click(function (e) { 
        e.preventDefault();

        $('body').animate({
            scrollTop: 0
        }, 1000);
        
    });   

    $(window).scroll(function () { 

        if (window.pageYOffset >= ($('.khoi4').offset().top-72)) {
            $('.nav1').removeClass('active');
            $('.n4').addClass('active');
        } else if (window.pageYOffset >= ($('.khoi3').offset().top-72)) {
            $('.nav1').removeClass('active');
            $('.n3').addClass('active');
        } else if (window.pageYOffset >= ($('.khoi2').offset().top-72)) {
            $('.nav1').removeClass('active');
            $('.n2').addClass('active');
        } else if (window.pageYOffset >= ($('header').offset().top-72)) {
            $('.nav1').removeClass('active');
            $('.n1').addClass('active');
        } else {
            $('.nav1').removeClass('active'); }

    });
    
});