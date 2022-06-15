window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
}

$(document).ready(function () {

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $('.section').each((i, el) => {
            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });
                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }
        });

    });

});

$("a[href^='#']").click(function () {
    let valHref = $(this).attr("href");
    $("html, body").animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});