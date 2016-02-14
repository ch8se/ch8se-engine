
var ch8se = window.ch8se || {};

jQuery( document ).ready(function( $ ) {
ch8se.init = function() {

  ch8se.initCarosuel();
  ch8se.menuToggle();
  ch8se.menuFix();
  ch8se.menuAnimation();
  ch8se.opacitySlider();
  ch8se.fixProductHeight();
  ch8se.productView();
  // ch8se.youtubePopup();
  ch8se.champSubscribe();
  ch8se.fixIframeSizePage();
  ch8se.homePageLoader();
  ch8se.initParallax();

  if (!$('.carousel').length) ch8se.instafeedInit(); //If there is no carousel load instafeed, if there is instafeed is loaded from ch8se.initCarosuel()
  


  $(window).on('resize', function() {
    ch8se.menuFix();
    ch8se.fixProductHeight();
    ch8se.fixIframeSizePage();
    // ch8se.fixIframeSize();
  });



  //TODO add these into seperate functions
  // $.ajax({
  //   type: 'GET',
  //   url: 'http://api.hostip.info/get_html.php',
  //   success: function(data) {
  //     $('input[name="ip-address"]').val(data.split('IP: ')[1]);
  //   }
  // });

  $('.get-notified').on('click', e => {
    e.preventDefault();

    if ($(e.target).hasClass('reports')) {
      $('.subscribe-overlay').find('.textwidget > p').hide();
      $('.subscribe-overlay').find('p.reports').show();
    }
    $('.subscribe-overlay').show();
  });

  $('.subscribe-overlay').on('click touchend', e => {
    var $target = $(e.target);

    if ($target.hasClass('subscribe-overlay') || $target.hasClass('close')) {
      $('.subscribe-overlay').hide();
    }
  });

  $('.subscribe-overlay form').on('submit', e => {

    setTimeout(function() {
      if ($('.subscribe-overlay form').hasClass('sent')) $('.subscribe-overlay').hide();
    }, 4000);

  });


  $('.contact-us input[type="email"], .contact-us input[type="text"]').each(function() {
    var $this = $(this);

    $this.attr('placeholder', $this.attr('name'));
  });







  $('input[name="promo-code"]').val(makeid());
  $('.share-plant span[placeholder]').each(function() {
    var $this = $(this);

    $this.find('input, textarea').attr('placeholder', $this.attr('placeholder'));
  });




  $('.mail-copy').on('click', function(e) {
    e.preventDefault();

    copyToClipboard('http://www.ch8se.com');

    setTimeout(function() {
      $('.mail-copy').removeClass('show-popup');
    }, 5000);
  });


  //ambassador page fix
  // $('.ambassador .banner').on('load', function() {
  //   $('.ambassador').css('margin-top', $('.ambassador .banner').height() - 100);
  //   $('.ambassador .biography').height($('.ambassador .banner').height());
  // }).each(function() {
  //   $('.ambassador').css('margin-top', $('.ambassador .banner').height() - 100);
  //   $('.ambassador .biography').height($('.ambassador .banner').height());
  // });


  $('.snapchat').on('click', function(e) {
    e.preventDefault();
    $('.snapchat div').toggleClass('show');
  });

  $('.snapchat div').on('click', function(e) {
    copyToClipboard($(this).find('span').text());
  });


}

function copyToClipboard(textToCopy) {
  $('.mail-copy').addClass('show-popup');
  $("body")
    .append($('<input type="text" name="fname" class="textToCopyInput"/>' ).val(textToCopy))
    .find(".textToCopyInput")
    .select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('copy to clipboard', msg);
  } catch (err) {}

  $('.textToCopyInput').remove();
}


function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < 6; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function isMobileOs() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  return userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) || userAgent.match( /Android/i );
}

function trueWindowWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
function trueWindowHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

ch8se.homePageLoader = function () {
  if (!$('body').hasClass('home')) return;
  var $pageContent = $('body.home .page-content');

  var $homeImages = $pageContent.find('img');


  $pageContent.css({opacity: 0});
  $('body').addClass('no-scroll');
  $pageContent.parent().addClass('animate-loader');

  var imgCount = 0;
  $homeImages.on('load', function() {
    // console.log('load', this);
    hideOverlay();
  }).each(function() {
    // console.log('cache', this.complete);
    if (this.complete) hideOverlay(); //this.complete checks if image really is cached
  });

  function hideOverlay (img) {
    imgCount++;

    if (imgCount === $homeImages.length) {
      setTimeout(function() {

        $pageContent.css({transition: 'all 0.5s ease', opacity: 1});
        $('body').removeClass('no-scroll');
        $pageContent.parent().removeClass('animate-loader');
      }, 500);

    }
  }
}

ch8se.menuAnimation = function() {
  var $blocks = $('.site-nav > ul > li');
  var $animationBlock = $('.animation-block');
  function resetMenuAnimation() {
    $animationBlock.css({height: 0});
    $('.site-nav').addClass('delay');
  }

  $blocks.on('mouseenter', function(e) {
    if (trueWindowWidth() >= 783 && $(this).find('> div').length) {
      $animationBlock.css({height: $(this).find('> div').height()});
      $('.site-nav').removeClass('delay');
    } else {
      resetMenuAnimation();
    }
  });

  $('header.site-header nav').on('mouseleave', function() {
    resetMenuAnimation();
  });

  $('.site-nav .logo').on('mouseenter', function() {
    resetMenuAnimation();
  })

}

ch8se.champSubscribe = function() {
  var $container = $('.champ-subscribe');

  if (!$container.length) return;

  $('.become-champ').on('click', function(e) {
    e.preventDefault();
    // if ($('.become-champ').css('display') === 'block') return;
    $container.find('input[type="email"]').attr('placeholder', 'email');
    $container.css({display: 'block'}).animate({
      opacity: 1,
      height: 250,
    }, 1000);
    $('html, body').animate({
        scrollTop: $container.offset().top - 80
    }, 1000);
  })

  var $form = $container.find('form');

  $form.find('span[placeholder]').each(function() {
    var $this = $(this);

    $this.find('input, textarea').attr('placeholder', $this.attr('placeholder'));
  });

  $('.profile-picture').on('click', function(e) {
    $('.profile-picture + span > input').click();
  });

  $('.profile-picture + span > input').on('change', function(e) {
    var reader = new FileReader();
    reader.onload = function(){
      // console.log(reader.result);
      $('.profile-picture').html('<img src="' + reader.result + '" />')
    };
    reader.readAsDataURL(event.target.files[0]);
  });

}

ch8se.youtubePopup = function() {

  var popup = `<div class="iframe-holder">
    <div class="underlay">
      <i class="fa fa-times-circle"></i>
      <iframe src="https://www.youtube.com/embed/S35ikoNnjKM" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>`

  ch8se.$youtubeLink = $('.fa-youtube-play');
  $('.youtube-play').on('click', function() {
    $('body').append(popup);
    ch8se.fixIframeSize();    
  });
  
  // if ($('body').hasClass('home')) {
  //   $('body').append(popup);
  //   ch8se.fixIframeSize();    
  // }

}

ch8se.fixIframeSizePage = function() {
  var $videoWrapper = $('.videoWrapper');
  $videoWrapper.css({height: ($videoWrapper.width() * 9 / 16)});
}

ch8se.fixIframeSize = function() {
  var $iframeHolder = $('.iframe-holder');
  var $iframe = $('.iframe-holder iframe');
  if (!$iframe.length) return;

  //Get youtubeLink position and start iframe size from it
  //console.log(ch8se.$youtubeLink.offset(), ch8se.$youtubeLink.width());
    var $underlay = $iframeHolder.find('.underlay');

    var originalCss = {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      position: 'absolute',
      top: ch8se.$youtubeLink.offset().top,
      left: ch8se.$youtubeLink.offset().left,
      width: ch8se.$youtubeLink.width(),
      height: ch8se.$youtubeLink.height()
    };


    $underlay.css(originalCss);


    var animationStyles = trueWindowWidth() / trueWindowHeight() <= 16/9 ? {
      top: (trueWindowHeight() - trueWindowWidth() * 0.9 * 9 / 16) / 2,
      left: (trueWindowWidth() - trueWindowWidth() * 0.9)  / 2,
      width: trueWindowWidth() * 0.9,
      height: trueWindowWidth() * 0.9 * 9 / 16
    } : {
      top: (trueWindowHeight() - trueWindowHeight() * 0.9) / 2,
      left: (trueWindowWidth() - trueWindowHeight() * 0.9 * 16 / 9) / 2,
      width: trueWindowHeight() * 0.9 * 16 / 9,
      height: trueWindowHeight() * 0.9
    };

    $iframeHolder.css({backgroundColor: 'rgba(34, 34, 34, 0.64)'});
    $underlay.css($.extend({
      transition: 'all 0.5s ease',
      backgroundColor: 'rgba(0, 0, 0, 1)',
    }, animationStyles));

    setTimeout(function() {
      // $underlay.hide();

      $iframe.css({
        display: 'block'
      });

      $iframe.siblings('i').css({opacity: 1 });
    }, 500);


    $iframeHolder.on('click', function(e) {
      // console.log('click');
      var $target = $(e.target);

      if ($target.hasClass('iframe-holder') || $target.hasClass('fa')) {
        // $iframeHolder.hide();
        // $underlay.show();

        $iframe.siblings('i').hide();
        $iframe.css({
          display: 'none'
        });

        $iframeHolder.css({backgroundColor: 'rgba(34, 34, 34, 0)'});
        $underlay.css($.extend({backgroundColor: 'rgba(0, 0, 0, 0)'}, originalCss));

        setTimeout(function() {
          $iframeHolder.remove();
          ch8se.$youtubeLink.addClass('swing animated');

          setTimeout(function() {
            ch8se.$youtubeLink.removeClass('swing animated');
          }, 1000);
        }, 500);
      }
    });

  // $(window).on('resize', function() {
  //   console.log('resize');
  //   $iframeHolder.remove();
  // });
  
  // $iframe.height($iframe.width()*9/16);
  // 
};

ch8se.fixProductHeight = function() {
  var trueHeight = 0; //Make sure same width is used for all elements

  $('.product').each(function(i) {
    var $this = $(this);

    if (!i) trueHeight = $this.width()*(6/5);

    $this.height(trueHeight);
  });
}

ch8se.menuToggle = function() {
  var $hamburger = $('.site-nav .fa-bars'),
      $menu = $('.site-nav > ul');

  $hamburger.on('click', function() {
    $menu.toggleClass('expand');

    $menu.css({transition: 'all 0.5s ease'});

    setTimeout(function() {
      $menu.css({transition: ''});
    }, 500);
  });


  $menu.find('> li > a, > li > span').on('click', function(e) {
    var $this = $(this);

    if (trueWindowWidth() < 782 /*&& !$this.parent().hasClass('expand')*/ && $this.siblings().length) {
      e.preventDefault();
      e.stopPropagation();
      var $cont = $this.siblings('div');

      if (!$this.parent().hasClass('expand')) {
        $this.parent().siblings().removeClass('expand');
        $this.parent().siblings().find('div').css({transition: 'all 0.5s ease', height: 0});
        $this.parent().addClass('expand');
        $cont.css({transition: 'all 0.5s ease', height: $cont.find('ul').height() + 20});
      } else {
        $this.parent().removeClass('expand');
        $cont.css({transition: 'all 0.5s ease', height: 0});
      }

      setTimeout(function() {
        $this.parent().siblings().find('div').css({transition: ''});
        $cont.css({transition: ''});
      }, 500);

    } else {
      $this.parent().removeClass('expand');
    }
  });
}

ch8se.menuFix = function() {
  var $siteNav = $('.site-nav');

  $siteNav.find('> ul > li').each(function(i) {
    var $this = $(this),
        $ul = $(this).find('> div > ul');

    if (trueWindowWidth() >= 783) {
      $this.find('> a, > span').removeClass('has-children');


      if ($ul.length) {
        $this.find('> div').css({display: 'block'}); //js can't calculate width of hidden element

        $ul.css({'margin-left': ($this.position().left - $ul.find('li:first-child').width() - ($ul.hasClass('man-woman') ? 0 : 50))});

        $this.find('> div').css({display: ''});
      }
    } else {
      $ul.removeAttr('style');

      if (i >= 0 && i <= 3) {
        $this.find('> a, > span').addClass('has-children');
      }
      // if (i >= 2) {
      //   $this.css({transform: 'translateY(-' + $siteNav.find('> ul > li:first-child').height() + 'px)'});
      // }
    }
  });
}
ch8se.instafeedStarted = false;
ch8se.instafeedInit = function() {
  if (ch8se.instafeedStarted) return;
  ch8se.instafeedStarted = true;


  $('.instafeed').each(function() {

    var feedParent = this,
        $feedParent = $(this);


    var dataOptions = $feedParent.data(); //TODO: remove this

    var instaOptions = $.extend({
      target: feedParent,
      clientId: 'e6c9243435d84aeabf438796399d841c',
      resolution: trueWindowWidth() > 782 ? 'standard_resolution' : 'low_resolution',
    }, dataOptions);


    if (dataOptions.slideshow) {
      instaOptions.after = function() {
        $feedParent.slick({
          adaptiveHeight: true,
          slidesToShow: 8,
          arrows: false,
          swipeToSlide: true,
          autoplay: true,
          autoplaySpeed: 10000,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 3,
              }
            }
          ]
        });

        var $imageLink = $feedParent.find('a');

        function fixSizes() {

          var height = $imageLink.width();
          $imageLink.height(height);

          $feedParent.find('img').on('load', function() {
            var $this = $(this);

            if ($this.height() < $this.width()) {
              $this.css({height: '100%', width: 'auto'});
            } else {
              $this.css({height: 'auto', width: '100%'});
            }
          });
        }
        fixSizes();

        $(window).on('resize', fixSizes);


        // }
      }
    } else {
      instaOptions.after = function() {
        if (dataOptions.userName) {
          $feedParent.append(`<div><a class="tag" href="http://www.instagram.com/${dataOptions.userName}" target="_blank">${dataOptions.userName}</a></div>`);
        } else if (dataOptions.tagName) {
          $feedParent.append(`<div>#${dataOptions.tagName}</div>`);
        }

        var fontSizeFix = 1; //Used for tags and usernames that are larger than the box
        var $text = $feedParent.find('div');
        var $imageLink = $feedParent.find('> a');

        function fixSizes() {

          var height = $imageLink.width();
          $imageLink.height(height);
          $text.css({height: height, lineHeight: height + 'px', fontSize: height*fontSizeFix/10*3});

          if ($text.width() < $text.find('a').width()) {
            fontSizeFix = fontSizeFix*0.9;
            fixSizes();
          }
        }

        $feedParent.find('img').one('load', function() {
          fixSizes();

          var $this = $(this);

          if ($this.height() < $this.width()) {
            $this.css({height: '100%', width: 'auto'});
          }
        });

        $(window).on('resize', function() {
          fixSizes();
        });
      }
    }

    // console.log('data', instaOptions);

    if (dataOptions.tagName) instaOptions.get = 'tagged';
    if (dataOptions.userId) instaOptions.get = 'user';
    if (dataOptions.userName) {
      instaOptions.get = 'user';

        $.ajax({ //TODO: find better way to find userId, in some case this query doesn't return good results
          type: 'GET',
          url: 'https://api.instagram.com/v1/users/search?q=' + dataOptions.userName + '&client_id=e6c9243435d84aeabf438796399d841c',
          crossDomain: true,
          dataType: "jsonp",
          success: function(data) {
            // console.log('data',data);

            for (var i = 0; i < data.data.length; i++) {
              if (data.data[i].username === dataOptions.userName) {
                instaOptions.userId = data.data[i].id;
                break;
              }
            };

            if (instaOptions.userId && instaOptions.userId.length) {
              var feed = new Instafeed(instaOptions);
              feed.run();
            }
          }
        });

    } else {

      var feed = new Instafeed(instaOptions);
      feed.run();
    }
  });
}

ch8se.opacitySlider = function() {
  var $parent = $('.graphic-slideshow');
  var $slides = $parent.find('img');
  var activeSlide = 0;

  function changeOpacity() {
    $slides.css({opacity: 0});
    $slides.eq(activeSlide).css({opacity: 1});
  }

  changeOpacity(0);

  setInterval(function(){
    activeSlide == $slides.length - 1 ? activeSlide = 0 : activeSlide++;

    changeOpacity();
  }, 4000);

}

ch8se.productView = function() {
  var $preview = $('.single-product-block'),
      $enlargedImg = $preview.find('.enlarged img'),
      $thumbs = $preview.find('.thumbs a');

  $thumbs.on('click', function(e) {
    e.preventDefault();

    $thumbs.removeClass('active');
    var $this = $(this);

    $enlargedImg.attr('src', $this.attr('href'));

    $this.addClass('active');
  });
}
ch8se.initParallax = function() {
  if (isMobileOs()) return; //TODO: find a good parallax for mobile devices

  $('.parallax').each(function() {
    var $this = $(this);
    var $bg = $this.find('.bg');

    var $images = $this.find('.scroll');

    function moveElements() {
      $images.css({'transform': 'translateY(' + ($(window).scrollTop() / 2) + 'px)'});
    }
    moveElements();

    $(document).on('scroll', function() {
      moveElements();
    });

  });
}

ch8se.initCarosuel = function() {
    $('.carousel').each(function() {
    var $this = $(this);
    var $1stImage;
    var carouselInitiated = false;
    function initCarousel() {
      if (carouselInitiated) return;
      carouselInitiated = true;

      $this.slick($.extend({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        // arrows: false,
        prevArrow: '<img class="arrow prev" src="http://www.ch8se.com/wp-content/themes/ch8se/img/carousel-arrow.png">',
        nextArrow: '<img class="arrow next" src="http://www.ch8se.com/wp-content/themes/ch8se/img/carousel-arrow.png">'
        // dots: true
      }, $this.data()));
    }


    $this.find('img').each(function(i, img) {
      var $img = $(img);
      if (!i) {
        $1stImage = $img;
      } else {
        $img.attr('data-src', $img.attr('src'));
        $img.removeAttr('src').css({display: 'none'});
      }
    });

    function reloadImages() {
      $this.find('img').each(function(i, img) {
        var $img = $(img);
        if (i) {
          $img.attr('src', $img.attr('data-src'));
          $img.removeAttr('data-src').css({display: 'block'});
        }
      });

      ch8se.instafeedInit();
      initCarousel();
    }

    $1stImage.one('load', function() {
      // console.log('load');
      reloadImages();
    }).each(function() {
      // console.log('cache');
      if (this.complete) reloadImages();
    });
  });
}


ch8se.init();

});