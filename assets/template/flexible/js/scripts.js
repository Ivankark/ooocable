//скрипт от блока верхнего меню на всех страницах
        $(function() {
            var pull = $('#pull');
                menu = $('nav ul');
                menuHeight = menu.height();

            $(pull).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
            });
/*
            $(window).resize(function(){
                var w = $(window).width();
                if(w > 767 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });*/
        });


//скрипт от блока вкладок (серии) на страницах товаров

$(document).ready(function(){
    $('#anchor-link-1 .tabsPages li').click(function(){
        $('#anchor-link-1 .tabsPages li').removeClass('activePages');
        $(this).addClass('activePages');
         
        var num_active = $('#anchor-link-1 .tabsPages').find('.activePages').index();
        $('#anchor-link-1 section').removeClass('activePages');
        $('#anchor-link-1 section').eq(num_active).addClass('activePages');
    }); 
});

//конец

//скрипт раскрывающийся список
$(document).ready(function() {
      $("a.trigger").toggle(function() {
        $(this).next().fadeIn();
        return false;
      },
      function() {
        $(this).next().fadeOut();
        return false;
      });
      });

//конец

//скрипт от блоков с раскрывающимся контентом на страницах товаров и главной
function initSpoilers(context)
{
    var context = context || 'body';
    $('a.spoiler', $(context))
        .click(function(){
            $(this).toggleClass('unfolded');
            $(this).prev('p.spoiler-box').slideToggle('normal');
        });
}

$(document).ready(function(){
    initSpoilers('body');
});



//скрипт от блока "почему мы"

$(document).ready(function(){
    $('.kiptab li').click(function(){
        $('.kiptab li').removeClass('active');
        $(this).addClass('active');
         
        var num_active = $('.kiptab').find('.active').index();
        $('.kiptab_divs div.tab-main-content').removeClass('active');
        $('.kiptab_divs div.tab-main-content').eq(num_active).addClass('active');
    }); 
});
