$(function() {
  ///// variables
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // get all slides
  var slides = document.querySelectorAll('.scene');

  // video slide
  var videoSlide = $('.dispatch-video')[0];

  // create scene for every slide
  slides.forEach(function(slide) {
    new ScrollMagic.Scene({
      triggerElement: slide
    })
      .setPin(slide)
      .addTo(controller);
  });

  var newController = new ScrollMagic.Controller({
    globalSceneOptions: { duration: '100%' }
  });

  // building scenes: toggle css classes for elements
  // new ScrollMagic.Scene({ triggerElement: '#video' })
  //   .setClassToggle('#side-nav-logo', 'active')
  //   .addTo(newController);
  // new ScrollMagic.Scene({ triggerElement: '#about', triggerHook: 0.25 })
  //   .setClassToggle('#high2', 'active')
  //   .addTo(newController);
  // new ScrollMagic.Scene({ triggerElement: '#portfolio' })
  //   .setClassToggle('#high3', 'active')
  //   .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#portfolio2' })
    .on('leave', function() {
      videoSlide.trigger('pause');
    })
    .on('enter', function() {
      var slideNo = $(this).superslides('current');
      if (slideNo === 3) {
        videoSlide.play();
      }
    });
  //   .setClassToggle('#high3', 'active')
  //   .addTo(newController);
  // new ScrollMagic.Scene({ triggerElement: '#portfolio3' })
  //   .setClassToggle('#high3', 'active')
  //   .addTo(newController);
  // new ScrollMagic.Scene({ triggerElement: '#services' })
  //   .setClassToggle('#high4', 'active')
  //   .addTo(newController);
  // new ScrollMagic.Scene({ triggerElement: '#contact' })
  //   .setClassToggle('#high5', 'active')
  //   .addTo(newController);
  // new ScrollMagic.Scene({ triggerElement: '#about', triggerHook: 0.75 })
  //   .setClassToggle('.contactus', 'active2')
  //   .addIndicators()
  //   .addTo(newController);
  // new ScrollMagic.Scene({ triggerElement: '#about', triggerHook: 0.6 })
  //   .setClassToggle('.servicesoffered', 'active2')
  //   .addIndicators()
  //   .addTo(newController);
  // new ScrollMagic.Scene({ triggerElement: '#about', triggerHook: 0.42 })
  //   .setClassToggle('.portfolioprojects', 'active2')
  //   .addIndicators()
  //   .addTo(newController);
  // new ScrollMagic.Scene({ triggerElement: '#about', triggerHook: 0.25 })
  //   .setClassToggle('.aboutus', 'active2')
  //   .addIndicators()
  //   .addTo(newController);

  // new ScrollMagic.Scene({ triggerElement: '#portfolio' })
  //   .setClassToggle('.listOfContents', 'active2')
  //   // .addIndicators()
  //   .addTo(newController);
  // new ScrollMagic.Scene({ triggerElement: '#services' })
  //   .setClassToggle('.listOfContents', 'active2')
  //   // .addIndicators()
  //   .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#contact' })
    .on(
      'update',
      setInterval(function() {
        typeWriter('rrrrrrrad', 0);
      }, 2000)
    )
    .addTo(newController);
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i) {
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

  $('#slides-1, #slides-3').superslides({
    hashchange: true,
    pagination: true,
    play: 2000
  });

  $('#slides-2').superslides({
    hashchange: true,
    pagination: true,
    play: 2000
  });

  $('#slides-2').on('animated.slides', function() {
    var slideNo = $(this).superslides('current');
    if (slideNo === 3) {
      $(this).superslides('stop');
      videoSlide.play();
      videoSlide.on('ended', function() {
        $('#slides-2').superslides('start');
      });
    }
  });
});
