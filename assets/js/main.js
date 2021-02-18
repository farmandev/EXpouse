(function($) {
    "use strict";

    //Preloader
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });


    //open Sidebar in mobile
    $('.sidebar-menu').on('click', function() {
        $(this).toggleClass('open');
        $('.sidebar').toggleClass('open');
    });

    //Read more content Toggle
    $('.read-more').click(function() {
        $(this).prev().slideToggle();
        if (($(this).text()) == "+ Read More") {
            $(this).text("- Read Less");
        } else {
            $(this).text("+ Read More");
        }
    });


    //Open Uder dropdown menu
    $('.user-option').on('click', function() {
        $('.user-option-menu').addClass('open');
    });

    // Testimonial Slider
    $(".video-slider").owlCarousel({
        nav: true,
        dot: false,
        autoplayTimeout: 2000,
        loop: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        margin: 10,
        smartSpeed: 450,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            768: {
                items: 2,

            },
            992: {
                items: 2,

            },
            1200: {
                items: 3,

            }
        }
    });


    //Gallery Slider
    $(".gallery-slider").owlCarousel({
        items: 5,
        nav: true,
        dot: false,
        center: true,
        autoplayTimeout: 2000,
        loop: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        margin: 15,
        smartSpeed: 450,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            768: {
                items: 2,

            },
            992: {
                items: 3,

            },
            1200: {
                items: 3,

            },
            1400: {
                items: 4,

            }
        }
    });


    //RP Slider
    $(".rp-slider").owlCarousel({
        items: 5,
        nav: true,
        dot: false,
        center: true,
        autoplayTimeout: 2000,
        loop: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        margin: 15,
        smartSpeed: 450,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            768: {
                items: 2,

            },
            992: {
                items: 3,

            },
            1200: {
                items: 3,

            },
            1400: {
                items: 4,

            }
        }
    });


    // Popup Video js
    $('.play-yt').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });

    //Gallery popup js
    $('.gallery-item ').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },

        zoom: {
            enabled: true,

            duration: 500, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function(openerElement) {

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

})(jQuery);