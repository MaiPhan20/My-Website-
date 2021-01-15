/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';
/* scroll to hide header top and click button to scroll top*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        $(".header_top_under_caption,.logo_mobile").css({ top: '0px' });
        $(".humberger__open").css({ top: '5px' });
        $(".btn_scroll_up").css({ display: 'block' });
    } else {
        $(".header_top_under_caption,.logo_mobile").css({ top: '35px' });
        $(".humberger__open").css({ top: '40px' });
        $(".btn_scroll_up").css({ display: 'none' });
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

/*--------------
       Click to wish list number
       --------------- */
var wish_number = 0;
$(".wishlist, .wishlist2").click(function () {
    if ($(this).css("opacity")==="0.1") {
        wish_number ++;
        $("#wish_list_number_nav").append(function () {
            return "<span>" + wish_number +"</span>"
        });
        $("#wish_list_number_mobile").append(function () {
            return "<span>" + wish_number +"</span>"
        });
        $(this).css('opacity','1');
    }
    else{
        if(wish_number===1){
        wish_number--;
        $("#wish_list_number_nav > span").remove();
        $("#wish_list_number_mobile > span").remove();
        $(this).css("opacity","0.1")
    }
        else if (wish_number>1){
            wish_number--;
            $("#wish_list_number_nav").append(function () {
                return "<span>" + wish_number +"</span>"
            });
            $("#wish_list_number_mobile").append(function () {
                return "<span>" + wish_number +"</span>"});
            $(this).css("opacity","0.1")
        }
    }
});

/*--------------
       Click to cart number
       --------------- */
var cart_number = 0;
$("#clickbutton button:first-child, .buttoncart").click(function () {
    cart_number ++;
    $("#shop_cart_number_nav").append(function () {
        return "<span>" + cart_number +"</span>" ;
    });
    $("#shop_cart_number_mobile").append(function () {
        return "<span>" + cart_number +"</span>" ;
    });
});
/*--------------
       Click to compare number
       --------------- */
var compare_number = 0;
$("#clickbutton button:last-child").click(function () {
    compare_number =1;
    $("#compare_number_nav").append(function () {
        return "<span>" + compare_number +"</span>" ;
    });
    $("#compare_number_mobile").append(function () {
        return "<span>" + compare_number +"</span>" ;
    });
});

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        };
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });


    $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
    });

    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            }
        }
    });

    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/
    $('.product__details__pic__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

})(jQuery);

$('#PreviewImage').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: false,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 3
        },
        576:{
            items: 4
        },
        768:{
            items: 4
        },
        992: {
            items: 5
        },
        1200: {
            items: 5
        }
    }
})

$(window).on("load",function () {
    $('div.owl-item:first-of-type').children().css('border','1px solid black');
})

$('.owl-item').click(function () {
    var n = $(this).children().html()
    $('.SPChitiet').html(n);
    $('.owl-item').children().css('border','');
    $(this).children().css('border','1px solid black');
})
var compare = $('#compare_number_nav span').text()
$('div.compareimg svg.delete1').click(function () {
    $('div.sp1').hide();
    if(compare==='2'){
        $('#compare_number_nav span').remove();
        $('#compare_number_nav').append("<span>1</span>");
        compare = $('#compare_number_nav span').text();
    }
    else if(compare==='1'){
        $('#compare_number_nav span').remove();}
})
$('div.compareimg svg.delete2').click(function () {
    $('div.sp2').hide();
    if(compare==='2'){
        $('#compare_number_nav span').remove();
        $('#compare_number_nav').append("<span>1</span>");
        compare = $('#compare_number_nav span').text();
    }
    else if(compare==='1')
        $('#compare_number_nav span').remove();
})