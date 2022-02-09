$(document).ready(
    () => {
        
        $(window).scroll(function() {

            var $window = $(window);
            var $body = $('body');
            var $panel = $('.panel');

            var scroll = $window.scrollTop() + ($window.height() / 3);

            $panel.each(function() {
                var $this = $(this);

                if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                    $body.removeClass(function (index, css) {
                        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
                      });
                       
                      // Add class of currently active div
                      $body.addClass('color-' + $(this).data('color'));
                      
                }

            })

        }).scroll();
    });