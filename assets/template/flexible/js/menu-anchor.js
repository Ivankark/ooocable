//скрипт "плавный якорь" нужно устанавливать только на той странице где непосредственно 
// будут внутренние переходы. Не работает внутренний переход на внешние страницы. 
// Установлен только на главной странице сайта.
 $(document).ready(function(){
    $("#menu-anchor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1300);
    });
});
