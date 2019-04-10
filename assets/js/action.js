$(function () {
    'use strict';
    M.AutoInit();
    
    //Change Sidenav direction
    $('ul.sidenav').sidenav({
        edge: 'right'
    });
    
    //Make each a and button peventDefault
    
    $('ul li a').click(function (e) {
        e.preventDefault();
    });
    $('button').click(function (e) {
        e.preventDefault();
    });
    
    $(".animsition-overlay").animsition({
        loading: false,
    });
    
    function handler1() {
        $('section.photodiary .ads').css({transform: 'translateX(0)', display: 'block'});
        $(this).css({right: '21rem', transform: 'rotate(-180deg)'});
        $(".float a").attr("data-tooltip", "Without Ads");
        $("section.responsive .diary").removeClass("col-10").addClass("col-7");
        
        $(this).on("click", handler2);
    }

    function handler2() {
        $('section.photodiary .ads').css({transform: 'translateX(25rem)', display: 'none'});
        $(this).css({right: '0', transform: 'rotate(0deg)'});
        $(".float a").attr("data-tooltip", "With Ads");
        $("section.responsive .diary").removeClass("col-7").addClass("col-10");
        
        $(this).on("click", handler1);
    }
    $(".float").on("click", handler1);


    if ($(window).width() <= 770) {
        $("section.responsive>div>div").removeClass("col-7 left").addClass("col-10");
    }
});