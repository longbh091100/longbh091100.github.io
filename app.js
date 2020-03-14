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

    // console.log($('.khoi2').offset().top);

    // $('body').animate({
    //     scrollTop: 1000
    // }, 1000);

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

});