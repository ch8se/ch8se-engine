
var ch8se = window.ch8se || {};
var services = require('./utils/services');

jQuery( document ).ready(function( $ ) {
ch8se.init = function() {

  ch8se.initCarosuel();
  ch8se.menuToggle();
  ch8se.menuFix();
  ch8se.menuAnimation();
  ch8se.opacitySlider();
  ch8se.fixProductHeight();
  ch8se.productView();
  ch8se.champSubscribe();
  ch8se.fixIframeSizePage();
  ch8se.homePageLoader();
  ch8se.initParallax();
  ch8se.shopFixes();

  if (!$('.carousel').length) ch8se.instafeedInit(); //If there is no carousel load instafeed, if there is instafeed is loaded from ch8se.initCarosuel()



  $(window).on('resize', function() {
    ch8se.menuFix();
    ch8se.fixProductHeight();
    ch8se.fixIframeSizePage();
    // ch8se.fixIframeSize();
  });

  $('.um-header').each(ch8se.codeRedeem);




  


  //TODO add these into seperate functions


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


  // Add overlay on homepage
  if (window.location.pathname === '/') {
    $('body').append(`
      <div class="overlay" style="display: block;">
        <div class="box">
          <h1><a href="http://www.indiegogo.com/projects/ch8se" target="_blank">Check us out on indiegogo</a></h1>
          <a href="http://www.indiegogo.com/projects/ch8se" target="_blank"><img src="http://www.ch8se.com/wp-content/uploads/2016/04/IMG_4046.jpg" /></a>
          <span class="close">X</span>
        </div>
      </div>
    `);

    $('.overlay').on('click', e => {
      e.stopPropagation();
      $('.overlay').remove();
    });
  }


}

/*
 * Copy text to clipboard
 */
function copyToClipboard(textToCopy) {
  $('.mail-copy').addClass('show-popup');
  $("body")
    .append($('<input type="text" name="fname" class="textToCopyInput"/>' ).val(textToCopy))
    .find(".textToCopyInput")
    .select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {}

  $('.textToCopyInput').remove();
}

/*
 * Generate random ID from numbers and letters
 */
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


/*
 * True window width and height, returns same value in all browsers.
 */
function trueWindowWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
function trueWindowHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}


/*
 * Loader for homepage image
 */
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


/*
 * Main menu animation on mouse hover...
 */
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

/*
 * Main menu fix on variouse resolution
 * moves submenu element to correct position on desktop
 * Adds spetial class for submenus for mobile
 */
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



ch8se.fixIframeSizePage = function() {
  var $videoWrapper = $('.videoWrapper');
  $videoWrapper.css({height: ($videoWrapper.width() * 9 / 16)});
}



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


/*
 * Instagram feed
 * Searches for 'instafeed' class and depending on data attributes applies filters to instagram query
 * options for data:
 * @slideshow {Boolean} - Will apply slick slider to instagram feed and allow scrolling of it if true
 * @tagName {String} - Fetches images by tag name
 * @userId {String} - Fetches images by user ID - preffer over userName if possible
 * @userName {String} - Fetches images by user name
 *
 * Example of element: <div data-tag-name="car"></div>
 */
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


/*
 * Slider for automatic and instant image changing
 */
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


/*
 * Simple parralax effect
 */
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


/*
 * Carousel initiation
 * Doesn't load images untill they are slided to
 */
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


/*
 * General fixes on shop page
 */
ch8se.shopFixes = function() {
  var $product = $('.type-product');

  $product.find('.entry-summary > h1').each((i, el) => {
    var $title = $(el);

    $title.wrap('<div class="title"></div>');
    $title.after(`
      <h4>the firestarter collection</h4>
        <br>
      <h5>- handcrafted in europe -</h5>`
    );
  });


  $product.find('.product_meta').after(
    `<div class="social invert">
      <p>Share</p>
      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${window.location}"><i class="fa fa-facebook"></i></a>
      <a target="_blank" href="https://twitter.com/home?status=${window.location}"><i class="fa fa-twitter"></i></a>
    </div>`
  );
}


/*
 * Redeem codes functionality
 * Exists on user page
 */
ch8se.codeRedeem = function() {
  var $this = $(this);

  // console.log(wpApiSettings);

  var counter = `
  <div class="counter-wrap">
    <h2>Your contribution</h2>
    <div class="counter clearfix">
      <span class="trees">0</span><br>
      <span class="food">0</span><br>
      <span class="water">0</span>
    </div>
    <div class="redeem">
      <h3>You can redeem your code here</h3>
      <input type="text" />
      <button class="btn">Submit</button>
      <p class="message"></p>
    </div>
  </div>`;

  $this.append(counter);

  var impactTypes = ['trees', 'food', 'water'];
  var impact = {};
  var userId = $('.um-profile-photo').data('user_id');
  /*
   * Fetch user meta for impact and populate counters
   */
  $.ajax({
    url: wpApiSettings.root + 'wp/v2/users/' + userId,
    method: 'GET',
    beforeSend: function ( xhr ) {
      xhr.setRequestHeader( 'X-WP-Nonce', wpApiSettings.nonce );
    },
  }).done((data) => {

    //If user has no impact
    if (!data.impact.length) return;

    impact = JSON.parse(data.impact[0]);

    updateCounter(impact);
  });

  function updateCounter(data) {
    impactTypes.forEach(item => {
      var clr = null;
      var $item = $this.find('.' + item);
      var loop;

      if (!data[item]) {
        $item.html('0');
        return;
      }

      var diff = data[item] - parseInt($item.html());

      var jump = diff > 50 ? (diff > 100 ? 10 : 5) : 1;

      (loop = function() {
        $item.html(parseInt($item.html()) + jump);
        if (parseInt($item.html()) >= data[item]) {
          $item.html(parseInt(data[item]));
          return;
        }
        clr = setTimeout(loop, 30);
      })();
    });
  }

  function handleError(error) {
    $this.find('p.message').text(error).css({opacity: '1', borderColor: 'red'});
  }

  function clearError() {
    $this.find('p.message').css({opacity: '0'});
    setTimeout(function() {
      $this.find('p.message').text('');
    }, 500);
  }

  function handleSuccess(message) {
    $this.find('p.message').text(message).css({opacity: '1', borderColor: 'green'});
  }

  

  /*
   * Handle input of new data
   */
  var $redeem = $this.find('.redeem input');
  var $submit = $redeem.next('button');

  $redeem.on('keydown', (e) => { if (e.keyCode === 13) handleRedeem(e) });
  $submit.on('click', handleRedeem);

  function handleRedeem(e) {
    e.preventDefault();
    var val = $redeem.val();

    //If field is empty don't even proceed
    if (!val.length) {
      handleError('Code field is empty');
      return;
    }

    //Fetch redeem code and check its trees/food/water
    $.ajax({
      url: wpApiSettings.root + 'wp/v2/code-api/?filter[title]=' + val,
      method: 'GET',
      beforeSend: function ( xhr ) {
        xhr.setRequestHeader( 'X-WP-Nonce', wpApiSettings.nonce );
      },
    }).done((data) => {

      if (data.length) { //Check if anything is returned
        var code = data[0];

        //check it code is not used
        if (code.state !== 'used') {

          impactTypes.forEach(type => {
            if (code[type].length) impact[type] += parseInt(code[type]);
          });

          updateUser(impact, code.id);

        } else { 
          //Handle bad code.state
          handleError('Code you have provided has already been used');
        }

      } else {
        //Handle no data or invalid code
        handleError('Invalid code, if you are sure code should be valid please contact us at hello@ch8se.com');
      }

      
    }).error((error) => {
      //Ajax error
      handleError('An error has occured, please try again later or contact us at hello@ch8se.com');
    });
  }

  function updateUser(data, codeId) {
    services.post({
      callback: (cData) => {
        updateCounter(data);
        updateCode(codeId, cData.username);
        handleSuccess('Thank you for your impact');
        $redeem.val('');
      },
      error: (error) => {handleError('An error has occured, please try again later or contact us at hello@ch8se.com')},
      endpoint: 'users',
      id: userId,
      data: {
        impact: JSON.stringify(data)
      }
    });
  }

  function updateCode(codeId, username) {
    services.post({
      endpoint: 'code-api',
      id: codeId,
      data:{
        state: 'used',
        user: username
      }
    });
  }
}


ch8se.init();

});
