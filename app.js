$(document).ready(function(){
  //cache the window object
  $window = $(window);

  $('section[data-type="background"]').each(function() {
    //loop thru all elements with data-type
    var $scroll = $(this);
    $(window).scroll(function(){
        //use negative values due to scrolling upwards
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
        //background position
        var coords = '50% ' + yPos + 'px';
        //move the bg
        $scroll.css({backgroundPosition: coords});
      }); //end window scroll fx


  });//end of section loop


});//end of document ready