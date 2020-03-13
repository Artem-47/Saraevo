//mobile menu
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__burger').click(function(event) {
        $('.header__menu').toggleClass('active');
    });

    $("#header__menu").on("click", "a", function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top - 0 + 'px';
        $('body,html').animate({ scrollTop: top }, 900);
    });

    $("#header__menu.active").on("click", "a", function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top - 0 + 'px';
        $('body,html').animate({ scrollTop: top }, 900);
    });
    $(function() {
        $("#img__box").mixItUp({
            layout: {
                containerClass: 'list'

            }

        });

    });



    //fansybox initialization
    new WOW().init();

    //fancybox settings



    $('[data-fancybox="images"]').fancybox({
        afterLoad: function(instance, current) {
            instance.update();
        },
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'download',
            'close',

        ],

        loop: true,
        gutter: 10,
        keyboard: true,
        arrows: true,
        infobar: true,
        smallBtn: false,
        toolbar: true,
        idleTime: 3,
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionEffect: "circular",
        transitionDuration: 600,
        slideClass: "myClass",
        baseClass: "myclass",
        slideShow: {
            autoStart: true,
            speed: 1000
        },

    });

    //clearing placeholders

    $('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

});
// flags
let coll = document.getElementsByClassName('item');
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }

    })
}

// slick
$('.works__slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    draggable: true,


});

$('.facts__container-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    draggable: true,


});



//google map 
function initMap() {
    let pos = { lat: 38.925354, lng: -77.405404 }
    let opt = {
            center: { lat: 38.925354, lng: -77.405404 },
            zoom: 14,
            //google map setting
            styles: [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#bdbdbd"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dadada"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#c9c9c9"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                }
            ]

        }
        //google map marker
    let map = new google.maps.Map(document.getElementById('map'), opt); {
        let marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: 'Sarajevo',
            icon: './img/marker.png'
        });

    }
};
//  menu change color


$(window).scroll(function() {
    if ($(window).scrollTop() > 530) {
        $("#header").css("background-color", "rgba(16, 22, 55, 0.8)");
    } else {
        $("#header").css("background-color", "rgba(16, 22, 54, 0.2)");
    }
});

// animaited counter
$(document).ready(function() {

    let show = true;
    let countbox = ".facts__container-item";
    $(window).on("scroll load resize", function() {
        if (!show) return false;
        let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        let w_height = $(window).height(); // Высота окна браузера
        let d_height = $(document).height(); // Высота всего документа
        let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.facts__container-counter').css('opacity', '1');
            $('.facts__container-counter').spincrement({
                thousandSeparator: "",
                duration: 2000
            });

            show = false;
        }
    });

});