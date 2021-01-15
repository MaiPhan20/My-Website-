// filter button display filter medium/small screen
$(".btn_filter").on('click', function () {
    $(".menu_filter_wraper").addClass("show__humberger__menu__wrapper");
    $(".humberger__menu__overlay").addClass("active");
    $("body").addClass("over_hid");
    $(".btn_filter").addClass("btn_filter_zindex");

});

$(".humberger__menu__overlay").on('click', function () {
    $(".menu_filter_wraper").removeClass("show__humberger__menu__wrapper");
    $(".humberger__menu__overlay").removeClass("active");
    $("body").removeClass("over_hid");
    $(".btn_filter").removeClass("btn_filter_zindex");
});

//filter brand
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        if(value === "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

/*--------------
       Click to cart number
       --------------- */
var cart_number = 0;
$(".btn_add_cart").click(function () {
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
$(".btn_add_compare").click(function () {
    compare_number ++;
    $("#compare_number_nav").append(function () {
        return "<span>" + compare_number +"</span>" ;
    });
    $("#compare_number_mobile").append(function () {
        return "<span>" + compare_number +"</span>" ;
    });
});