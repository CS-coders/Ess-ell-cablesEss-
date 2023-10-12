(function($) {
    "use strict";
    jQuery(document).ready(function() {


        new WOW().init();

        if ($.fn.masonry) {
            //masonry
            $('.ms_grid').masonry({
                itemSelector: '.msonry-item'
            });
        };

        if ($.fn.niceSelect) {
            $('select').niceSelect();
        };

        if ($.fn.owlCarousel) {

            // ==welcome_area==
            var w_slider = $('.w_slider');
            w_slider.owlCarousel({
                items: 1,
                loop: true,
                smartSpeed: 500,
                autoplayTimeout: 3000,
                mouseDrag: false,
                touchDrag: false,
                autoplay: true
            });
            //==welcome_area animation==\\
            w_slider.on('translate.owl.carousel', function() {
                $('.w_content h1').removeClass('fadeInUp animated').hide();
                $('.w_content p').removeClass('fadeInUp animated').hide();
                $('.w_content .custom_btn').removeClass('fadeInUp animated').hide();
                $('.w_img ').removeClass('fadeIn animated').hide();
            });

            w_slider.on('translated.owl.carousel', function() {
                $('.owl-item.active .w_content h1').addClass('fadeInUp animated').show();
                $('.owl-item.active .w_content p').addClass('fadeInUp animated').show();
                $('.owl-item.active .w_content .custom_btn').addClass('fadeInUp animated').show();
                $('.owl-item.active .w_img').addClass('fadeIn animated').show();
            });

            //==recent-project_area animation==\\
            $('.recent_project').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 3
                    },
                    992: {
                        items: 4
                    }
                }

            });
            //==testimonial_area animation==\\
            $('.testimonial_slider').owlCarousel({
                items: 3,
                loop: true,
                nav: true,
                dots: false,
                navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
            //news_slider
            $('.newws_slider').owlCarousel({
                items: 2,
                loop: true,
                nav: true,
                dots: false,
                navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    992: {
                        items: 2
                    }
                }
            });


            //news_slider
            $('.home_2_newws_slider').owlCarousel({
                items: 3,
                loop: true,
                nav: true,
                dots: false,
                margin: 10,
                navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
                responsive: {
                    0: {
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
            //client_slider
            $('.client_slider').owlCarousel({
                items: 5,
                loop: true,
                dots: false,
                responsive: {
                    0: {
                        items: 3,
                        margin: 10
                    },
                    767: {
                        items: 5,
                        margin: 20
                    },
                    992: {
                        margin: 100
                    }
                }
            });
        };



        //==prevernt Defult==\\
        $("a.search_icon,.header_lang a").click(function(event) {
            event.preventDefault();
            $("<div>")
                .append("default " + event.type + " prevented")
                .appendTo("#log");
        });


        //==Header lang==\\
        $('.header_lang >ul>li').on('click', function() {
            $('.header_lang > ul> li> ul').toggleClass('lang_active');
        });

        $('.single_testimonial').on('mouseover', function() {
            $('.single_testimonial').removeClass('active');
            $(this).addClass('active')

        });

        $('.single_news').on('mouseover ', function() {
            $('.single_news').removeClass('news_shadow');
            $(this).addClass('news_shadow');

        });

        $('form.search_bar .search_icon').on('click', function() {
            $('form.search_bar').toggleClass('active');
        });

        //  slickNav
        if ($.fn.slicknav) {
            $('.main_menu').slicknav({
                prependTo: '.menu_bar',
                label: ''
            });
        };



        //count_activation
        if ($.fn.counterUp) {
            $('.count').counterUp({
                delay: 100,
                time: 2000
            });
        };

        if ($.fn.isotope) {
            //project isotope
            $('.project_bar li').click(function() {

                $(".project_bar li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr('data-name');
                $(".isotope").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        };

        if ($.fn.ionRangeSlider) {
            var $range = $("#range");

            $range.ionRangeSlider({
                type: "double",
                min: 0,
                max: 100,
                from: 0,
                to: 100
            });

            $range.on("change", function() {
                var $this = $(this),
                    value = $this.prop("value").split(";");

                console.log(value[0] + " - " + value[1]);
            });

        };
        if ($.fn.countdown) {
            $('.clock').countdown('2020/10/10', function(event) {
                var $this = $(this).html(event.strftime('' + '<p><span>%d</span>days</p>  ' + '<p><span>%H</span>hr</p>  ' + '<p><span>%M</span>min</p>  ' + '<p><span>%S</span>sec</p> '));
            });
        };

        if ($.fn.isotope) {
            //project isotope
            $('.project_bar li').click(function() {

                $(".project_bar li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr('data-name');
                $(".isotope").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        };


        //faq toggle stuff 
        $('.togglefaq').on('click', function(e) {
            $('.single-acordion').removeClass('display-block');
            e.preventDefault();
            var notthis = $('.active-item').not(this);
            notthis.find('.fa-minus').addClass('fa-plus').removeClass('fa-minus');
            notthis.toggleClass('active-item').next('.faqanswer').slideToggle(300);
            $(this).toggleClass('active-item').next().slideToggle("fast");
            $(this).children('i').toggleClass('fa-plus fa-minus');
        });




    });

    jQuery(window).load(function() {

        // Active isotope in container

        if ($.fn.isotope) {
            $(".isotope").isotope({
                itemSelector: '.single_recent_project',
                layoutMode: 'fitRows'
            });
        };
        $('.preloader').fadeOut(300);

    });

})(jQuery);