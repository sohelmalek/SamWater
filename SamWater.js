/* ----dark light mode ON OFF SCRIPT---------------------------------------------- */

const darkBtn = document.querySelector('.fas');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark')
}

darkBtn.addEventListener('click', () => {
    // Get the value of the "dark" item from the local storage on every click
    setDarkMode = localStorage.getItem('dark');

    if (setDarkMode !== "on") {
        darkMode();
        // Set the value of the itwm to "on" when dark mode is on
        setDarkMode = localStorage.setItem('dark', 'on');
    } else {
        darkMode();
        // Set the value of the item to  "null" when dark mode if off
        setDarkMode = localStorage.setItem('dark', null);
    }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if (setDarkMode === 'on') {
    darkMode();
}
/* ----dark light mode ON OFF SCRIPT END---------------------------------------------- */

// ----------go to top -------------------------------------------------------------------------
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// ----------go to top -------------------------------------------------------------------------

// ----------------------navbar dropdown animation-------------------------------------------------------------------
(function($) {
    var defaults = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        navbar_expand: 'lg',
        animation: true,
        animateIn: 'fadeInUp',
        animation_duraion: '5s',
    };
    $.fn.bootnavbar = function(options) {

        var screen_width = $(document).width();
        settings = $.extend(defaults, options);

        if (screen_width >= settings.lg) {
            $(this).find('.dropdown').hover(function() {
                $(this).addClass('show');
                $(this).find('.dropdown-menu').first().addClass('show');
                if (settings.animation) {
                    $(this).find('.dropdown-menu').first().addClass('animated ' + settings.animateIn);
                }
            }, function() {
                $(this).removeClass('show');
                $(this).find('.dropdown-menu').first().removeClass('show');
            });
        }

        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

            return false;
        });
    };
})(jQuery);
// ---------navbar  scroll animation END-------------------------------------------------------------------


var navbar = $(".navbar");
var sohel = $(".sohel");
var mob_nav = $(".Mobile_navbar");
$(document).ready(function() {
    $(".sohel").add.attr
    $(function() {
        navbar.addClass("h_80px", 2000);
        // $(".nav-item a").removeClass("text-white");

        $(window).on("scroll", function() {

            if ($(window).scrollTop() > 50) {

                // $(".nav-item a").removeClass("text-white");

                $(".main_nav").addClass("active1");
                navbar.addClass("h_50px");
                navbar.removeClass("h_80px");

                navbar.removeClass("px-1");
                navbar.removeClass("py-3");

                mob_nav.addClass("h_50px");
                mob_nav.removeClass("h_80px");
                $(".main_nav").css('box-shadow', '0px 1px 20px #9099ff');
                // $(".navbar a, .navbar_brand").removeClass("text-white", 2000);
                // $(".navbar a, .navbar_brand").addClass("text-white", 2000);
                $(".navbar_brand span:nth-child(4)").css({

                    display: "none",
                    transition: ".7s"
                });
                $(".navbar_brand span:nth-child(2)").css({
                    display: "none",
                    transition: ".7s"
                });




                //$(".sohel").removeClass("sohel1");

                //$(".sohel").addClass("sohel1");



                $(".navbar_brand span:nth-child(1)").css({
                    fontSize: "50px",
                    transition: ".7s"
                }, "slow");
                $(".navbar_brand span:nth-child(3)").css({
                    fontSize: "50px",
                    transition: ".7s"
                }, "slow");



            } else {

                //$(".sohel").addClass("sohel1");
                //$(".sohel").removeClass("sohel1");



                //remove the background property so it comes transparent again (defined in your css)
                $(".main_nav").removeClass("active1");
                // $(".nav-item a").removeClass("text-white");

                navbar.addClass("px-1");
                navbar.addClass("py-3");


                navbar.removeClass("h_50px");
                navbar.addClass("h_80px", 2000);
                mob_nav.removeClass("h_50px");
                mob_nav.addClass("h_80px", 2000);
                $(".main_nav").css('box-shadow', 'none');
                // $(".navbar a, .navbar_brand").addClass("text-white", 2000);
                // $(".navbar a, .navbar_brand").removeClass("text-white", 2000);
                $(".navbar_brand span:nth-child(2)").css({
                    display: "block",
                    transition: ".7s"
                }, "slow");
                $(".navbar_brand span:nth-child(4)").css({
                    display: "block",
                    transition: ".7s"
                }, "slow");



                $(".navbar_brand span:nth-child(1)").css({
                    fontSize: "25px",
                    // transform: 'translate(0px, 0px)',
                    // opacity: '1',
                    transition: ".7s"
                }, "slow");
                $(".navbar_brand span:nth-child(3)").css({
                    fontSize: "25px",
                    // transform: 'translate(0px, 0px)',
                    // opacity: '1',
                    transition: ".7s"
                }, "slow");



                // $(".malek::first-letter").css({
                //     transform: 'translate(0px, 0px)',
                //     opacity: '1',
                //     transition: ".7s"
                // }, "slow");



            }

        });
    });

});
// <!-------------navbar menu scroll animation END---------------------------------------------->