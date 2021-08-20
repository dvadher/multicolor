$(document).ready(function () {
    /*====================== js for sticky and mobile menu ====================== */
    var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
    $(".main_page").css('min-height', min_height + 'px');
    $(window).resize(function () {
        var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
        $(".main_page").css('min-height', min_height + 'px');
    });

    $(window).scroll(function(){
        var navHeight = $('#custom-header').height();
        var sticky = $('#custom-header');
        if ($(window).scrollTop() > 0) {
            sticky.addClass("sticky")
            $('#dashboard-page').css('padding-top',navHeight+"px");
        } else {
            sticky.removeClass("sticky");
            $('#dashboard-page').css('padding-top',0);
        }
    });
    $('.jb_front_nav_close button').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $(".password-icon").click(function(){
        if (password_field.type === "password") {
           password_field.type = "text";
           $('.password-toggle').addClass('flaticon-eye');
           $('.password-toggle').removeClass('flaticon-invisible');
        } else {
           password_field.type = "password";
           $('.password-toggle').addClass('flaticon-invisible');
           $('.password-toggle').removeClass('flaticon-eye');
        }
     });
     
    /*====================== js for sticky and mobile menu ====================== */
    $('.count').each(function() {

        $(this).prop('counter', 0).animate({
    
        counter: $(this).text()
    
        }, {
    
        duration: 10000,
    
        easing: 'swing',
    
        step: function(now) {
    
            $(this).text(Math.ceil(now));
        }
        });
    });

     /*====================== js for scrollTop ====================== */
        var btn = $('#button');

            $(window).scroll(function() {
            if ($(window).scrollTop() > 500) {
               btn.addClass('show');
            } else {
               btn.removeClass('show');
            }
            });

            btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '500');
            });
    /*====================== js for scrollTop ====================== */
    
    /*====================== web slider ====================== */
    $('#home-slider').owlCarousel( {
        loop: false,
        center: true,
        items: 1,
        autoplay: false,
        dots:true,
      nav:true,
        autoplayTimeout: 3000,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });
    
    $('#team-slider').owlCarousel( {
        loop: true,
        items: 2,
        autoplay: true,
        dots:true,
        margin:10,
        nav:true,
        autoplayTimeout: 3000,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });

    $('#home-client-slider').owlCarousel( {
        loop: true,
        items: 7,
        autoplay: true,
        dots:true,
        margin:10,
        nav:true,
        autoplayTimeout: 1500,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 4
            },
            1170: {
                items: 5
            }
        }
    });

    $('#certi-logo').owlCarousel( {
        loop: true,
        items: 7,
        autoplay: false,
        dots:true,
        margin:10,
        nav:true,
        autoplayTimeout: 3000,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 4
            },
            1170: {
                items: 5
            }
        }
    });

    $('#product-slider').owlCarousel( {
        loop: true,
        items: 4,
        autoplay: false,
        dots:true,
        margin:15,
        nav:true,
        autoplayTimeout: 3000,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 4
            },
            1170: {
                items: 4
            }
        }
    });

    $('.thumb a').mouseover(function(e){
        e.preventDefault();
        $('.imgBox img').attr("src", $(this).attr("href"));
     })
     $('.thumb a').click(function(e){
        e.preventDefault();
        $('.imgBox img').attr("src", $(this).attr("href"));
     })
    /*====================== web slider ====================== */
    
    /*====================== custom video ====================== */
    // video icon poster frame click event
    $(document).on('click','.js-videoPoster',function(ev) {
        ev.preventDefault();
        var $poster = $(this);
        var $wrapper = $poster.closest('.js-videoWrapper');
        videoPlay($wrapper);
        });

        // play the targeted video (and hide the poster frame)
        function videoPlay($wrapper) {
        var $iframe = $wrapper.find('.js-videoIframe');
        var src = $iframe.data('src');
        // hide poster
        $wrapper.addClass('videoWrapperActive');
        // add iframe src in, starting the video
        $iframe.attr('src',src);
        }

        // stop the targeted/all videos (and re-instate the poster frames)
        function videoStop($wrapper) {
        // if we're stopping all videos on page
        if (!$wrapper) {
           var $wrapper = $('.js-videoWrapper');
           var $iframe = $('.js-videoIframe');
        // if we're stopping a particular video
        } else {
           var $iframe = $wrapper.find('.js-videoIframe');
        }
        // reveal poster
        $wrapper.removeClass('videoWrapperActive');
        // remove youtube link, stopping the video from playing in the background
        $iframe.attr('src','');
        }
    /*====================== custom video ====================== */

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
  
    sync1.owlCarousel({
      items : 1,
      slideSpeed : 2000,
      nav: true,
      autoplay: false,
      dots: true,
      loop: true,
      responsiveRefreshRate : 200,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);
  
    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      items : slidesPerPage,
      dots: true,
      items : 7,
      nav: true,
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);
  
    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;
      
      //if you disable loop you have to comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
      
      //end block
  
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
    
    sync2.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });
    
});/*====================== all js end ====================== */

