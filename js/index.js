$(function() {
  ///// variables
  var navContact = $('#high5');
  var navServices = $('#high4');
  var navPortfolio = $('#high3');
  var navAbout = $('#high2');
  var navRad = $('#side-nav-logo');

  var navContactA = $('#high5a');
  var navServicesA = $('#high4a');
  var navPortfolioA = $('#high3a');
  var navAboutA = $('#high2a');
  var navRadA = $('#side-nav-logoa');
  var sectionIndicator = $('#sectionIndicator');

  var largeScreen = $(window).width() > 768;
  var tabletScreen = $(window).width() <= 768 && $(window).width() > 520;
  var smallScreen = $(window).width() <= 520;

  var stopTyping = false;
  var radAnimation = $('.rad-animation');

  ///// slides
  var slide1 = $('#slides-1');
  var slide2 = $('#slides-2');
  var slide3 = $('#slides-3');

  /////// RAD /////
  var rad;
  firstRad();
  // get all scenes
  var scenes = document.querySelectorAll('.scene');
  var currentScene = 0;
  var sceneHeight;

  // video slide
  var video = $('.dispatch-video');
  var videoSlide = $('.videoSlide');
  var playBtn = $('#play');
  var pauseBtn = $('#pause');
  var btnContainer = $('.playBtn');

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // change jump to smooth scroll
  controller.scrollTo(function(id) {
    TweenMax.to(window, 1, {
      scrollTo: id,
      ease: Cubic.easeInOut
    });
  });

  // create scene for every slide
  scenes.forEach(function(scene, i) {
    sceneHeight = $(scene).height();
    window['scene' + (i + 1)] = new ScrollMagic.Scene({ triggerElement: scene })
      .setPin(scene, { pushFollowers: false })
      .addTo(controller);
  });

  /// scroll to top of each section
  var scrollDirection;
  [window.scene1, window.scene2, window.scene3, window.scene4, window.scene5, window.scene6].forEach(function(s) {
    s.on('progress', function(e) {
      scrollDirection = e.scrollDirection;
    });
  });

  var resize = function(e) {
    var width = $(this).width();
    if (width < 520 || (width > 520 && width < 768)) {
      navAboutA.text('');
      navContactA.text('');
      navPortfolioA.text('');
      navServicesA.text('');
    } else {
      navAboutA.text('About');
      navContactA.text('Contact');
      navPortfolioA.text('Portfolio');
      navServicesA.text('Services');
    }
  };

  var debounceResize = debounce(resize, 100);

  $(window).on('resize', debounceResize);

  var update = function(e) {
    var startPos = e.startPos;
    var scrollPos = e.scrollPos;

    var pos = round(scrollPos / startPos, 2);
    scrollEffects(pos);

    if (largeScreen) {
      ///// nav bar effect
      // page 1
      if (pos <= 1) {
        // toggle contact color
        if (pos >= 0.14) {
          addToClass(navContactA, 'in');
        } else {
          removeToClass(navContactA, 'in');
        }
        // toggle service color
        if (pos >= 0.32) {
          addToClass(navServicesA, 'in');
        } else {
          removeToClass(navServicesA, 'in');
        }
        // toggle porfolio color
        if (pos >= 0.51) {
          addToClass(navPortfolioA, 'in');
        } else {
          removeToClass(navPortfolioA, 'in');
        }
        //toggle about color and underline
        if (pos >= 0.69) {
          addToClass(navAboutA, 'in');
          addToClass(navAboutA, 'active');
        } else {
          removeToClass(navAboutA, 'in');
          removeToClass(navAboutA, 'active');
        }
        // toggle rad
        if (pos >= 0.87) {
          addToClass(navRadA, 'in');
        } else {
          removeToClass(navRadA, 'in');
        }
      }

      // page 3
      if (pos > 2 && pos <= 3) {
        if (pos >= 2.14) {
          removeToClass(navContactA, 'in');
        } else {
          addToClass(navContactA, 'in');
        }
        if (pos >= 2.32) {
          removeToClass(navServicesA, 'in');
        } else {
          addToClass(navServicesA, 'in');
        }
        if (pos >= 2.51) {
          removeToClass(navPortfolioA, 'in');
          addToClass(navPortfolioA, 'active');
          removeToClass(navAboutA, 'active');
        } else {
          addToClass(navPortfolioA, 'in');
          removeToClass(navPortfolioA, 'active');
          addToClass(navAboutA, 'active');
        }
        if (pos >= 2.69) {
          removeToClass(navAboutA, 'in');
        } else {
          addToClass(navAboutA, 'in');
        }
        if (pos >= 2.87) {
          removeToClass(navRadA, 'in');
        } else {
          addToClass(navRadA, 'in');
        }
      }

      // page 5
      if (pos > 4 && pos <= 5) {
        if (pos >= 4.14) {
          addToClass(navContactA, 'in');
        } else {
          removeToClass(navContactA, 'in');
        }
        if (pos >= 4.32) {
          addToClass(navServicesA, 'in');
        } else {
          removeToClass(navServicesA, 'in');
        }
        if (pos >= 4.51) {
          addToClass(navPortfolioA, 'in');
        } else {
          removeToClass(navPortfolioA, 'in');
        }
        if (pos >= 4.69) {
          addToClass(navAboutA, 'in');
        } else {
          removeToClass(navAboutA, 'in');
        }
        if (pos >= 4.87) {
          addToClass(navRadA, 'in');
        } else {
          removeToClass(navRadA, 'in');
        }
      }

      // page 6
      if (pos > 8 && pos <= 9) {
        if (pos > 8.32) {
          removeToClass(navPortfolioA, 'active');
          addToClass(navServicesA, 'active');
        } else {
          removeToClass(navServicesA, 'active');
          addToClass(navPortfolioA, 'active');
        }
      }

      if (pos > 10 && pos <= 11) {
        if (pos >= 10.14) {
          removeToClass(navContactA, 'in');
        } else {
          addToClass(navContactA, 'in');
        }
        if (pos >= 10.32) {
          removeToClass(navServicesA, 'in');
        } else {
          addToClass(navServicesA, 'in');
        }
        if (pos >= 10.51) {
          removeToClass(navPortfolioA, 'in');
          addToClass(navContactA, 'active');
          removeToClass(navServicesA, 'active');
        } else {
          addToClass(navPortfolioA, 'in');
          removeToClass(navContactA, 'active');
          addToClass(navServicesA, 'active');
        }
        if (pos >= 10.69) {
          removeToClass(navAboutA, 'in');
        } else {
          addToClass(navAboutA, 'in');
        }
        if (pos >= 10.87) {
          removeToClass(navRadA, 'in');
        } else {
          addToClass(navRadA, 'in');
        }
      }
    }

    if (smallScreen || tabletScreen) {
      // page 1
      if (pos < 1) {
        if (pos >= 0.72) {
          sectionIndicator.text('About');
          navContactA.css('border-color', 'black');
        } else {
          sectionIndicator.text('');
          navContactA.css('border-color', 'white');
        }

        if (pos >= 0.76) {
          navServicesA.css('border-color', 'black');
        } else {
          navServicesA.css('border-color', 'white');
        }

        if (pos >= 0.81) {
          navPortfolioA.css('border-color', 'black');
        } else {
          navPortfolioA.css('border-color', 'white');
        }

        if (pos >= 0.86) {
          navAboutA.css({
            'border-color': 'black',
            'background-color': 'black'
          });
        } else {
          navAboutA.css({
            'border-color': 'white',
            'background-color': 'transparent'
          });
        }

        if (pos >= 0.92) {
          navRadA.css('color', 'black');
        } else {
          navRadA.css('color', 'white');
        }
      }

      if (pos > 2 && pos <= 3) {
        if (pos > 2.64) {
          sectionIndicator.text('Portfolio');
          navPortfolioA.css({ 'background-color': 'black' });
          navAboutA.css({ 'background-color': 'transparent' });
        } else {
          sectionIndicator.text('About');
          navPortfolioA.css({ 'background-color': 'transparent' });
          navAboutA.css({ 'background-color': 'black' });
        }
      }

      if (pos > 8 && pos <= 9) {
        if (pos > 8.64) {
          sectionIndicator.text('Services');
          navServicesA.css({ 'background-color': 'black' });
          navPortfolioA.css({ 'background-color': 'transparent' });
        } else {
          sectionIndicator.text('Portfolio');
          navPortfolioA.css({ 'background-color': 'black' });
          navServicesA.css({ 'background-color': 'transparent' });
        }
      }

      if (pos > 10 && pos <= 11) {
        if (pos >= 10.72) {
          navContactA.css({ 'border-color': 'white', color: 'white' });
        } else {
          navContactA.css({ 'border-color': 'black', color: 'transparent' });
        }

        if (pos >= 10.76) {
          navServicesA.css('border-color', 'white');
        } else {
          navServicesA.css('border-color', 'black');
        }

        if (pos >= 10.81) {
          navPortfolioA.css('border-color', 'white');
        } else {
          navPortfolioA.css('border-color', 'black');
        }

        if (pos >= 10.86) {
          navAboutA.css('border-color', 'white');
          navRadA.css('color', 'white');
        } else {
          navAboutA.css('border-color', 'black');
          navRadA.css('color', 'black');
        }

        if (pos > 10.64) {
          sectionIndicator.text('Contact');
          sectionIndicator.css('color', 'white');
          navServicesA.css({ 'background-color': 'transparent' });
          navContactA.css({ 'background-color': 'white' });
        } else {
          sectionIndicator.text('Services');
          sectionIndicator.css('color', 'black');
          navContactA.css({ 'background-color': 'transparent' });
          navServicesA.css({ 'background-color': 'black' });
        }
      }
    }
  };

  var debounceUpdate = debounce(update, 100);

  window.scene1.on('update', debounceUpdate);

  // handle nav item click event
  [navAboutA, navContactA, navPortfolioA, navRadA, navServicesA].forEach(function(item) {
    item.on('click', function(e) {
      var id = $(this).attr('href');
      if (id !== null) {
        if (id.length > 0) {
          e.preventDefault();
          controller.scrollTo(id);
          if (window.history && window.history.pushState) {
            history.pushState('', document.title, id);
          }
        }
      }
    });
  });

  $(window).resize(function(e) {
    var w = $(this);
    changeTextOnResize(w);
  });

  // add typewrite effect on last slide
  window.scene5.on('progress', function(e) {
    stopTyping = false;
    if (e.state === 'DURING') {
      typeWriter(rad, 0);
    }
  });

  // stop typing when leaving the scene
  window.scene5.on('leave', function(e) {
    stopTyping = true;
  });

  // video controls
  videoSlide.on('click', function() {
    var paused = video[0].paused;
    if (paused) {
      playBtn.addClass('hide');
      pauseBtn.addClass('show');
      video[0].play();
      setTimeout(function() {
        btnContainer.addClass('hide');
      }, 1000);
    } else {
      btnContainer.removeClass('hide');
      playBtn.removeClass('hide');
      pauseBtn.removeClass('show');
      video[0].pause();
    }
  });

  /////////// nav bar small medium screen ///////////////////

  if (tabletScreen || smallScreen) {
    [navAboutA, navContactA, navPortfolioA, navServicesA].forEach(function(item) {
      item.text('');
    });
  }

  /////// superslides //////////////////////////////////////////////////////////////////////////

  $('#slides-1, #slides-2, #slides-3').superslides({
    hashchange: false,
    pagination: true
  });

  /////// UTILS  ////////////////////////////////////////////////////////////////
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  function addToClass(element, className) {
    if (!element.hasClass(className)) {
      element.addClass(className);
    }
  }

  function removeToClass(element, className) {
    if (element.hasClass(className)) {
      element.removeClass(className);
    }
  }
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i) {
    if (stopTyping) {
      return;
    }
    // check if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector('.rad-animation').innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1);
      }, 150);
    }
  }

  function changeTextOnResize(w) {
    var largeScreen = w.width() > 768;
    var tabletScreen = w.width() <= 768 && w.width() > 520;
    var smallScreen = w.width() <= 520;
    if (largeScreen) {
      rad = 'rrrrrrrad';
    } else if (tabletScreen) {
      rad = 'rrrrrad';
    } else if (smallScreen) {
      rad = 'rrrad';
    }
    radAnimation.text(rad);
  }

  function firstRad() {
    if (largeScreen) {
      rad = 'rrrrrrrad';
      return;
    }

    if (tabletScreen) {
      rad = 'rrrrrad';
      return;
    }

    if (smallScreen) {
      rad = 'rrrad';
      return;
    }
  }

  function scrollTo(y) {
    TweenMax.to(window, 0.5, {
      scrollTo: { y: y, autoKill: false }
    });
  }

  function scrollEffects(pos) {
    //// scroll to effect
    /// PAGE 2
    if (pos > 2 && pos < 3 && scrollDirection === 'FORWARD') {
      scrollTo(sceneHeight * 3);
    }
    if (pos < 2 && pos > 1) {
      scrollDirection = 'FORWARD';
    }

    /// PAGE 3
    if (pos > 4 && pos < 5 && scrollDirection === 'FORWARD') {
      scrollTo(sceneHeight * 5);
    }
    if (pos < 4 && pos > 3) {
      scrollDirection = 'FORWARD';
    }

    /// PAGE 4
    if (pos > 6 && pos < 7 && scrollDirection === 'FORWARD') {
      scrollTo(sceneHeight * 7);
    }
    if (pos < 6 && pos > 5) {
      scrollDirection = 'FORWARD';
    }

    /// PAGE 5
    if (pos > 8 && pos < 9 && scrollDirection === 'FORWARD') {
      scrollTo(sceneHeight * 9);
    }
    if (pos < 8 && pos > 7) {
      scrollDirection = 'FORWARD';
    }

    /// PAGE 6
    if (pos > 10 && pos < 11 && scrollDirection === 'FORWARD') {
      scrollTo(sceneHeight * 11);
    }
    if (pos < 10 && pos > 9) {
      scrollDirection = 'FORWARD';
    }
  }
});
