(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();




    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


})(jQuery);





let x = document.getElementById("company-intelligance-select")
document.getElementById('company-intelligence').addEventListener('click', function () {
    var selectedValue = this.value;

    if (selectedValue === "CompanyIntelligence") {
        x.style.display = "block"
    }
});

document.getElementById('industry-intelligence').addEventListener('click', function () {
    var selectedValue = this.value;

    if (selectedValue != "CompanyIntelligence") {
        x.style.display = "none"
    }
});

document.getElementById('others').addEventListener('click', function () {
    var selectedValue = this.value;

    if (selectedValue != "CompanyIntelligence") {
        x.style.display = "none"
    }
});


document.getElementById('select-category').addEventListener('click', function () {
    var selectedValue = this.value;

    if (selectedValue != "CompanyIntelligence") {
        x.style.display = "none"
    }
});

