(function($){
  
  $(document).ready(function() {
    
    $('.gram').on("click", function() {
      var index = $(this).attr("data-index")
      $('.gram-content').animate({top: '450',opacity : 1}, "slow");
      $('.grid-grams').animate({top: 2000,opacity : 0}, "slow");
      $('.slider-outer').animate({top: 0, opacity : 1},"fast");
    });
    
    $('.slider_gram img').on("click", function() {
      $('.gram-content').animate({"top": '2000',"opacity" : '0'}, "slow");
      $('.grid-grams').animate({"top": '0',"opacity" : '1'}, "slow");
      $('.slider-outer').animate({top: -450, opacity : 0},"fast");
    });
    
    
    
    
  });
})(jQuery);
