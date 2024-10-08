jQuery(document).ready(function ($) {

    'use strict';

    $(window).load(function () { // makes sure the whole site is loaded
        $(".seq-preloader").fadeOut(); // will first fade out the loading animation
        $(".sequence").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
    })


    $(function () {

        function showSlide(n) {
            // n is relative position from current slide

            // unbind event listener to prevent retriggering
            $body.unbind("mousewheel");

            // increment slide number by n and keep within boundaries
            currSlide = Math.min(Math.max(0, currSlide + n), $slide.length - 1);

            var displacment = window.innerWidth * currSlide;
            // translate slides div across to appropriate slide
            $slides.css('transform', 'translateX(-' + displacment + 'px)');
            // delay before rebinding event to prevent retriggering
            setTimeout(bind, 700);

            // change active class on link
            $('nav a.active').removeClass('active');
            $($('a')[currSlide]).addClass('active');

        }

        function bind() {
            $body.bind('false', mouseEvent);
        }

        function mouseEvent(e, delta) {
            // On down scroll, show next slide otherwise show prev slide
            showSlide(delta >= 0 ? -1 : 1);
            e.preventDefault();
        }

        $('nav a, .main-btn a').click(function (e) {
            // When link clicked, find slide it points to
            var newslide = parseInt($(this).attr('href')[1]);
            // find how far it is from current slide
            var diff = newslide - currSlide - 1;
            showSlide(diff); // show that slide
            e.preventDefault();
        });

        $(window).resize(function () {
            // Keep current slide to left of window on resize
            var displacment = window.innerWidth * currSlide;
            $slides.css('transform', 'translateX(-' + displacment + 'px)');
        });

        // cache
        var $body = $('body');
        var currSlide = 0;
        var $slides = $('.slides');
        var $slide = $('.slide');

        // give active class to first link
        $($('nav a')[0]).addClass('active');

        // add event listener for mousescroll
        $body.bind('false', mouseEvent);
    })


    $('#form-submit .date').datepicker({
    });


    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("active");
        }
    });

});



// Manejar la apertura del modal y configurar la URL del video al hacer clic en un elemento
$(document).ready(function () {
    $('.item a[data-toggle="modal"]').on('click', function () {
        var videoUrl = $(this).data('video-url');
        var videoTitle = $(this).data('video-title');

        $('#videoModal iframe').attr('src', videoUrl);
        $('#videoModalLabel').text(videoTitle);
    });

    $('#videoModal').on('hidden.bs.modal', function () {
        $('#videoModal iframe').attr('src', '');
        $('#videoModalLabel').text(''); // Limpiar el título al cerrar el modal
    });
});

// Descargar CV
$('#downloadCV').on('click', function () {
    window.open('img/CV Eliseo.Orellana09.2024.pdf', '_blank');
    $body.bind('false', mouseEvent);
});


//form contact

// function toggleDarkMode() {
//      // Cambiar el modo en el nav
//     var navElement = document.querySelector('nav');
//     navElement.classList.toggle('dark-mode');


//     // Cambiar el modo en la sección de slides (ejemplo)
//     var slides = document.querySelector('.slides');
//     slides.classList.toggle('dark-mode');
//   }


function toggleDarkMode() {
    var navElement = document.querySelector('nav');
    navElement.classList.toggle('dark-mode');


    // Cambiar el modo en la sección de slides (ejemplo)
    var slides = document.querySelector('.slides');
    slides.classList.toggle('dark-mode');
    var icono = document.getElementById('modoIcono');
    var btn = document.getElementById('modoBtn');


    var img = document.getElementById('modoImg');
    var btn = document.getElementById('modoBtn');

    if (img.src.includes('luna')) {
        img.src = 'img/sol.png'; /* Ruta de la imagen del sol */
        img.alt = 'Modo Claro';
        btn.classList.remove('modo-oscuro');
    } else {
        img.src = 'img/luna.png'; /* Ruta de la imagen de la luna */
        img.alt = 'Modo Oscuro';
        btn.classList.add('modo-oscuro');
    }
}