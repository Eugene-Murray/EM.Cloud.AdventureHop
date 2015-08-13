define(['knockout', 'text!shared/header.html'], function(ko, templateString) {

    function Header(params) {

        $(function() {

            /* --------------- 14. Shift Correct : prevent shifting of the page due to the scrollbar when a slide is active --------------- */
            if ($(document).height() > $(window).height()) {
                $('body').addClass('body-scroll-fix');
            }


            /* --------------- 15. Data Slide --------------- */
            $('[data-slide="slide"]').click(function(e) {

                //DEMO ONLY
                if ($('html').is('.open-switcher')) {
                    $("html").removeClass("open-switcher");
                    $(".theme-switcher-toggle i").addClass("fa-spin");
                    $(".theme-switcher-toggle").removeClass('active-slide-btn');
                }

                var $this = $(this);
                var target = $this.attr('data-target');
                var $target = $(target);
                if ($('.slide-panel-parent').children().is('.open')) {
                    $('.open').not(target).removeClass('open');
                    $('.active-slide-btn').not(this).removeClass('active-slide-btn');
                    $(this).toggleClass('active-slide-btn');
                    $(target).toggleClass('open');
                    $('html').removeClass('slide-active');
                }
                else {
                    $(target).toggleClass('open');
                    $(this).toggleClass('active-slide-btn');
                    $('#page').toggleClass('page-off');
                }

                if ($('.slide-panel-parent').children().is('.open')) {
                    $('html').addClass('slide-active'); //was addClass

                }
                else {
                    $('html').removeClass('slide-active');

                }

                e.preventDefault();
            });

        

        });


    }

    return {
        template: templateString,
        viewModel: Header
    };
});