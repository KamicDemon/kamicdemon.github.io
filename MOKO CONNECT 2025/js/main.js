$(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScoroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav',
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScoroll: 1,
        asNavFor: '.slider-for',
        
        centerMode: false,
        focusOnSelect: true,
    });

    $('.hamburger').on('click', function(){
        if($('#header').hasClass('open')){
            $('#header').removeClass('open');
        }else{
            $('#header').addClass('open');
        }
    });
    $('#mask').on('click', function(){
        $('#header').removeClass('open');
    });

    $("#ac-menu .label").on("click", function(){
        $(this).next().slideToggle();
        $(this).toggleClass("open");
    });
});












