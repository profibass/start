$(function() {
 let logo = $('.logo');
 let logoHeight = logo.height(); // вычисляем высоту шапки
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    logo.addClass('logo_fixed');
    $('body').css({
       'paddingTop': logoHeight+'px' // делаем отступ у body, равный высоте шапки
    });
   } else {
    logo.removeClass('logo_fixed');
    $('body').css({
     'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    })
   }
 });
});