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

  var largeScreen = $(window).width() > 768;
  var tabletScreen = $(window).width() <= 768 && $(window).width() > 520;
  var smallScreen = $(window).width() <= 520;

  var stopTyping = false;

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

  // video slide
  var videoSlide = $('.dispatch-video');

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // change jump to smooth scroll
  controller.scrollTo(function(id) {
    TweenMax.to(window, 0.9, {
      scrollTo: {
        y: id,
        autoKill: true // Allow scroll position to change outside itself
      },
      ease: Cubic.easeInOut
    });
  });

  // create scene for every slide
  scenes.forEach(function(scene, i) {
    window['scene' + (i + 1)] = new ScrollMagic.Scene({ triggerElement: scene })
      .setPin(scene, { pushFollowers: false })
      .addTo(controller);
  });

  window.scene1.on('update', function(e) {
    var startPos = e.startPos;
    var scrollPos = e.scrollPos;

    var pos = round(scrollPos / startPos, 2);

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

    // page 2
    if (pos > 1 && pos <= 2) {
      if (pos >= 1.51) {
        addToClass(navPortfolioA, 'active');
        removeToClass(navAboutA, 'active');
      } else {
        removeToClass(navPortfolioA, 'active');
        addToClass(navAboutA, 'active');
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
      } else {
        addToClass(navPortfolioA, 'in');
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
    // page 4
    if (pos > 3 && pos <= 4) {
      if (pos >= 3.14) {
        addToClass(navContactA, 'in');
      } else {
        removeToClass(navContactA, 'in');
      }
      if (pos >= 3.32) {
        addToClass(navServicesA, 'in');
      } else {
        removeToClass(navServicesA, 'in');
      }
      if (pos >= 3.51) {
        addToClass(navPortfolioA, 'in');
      } else {
        removeToClass(navPortfolioA, 'in');
      }
      if (pos >= 3.69) {
        addToClass(navAboutA, 'in');
      } else {
        removeToClass(navAboutA, 'in');
      }
      if (pos >= 3.87) {
        addToClass(navRadA, 'in');
      } else {
        removeToClass(navRadA, 'in');
      }
    }
    // page 5
    if (pos > 4 && pos <= 5) {
      if (pos >= 4.51) {
        addToClass(navServicesA, 'active');
        addToClass(navPortfolioA, 'in');
        removeToClass(navPortfolioA, 'active');
      } else {
        addToClass(navServicesA, 'in');
        removeToClass(navServicesA, 'active');
        addToClass(navPortfolioA, 'active');
      }
    }

    // page 6
    if (pos > 5 && pos <= 6) {
      if (pos >= 5.14) {
        removeToClass(navContactA, 'in');
      } else {
        addToClass(navContactA, 'in');
      }
      if (pos >= 5.32) {
        removeToClass(navServicesA, 'in');
      } else {
        addToClass(navServicesA, 'in');
      }
      if (pos >= 5.51) {
        removeToClass(navPortfolioA, 'in');
        addToClass(navContactA, 'active');
        removeToClass(navServicesA, 'active');
      } else {
        addToClass(navPortfolioA, 'in');
        removeToClass(navContactA, 'active');
        addToClass(navServicesA, 'active');
      }
      if (pos >= 5.69) {
        removeToClass(navAboutA, 'in');
      } else {
        addToClass(navAboutA, 'in');
      }
      if (pos >= 5.87) {
        removeToClass(navRadA, 'in');
      } else {
        addToClass(navRadA, 'in');
      }
    }
  });

  // handle nav item click event
  [navAboutA, navContactA, navPortfolioA, navRadA, navServicesA].forEach(
    function(item) {
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
    }
  );

  $(window).resize(function(e) {
    var w = $(e.target);
    changeTextOnResize(w);

    // slides update
    [slide1, slide2, slide3].forEach(function(slide) {
      slide.superslides('update');
    });
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

  // video
  [window.scene2, window.scene3, window.scene4].forEach(function(scene, i) {
    scene.on('enter leave', function(e) {
      if (i === 0) {
        if (e.type === 'enter') {
          slide1.superslides('start');
          slide2.superslides('stop');
          slide3.superslides('stop');
        } else {
          slide1.superslides('stop');
        }
      }
      if (i === 1) {
        if (e.type === 'enter') {
          currentScene = 3;
          videoSlide[0].play();
          slide2.superslides('start');
          slide1.superslides('stop');
          slide3.superslides('stop');
        } else {
          currentScene = 2;
          videoSlide[0].pause();
          slide2.superslides('stop');
          slide1.superslides('start');
        }
      }
      if (i === 2) {
        if (e.type === 'enter') {
          slide1.superslides('stop');
          slide2.superslides('stop');
          slide3.superslides('start');
        } else {
          slide3.superslides('stop');
          slide2.superslides('start');
        }
      }
    });
  });

  window.scene3.on('enter', function(e) {
    currentScene = 3;
    videoSlide[0].play();
  });

  window.scene4.on('enter', function(e) {
    currentScene = 4;
    videoSlide[0].pause();
  });

  /////// superslides //////////////////////////////////////////////////////////////////////////

  $('#slides-1, #slides-2, #slides-3').superslides({
    hashchange: false,
    pagination: true,
    play: 2000
  });

  slide2.on('animated.slides', function() {
    var slideNo = slide2.superslides('current');
    if (slideNo === 3) {
      slide2.superslides('stop');
      videoSlide[0].play();
      videoSlide.bind('ended', function() {
        videoSlide[0].pause();
        slide2.superslides('start');
      });
    } else {
      videoSlide[0].pause();
    }
  });

  /////// UTILS  ////////////////////////////////////////////////////////////////
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
    } else {
      setTimeout(function() {
        typeWriter(text, 0);
      }, 150);
    }
  }

  function changeTextOnResize(w) {
    var largeScreen = w.width() > 768;
    var tabletScreen = w.width() <= 768 && w.width() > 520;
    var smallScreen = w.width() <= 520;
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
});
