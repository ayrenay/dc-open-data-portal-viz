// smooth-scroll.js

smoothScroll.init({speed: 1000});

// Modaal

$(document).ready(function(){
  $('.modaal-image').modaal({
    type: 'image'
  });
});

// Headroom.js

var header = document.querySelector('#home');

var headroom = new Headroom(header, {
  tolerance: 10
  , offset: 200
});

headroom.init();