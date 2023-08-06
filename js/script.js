$(function() {
    let header = $('.menu');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function() {
        if ($(this).scrollTop() >199) {
            header.addClass('header_fixed');
            $('body').css({
                'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
            });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
            })
        }

        if ($(this).scrollTop() > 300) {
            header.css({
                'padding': '5px 0',
                'transition': '.3s'
            });
        } else {
            header.css({
                'padding': '15px 0',
                'transition': '.3s'
            });
        }


        if ($(this).scrollTop() > 500) {
            mobileTel.fadeOut();
        } else {
            mobileTel.fadeIn();
        }
    });
});