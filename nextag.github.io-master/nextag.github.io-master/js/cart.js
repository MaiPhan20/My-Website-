//total

var quantity1 = Number($('#count1 input.quantity').val());
var discount1 = 0.9;
var unit1 = Number($('#count1 span.unit').text());

var quantity2 = Number($('#count2 input.quantity').val());
var discount2 = 0.9;
var unit2 = Number($('#count2 span.unit').text());

var total1;
var total2;
var subtotal;
var cartnum;
$(document).ready(function () {
    total1 = quantity1 * unit1 * discount1;
    $('#count1 span.subtotal').text(total1);
    total2 = quantity2 * unit2 * discount2;
    $('#count2 span.subtotal').text(total2);
    subtotal = total1 + total2;
    cartnum = quantity1+quantity2;
    $('th.subtotal2 span, th.total span').text(subtotal);
    $("#shop_cart_number_nav").append(function () {
        return "<span>" + cartnum +"</span>"}) ;
})

$('#count1 input,#count2 input').on('keyup change click' ,function () {
    quantity1 = Number($('#count1 input').val());
    quantity2 = Number($('#count2 input').val());
    total1 = quantity1 * unit1 * discount1;
    total2 = quantity2 * unit2 * discount2;
    $('#count1 span.subtotal').text(total1);
    $('#count2 span.subtotal').text(total2);
    subtotal = total1+total2;
    cartnum=quantity1+quantity2;
    $('th.subtotal2 span, th.total span').text(subtotal);
    $("#shop_cart_number_nav").append(function () {
        return "<span>" + cartnum +"</span>"}) ;
})
var cart = $("#shop_cart_number_nav span").text();
var cart_number=Number(cart);
//trash
$("i.fa-trash-o").click(function () {
    var number = $(this).parent().parent().siblings().children('.subtotal').text();
    subtotal = subtotal - number;
    $('th.subtotal2 span, th.total span').text(subtotal);
    $(this).parents("tr").remove();
    cart_number = cart_number - 1;
    if(cart_number===0){
        $("#shop_cart_number_nav span").remove();
    }
    else{
        $("#shop_cart_number_nav span").text(cart_number);
    }
})






