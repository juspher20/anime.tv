function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/p-anime.html";
}

function scrollPrecentage() {
    let scrollProgress = document.getElementById('progess');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollProgress.style.background = 'conic-gradient(#5d5757${scrollValue}%, #bf000a ${scrollValue}%)';
}
window.onscroll = scrollPrecentage;
window.onload = scrollPrecentage;

$(window).scroll(() => {
    if ($(document).scrollTop() > 20) {
        $('.navigation').addClass('fix-icon');
    } else {
        $('.navigation').removeClass('fix-icon');
    }
});

(function (jQuery) {
    "use strict";
    jQuery(document).ready(function () {
        jQuery('[data-toggle=more-toggle]').on('click', function () {
            jQuery(this).next().toggleClass('show');
        });

        jQuery(document).on('click', function (e) {
            let myTargetElement = e.target;
            let selector, mainElement;
            if (jQuery(myTargetElement).hasClass('search-toggle') || jQuery(myTargetElement).parent().hasClass('search-toggle') || jQuery(myTargetElement).parent().parent().hasClass('search-toggle')) {
                if (jQuery(myTargetElement).hasClass('search-toggle')) {
                    selector = jQuery(myTargetElement).parent();
                    mainElement = jQuery(myTargetElement);
                } else if (jQuery(myTargetElement).parent().hasClass('search-toggle')) {
                    selector = jQuery(myTargetElement).parent().parent();
                    mainElement = jQuery(myTargetElement).parent();
                } else if (jQuery(myTargetElement).parent().parent().hasClass('search-toggle')) {
                    selector = jQuery(myTargetElement).parent().parent().parent();
                    mainElement = jQuery(myTargetElement).parent().parent();
                }
                if (!mainElement.hasClass('active') && jQuery('.navbar-list li').find('.active')) {
                    jQuery('.navbar-right li').removeClass('.iq-show');
                    jQuery('.navbar-right li .search-toggle').removeClass('active');
                }

                selector.toggleClass('iq-show');
                mainElement.toggleClass('active');
                e.preventDefault();
            } else if (jQuery(myTargetElement).is('search-input')) {} else {
                jQuery('.navbar-right li').removeClass('.iq-show');
                jQuery('.navbar-right li .search-toggle').removeClass('active');
            }
        });

        jQuery(document).on('click', function (event) {
            var $trigger = jQuery(".main-header .navbar");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                jQuery(".main-header .navbar-collapse").collapse('hide');
                jQuery('body').removeClass('nav-open');
            }
        });
        jQuery('.c-toggler').on("click", function () {
            jQuery('body').addClass('nav-open');
        });

        $('#home-slider').slick({
            autoplay: false,
            speed: 800,
            lazyload: 'progressive',
            arrows: true,
            dots: false,
            prevArrow: '<div class="slick-nav prev-arrow"><i class="fa fa-chevron-right"></i></div>',
            nextArrow: '<div class="slick-nav next-arrow"><i class="fa fa-chevron-left"></i></div>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }]
        }).slickAnimation();
        $(".slick-nav").on("click touch", function (e) {
            e.preventDefault();

            var arrow = $(this);

            if (!arrow.hasClass('animate')) {
                arrow.addClass('animate');
                setTimeout(() => {
                    arrow.removeClass('animate');
                }, 1600);
            }
        });

        jQuery('.favorites-slider').slick({
            dots: false,
            arrow: true,
            infinite: true,
            speed: 300,
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });

        jQuery('#top-ten-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            fade: true,
            asNavFor: '#top-ten-slider-nav',
            responsive: [{
                breakpoint: 992,
                settings: {
                    asNavFor: false,
                    arrows: true,
                    nextArrow: '<button class="NextArrow"><i class="fa fa-angle-right"></i></button>',
                    prevArrow: '<button class="PrevArrow"><i class="fa fa-angle-left"></i></button>',
                }
            }]
        });

        jQuery('#top-ten-slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#top-ten-slider',
            dots: false,
            arrows: true,
            infinite: true,
            vertical: true,
            verticalSwiping: true,
            centerMode: false,
            nextArrow: '<button class="NextArrow"><i class="fa fa-angle-down"></i></button>',
            prevArrow: '<button class="PrevArrow"><i class="fa fa-angle-up"></i></button>',
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        asNavFor: false,
                    }
                },
            ]
        });


        jQuery("#trending-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            draggable: false,
            asNavFor: "#trending-slider-nav",
        });

        jQuery("#trending-slider-nav").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: "#trending-slider",
            dots: false,
            arrows: true,
            nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
            infinite: true,
            centerMode: true,
            centerPadding: 0,
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        jQuery('.episodes-slider1').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i> "],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 4
                }
            }
        });

        jQuery('.trending-content').each(function () {
            var highestBox = 0;
            jQuery('.tab-pane', this).each(function () {
                if (jQuery(this).height() > highestBox) {
                    highestBox = jQuery(this).height();
                }
            });
            jQuery('.tab-pane', this).height(highestBox);
        });

        if (jQuery('select').hasClass('season-select')) {
            jQuery('select').select2({
                theme: 'bootstrap5  ',
                allowClear: false,
                width: 'resolve'
            });
        }
    });

})(jQuery);

(function ($) {
    $('body').css('overflow-x', 'hidden');
    $.fn.parallax = function (opt) {
        let effect_list = ['slide-up', 'slide-down', 'slide-right', 'slide-left', 'flip-x', 'flip-y', 'zoom'];
        opt = $.extend(opt || {}, {
            rate: 0.3,
            mode: 0,
            effect: effect_list[0]
        });
        this.children().each(function () {
            let obj = $(this);
            obj.addClass('parallax-list');
            if (obj.attr('img')) {
                obj.css('background-image', 'src(' + obj.attr('img') + ')').addClass('parallax');
            }
            obj.children().each(function () {
                let item = $(this);
                item.css('opacity', 0)
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function () {
                        item.css('opacity', 1);
                    });
            });
            let func = show_1;
            if (obj.attr('data-func')) {
                if (typeof (window[obj.attr('data-func')]) === 'function') {
                    func = window[obj.attr('data-func')]
                } else {
                    try {
                        func = eval(obj.attr('data-func'));
                        if (typeof (func) === 'function') {
                            func = eval(obj.attr('data-func'));
                        }
                    } catch (e) {
                        func = show_2;
                    }
                }
            }
            func(obj, obj.attr('data-effect') || opt.effect || effect_list[0]);

            if (opt.mode === 1) {
                obj.css('overflow', 'hidden');
                $('body').css('overflow', 'hidden');
                $(window).resize(function () {
                    obj.css({
                        width: $(window).width(),
                        height: $(window).height(),
                    })
                });
                $(window).trigger('resize');

                obj.get(0).onmousewheel = function (e) {
                    if (window.scrolling) return;
                    window.scrolling = true;
                    let item = e.deltaY > 0 ? obj.next() : obj.prev();
                    if (item.length > 0) {
                        $('html, body').animate({
                            scrollTop: item.position().top
                        }, 1000, function () {
                            window.scrolling = false;
                        });
                    } else {
                        window.scrolling = false;
                    }
                }
            } else {
                if (obj.attr('data-bg')) {
                    $(window).scroll(function () {
                        if ($(window).width() < 768) {
                            obj.css({
                                'background-position': 'bottom center'
                            });
                        } else {
                            let rate = obj.attr('data-rate') || opt.rate;
                            if (
                                obj.position().top < $(window).scrollTop() + $(window).height() &&
                                obj.position().top + obj.height() > $(window).scrollTop()
                            ) {
                                obj.css('background-position-y', (obj.position().top - $(window).scrollTop()) * rate);
                            }
                        }
                    });
                }
            }
        });
        $(window).trigger('scroll');

        function show_1(obj, effect) {
            if (effect === 'rand' || effect === 'random') {
                effect = effect_list[Math.floor(Math.random() * effect_list.length)];
            }
            obj.children().each(function () {
                let item = $(this);
                let cur_effect = item.attr('data-effect') || effect;
                if (cur_effect === 'rand' || cur_effect === 'random') {
                    cur_effect = effect_list[Math.floor(Math.random() * effect_list.length)];
                }
                $(window).scroll(function () {
                    if (item.attr('data-shown')) return;
                    if (
                        item.position().top < $(window).scrollTop() + $(window).height() / 1.5 &&
                        item.position().top + item.height() > $(window).scrollTop() + $(window).height() / 10
                    ) {
                        item.addClass('animation animation_' + cur_effect)
                            .attr('data-shown', 'y')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function () {
                                $(this).removeClass('animation animation_' + cur_effect);
                            });
                    }
                });
            });
        }

        function show_2(obj, effect) {
            let items = obj.children();
            let cnt = items.length;
            let idx = 0;
            if (cnt === 0) return;
            let show = function (item) {
                item = $(item);
                if ($(window).width() > 768) {
                    effect = idx % 2 ? 'slide-up' : 'slide-down';
                } else {
                    effect = idx % 2 ? 'slide-left' : 'slide-right';
                }
                if (idx === 0) effect = 'zoom';
                item.addClass('animation animation_' + effect)
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function () {
                        $(this).removeClass('animation animation_' + effect);
                        if (idx++ < cnt) show(items[idx]);
                    });
            }
            $(window).scroll(function () {
                if (
                    obj.attr('data-shown') ||
                    obj.position().top > $(window).scrollTop() + $(window).height() / 1.5 ||
                    obj.position().top + obj.height() < $(window).scrollTop() + $(window).height() / 10
                ) return;
                show(items[idx]);
                obj.attr('data-shown', 'y')
            });
        }
    };
})(jQuery);
const showParagraph = $(document).ready(() => {
    $('#btn').on('click', function () {
        $('#hide').show('slow')
        $('.closebtn').hide();

    });
    $('#closebtn').on('click', function () {
        $('#hide').hide('slow')
        $('#btn').show('slow')
    });
});
$(document).ready(function () {
    $(".conti-read").on('click', function () {
        $(".popup-div").fadeIn();
        $("body").addClass("hiiden-f");
    });
    $(".popup-div .closeBtn").on('click', function () {
        $(".popup-div").fadeOut();
        $("body").removeClass("hiiden-f");
    });
    $(".anime-manga").on('click', function () {
        $('#button').removeClass('btn')
        if ('click') {
            $('#main-slider').hide(),
                $('.slider-btns').hide(),
                $('footer').hide();
            if ('remove') {
                $('.onepiece').fadeIn()
                $('body').addClass('hiiden-f')
            } else {
                return false
            }
        } else {
            $('#main-slider').add()
            $('.slider-btns').add()
        }
    });
    $(".onepiece .cbtn").on('click', function () {
        $(".onepiece").fadeOut();
        $("body").removeClass("hiiden-f");
        $('#button').addClass('btn');
        $('#main-slider').show(),
            $('.slider-btns').show(),
            $('footer').show();
    });
});

// NO VIDEO AVAILBLE SO I PUT IT ON COMMENT
popUpPlay();

function popUpPlay() {
    $(document).on('click', '.play-btn a', function () {
        $('.play').addClass('active-popup');
    });
    $(document).on('click', '.close-movie', function () {
        $('.play').removeClass('active-popup');
    });
    $('.play-btn a').click(function () {
        $('#m-video')[0].play();
    });
    $('.close-movie').click(function () {
        $('#m-video')[0].pause();
    });
}
// **************************************
const base_url = "https://api.jikan.moe/v3";

function searchAnime(event) {
    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    fetch(`${base_url}/search/anime?q=${query}&page=1`)
        .then(res => res.json())
        .then(updateDom)
        .catch(err => console.warn(err.message));
}

function updateDom(data) {
    const searchResults = document.getElementById('search-results');
    const animeByCategories = data.results
        .reduce((acc, anime) => {
            const {
                type
            } = anime;
            if (acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});
    searchResults.innerHTML = Object.keys(animeByCategories).map(key => {
        const animesHTML = animeByCategories[key]
            .sort((a, b) => a.episodes - b.episodes)
            .map(anime => {
                return `
                <div class="anime-item p-2 fadeInUp animated" data-animation-in="fadeInUp" data-delay-in="0.2">
                    <div class="block-images position-relative">
                        <div class="img-box">
                        <img src="${anime.image_url}" style="width: 280px; height: 300px;">
                        </div>
                        <div class="block-description">
                            <h6 class="iq-title">
                                <a href="#" style="font-size: 1.4rem; font-weight: 900;">${anime.title}</a>
                            </h6>
                            <div class="anime-time d-flex align-items-center my-2">
                                <div class="badge badge-secondary p-1 mr-2">12+</div>
                                <span class="text-white">Episode 1</span>
                            </div>
                            <div class="hover-buttons">
                                <span class="btn btn-hover iq-button">
                                    <i class="fa fa-play mr-1"></i>
                                    Watch Now
                                </span>
                            </div>
                        </div>
                    </div>
                </div> 
                `
            }).join("");

        return `
                <div class="iq-main-header d-flex p-3">
                    <h3 class="main-title-two">Anime Watch ＞<a href="p-animes.html" id="active"">${key.toUpperCase()}</a></h3>
                </div>
                <section>
                    <div class="juspher-row">${animesHTML}</div>
                </section>
            `
    }).join("");
    if (true) {
        $('#all-anime').hide();
        $('.page-number').hide()
    } else {}
}

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
};

var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}
$(function () {
    $('img[data-alt-src]').each(function () {
        new Image().src = $(this).data('alt-src');
    }).fadeIn().hover(sourceSwap, sourceSwap);
});