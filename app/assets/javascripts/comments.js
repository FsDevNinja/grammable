$( document ).ready(function() {
  
  $('.comment-close').on("click", function() {
    console.log(this);
    $('.gram-content').animate({top: '450',opacity : 1}, "fast");
    $('.content-fade').animate({"top" : 0, "opacity" : 1}, "slow");
    $('.comment-fade').animate({"top" : "-200px", "opacity" : '0'}, "slow");
  });
  
  
});
