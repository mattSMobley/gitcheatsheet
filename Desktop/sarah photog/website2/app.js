$(document).ready(function() {
  $('#slides').slidesjs({
    width: 700,
    height: 393,
    pagination: {
      active: true,
      // [boolean] Create pagination items.
      // You cannot use your own pagination. Sorry.
      effect: "fade"
        // [string] Can be either "slide" or "fade".
    },
    play: {
      active: true,
      auto: true,
      interval: 5000,
      swap: true,
      pauseOnHover: false,
      restartDelay: 2500,
      effect: "fade"
    },
    navigation: {
      active: true,
      // [boolean] Generates next and previous buttons.
      // You can set to false and use your own buttons.
      // User defined buttons must have the following:
      // previous button: class="slidesjs-previous slidesjs-navigation"
      // next button: class="slidesjs-next slidesjs-navigation"
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    },
    effect: {
      slide: {
        // Slide effect settings.
        speed: 200
          // [number] Speed in milliseconds of the slide animation.
      },
      fade: {
        speed: 800,
        // [number] Speed in milliseconds of the fade animation.
        crossfade: true
          // [boolean] Cross-fade the transition.
      }
    }
  });
});

$(document).ready(function() {
$('#phoneDiv').one('click', function() {
  $('.fa-phone').remove();
  var phone = $('<div class="fade-in" style="padding-top: 6.5em;"><span class="replaceDiv">Call 1-555-sarah-img to book a session!</span></div>');
  $('#phone').append(phone);
});

});

$(document).ready(function() {
$('#emailDiv').one('click', function() {
  var email = $('<div class="fade-in" style="padding-top: 11em;"><span class="replaceDiv"><a href="mailto:sarah@sarahhamiltonphotography.com?Subject=Hey%20Sarah!" target="_top">Send Me An Email!</a></span></div>');
  $('#emailDiv').append(email);
  $('#email').remove();
});
});
