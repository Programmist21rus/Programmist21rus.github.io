window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
}

$(document).ready(function () {

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $('.section').each((i, el) => {
            if ($(el).offset().top - ($('nav').outerHeight() * 3) <= scrollDistance) {
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

function calculate() {
    let day = 0;
    let cost = 0;
    let select = document.getElementById('list1');
    let select1 = document.getElementById('list2');
    let select2 = document.getElementById('list3');
    if(select.value === "Opt1") {
        day += 1;
        cost += 1000;
    }

    else if(select.value === "Opt2") {
        day += 2;
        cost += 2000;
    }

    else {
        day += 3;
        cost += 3000;
    }

    if(select1.value === "Opt1") {
        day += 1;
        cost += 1000;
    }

    else if(select1.value === "Opt2") {
        day += 2;
        cost += 2000;
    }

    else {
        day += 3;
        cost += 3000;
    }

    if(select2.value === "Opt1") {
        day += 1;
        cost += 1000;
    }

    else if(select2.value === "Opt2") {
        day += 2;
        cost += 2000;
    }

    else {
        day += 3;
        cost += 3000;
    }

    if(!select.value || !select1.value || !select2.value) {
        alert("Введите все пункты!!!");
    }
    else {
        document.getElementById("day").innerHTML = day;
        document.getElementById("cost").innerHTML = cost;
    }
}
