$(document).ready(function() {
        /* Scroll event handler */
        $(window).bind('scroll', function(e) {
            parallaxScroll();
        });
    });

    /* Scroll the background layers */
    function parallaxScroll() {
        var scrolled = $(window).scrollTop();
        $('#parallax-bg1').css('top', (0 - (scrolled * -0.145)) + 'vh');
        $('#parallax-bg2').css('top', (0 - (scrolled * 0.1)) + 'vh');
        $('#parallax-bg3').css('top', (0 - (scrolled * 0.19)) + 'vh');
    }

