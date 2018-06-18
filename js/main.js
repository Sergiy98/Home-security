$(window).scroll(function () {
    var st = $(this).scrollTop();

    $(".parallax img").css({
       "transform" : "translate(0%, -" + st /20 + "%"
    });
});