(function($){
  
  $(document).ready(function() {
    
    $(".slider-outer").slider({
      waitTime : 2000,
      sliderInner : ".slider-inner",
      wrapper : ".wrapper",
      leftGram : ".left_gram",
      rightGram : ".right_gram",
      sliderGram : ".center-wrap",
      customHeight: 450,
      leftLink : ".left-link",
      rightLink : ".right-link",
      autoSlide : true,
    });
    
  });
})(jQuery);
