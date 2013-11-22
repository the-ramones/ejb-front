/* 
 * Custom JS, Retail Store
 */

/* Support */
$("#slist a").click(function(e) {
    e.preventDefault();
    $(this).next("p").toggle(200);
    return false;
});

$("#categories-menu li.has-sub").click(function() {
    $(this).find("ul").each(function() {
        $(this).slideToggle();
    });
    $(this).find("span").toggleClass("glyphicon-plus-sign").toggleClass("glyphicon-minus-sign");
});

$(document).ready(function() {

    $(".totop").hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('.totop').slideDown();
        } else {
            $('.totop').slideUp();
        }
    });

    $('.totop a').click(function(e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 500);
    });
});


