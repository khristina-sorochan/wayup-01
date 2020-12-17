// alert("Привет, мир!");

$(function () {
    $(window).scroll(function() {
        $('.section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.item').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInDown");
            }
        });
    });
    $(window).scroll(function() {
        $('.form').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__headShake");
            }
        });
    });
});
