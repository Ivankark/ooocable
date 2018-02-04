//скрипт раскрывающийся список, используется в installation-split-systems.html
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
