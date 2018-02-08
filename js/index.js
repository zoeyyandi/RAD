$(function() {
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // get all slides
  var slides = document.querySelectorAll('.scene');

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
  new ScrollMagic.Scene({ triggerElement: '#video' })
    .setClassToggle('#side-nav-logo', 'active')
    // .addIndicators()
    .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#about' })
    .setClassToggle('#high2', 'active')
    // .addIndicators()
    .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#portfolio' })
    .setClassToggle('#high3', 'active')
    // .addIndicators()
    .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#portfolio2' })
    .setClassToggle('#high3', 'active')
    // .addIndicators()
    .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#portfolio3' })
    .setClassToggle('#high3', 'active')
    // .addIndicators()
    .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#services' })
    .setClassToggle('#high4', 'active')
    // .addIndicators()
    .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#contact' })
    .setClassToggle('#high5', 'active')
    // .addIndicators()
    .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#about' })
    .setClassToggle('.listOfContents', 'active2')
    // .addIndicators()
    .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#portfolio' })
    .setClassToggle('.listOfContents', 'active2')
    // .addIndicators()
    .addTo(newController);
  new ScrollMagic.Scene({ triggerElement: '#services' })
    .setClassToggle('.listOfContents', 'active2')
    // .addIndicators()
    .addTo(newController);
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

  $('#slides-1, #slides-2, #slides-3').superslides();

  var projects = ['dispatch', 'womens mecca', 'woo'];

  $('.slides-pagination > a').on('click', function(e) {
    console.log($._data($('div#slides-1'), 'events'));
  });

  // $('.slides-pagination').ready(function() {
  //   projects.forEach(function(project) {
  //     $('.slides-pagination').prepend(
  //       `<p class="project-name"> ${project} </p>`
  //     );
  //   });
  // });
});
