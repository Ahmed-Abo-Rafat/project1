
$(document).ready(function(){

    "use strict";

    // Add Header Height

    var myHeader = $("header");
    var myLayout = $(".layout");

    //this width and height header
    myHeader.height($(window).height());


    $(window).resize(function(){
        //this rize belong to header
        myHeader.height($(window).height());

        myLayout.each(function(){
            $(this).css('paddingTop', ($(window).height() - myLayout.height()) / 2);
        })
    })

    $('.menue li a').click(function (){
        $(this).parent().addClass('active').siblings().removeClass('active');
    })

    myLayout.each(function(){
        $(this).css('paddingTop', ($(window).height() - myLayout.height()) / 2);
    })

    //Triger the bxslider
    $('.slider').bxSlider({
        pager: false
    });

    //Triger the nice scroll
    $("html").niceScroll({
        cursorcolor: "#19bd9b",
        cursorwidth: "8px",
        cursorborder: "1px solid #19bd9b"
    }); 

});