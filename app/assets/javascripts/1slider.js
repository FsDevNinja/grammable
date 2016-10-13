(function($) {
  
  $( document ).ready(function() {
    
    var defaults = {
      waitTime : 400,
      
    };
    
    $('.gram').on("click", function() {
      var slideIndex = $(this).attr("data-index")
      console.log(slideIndex);
      $('.gram-content').animate({top: '450',opacity : 1}, "slow");
      $('.grid-grams').animate({top: 2000,opacity : 0}, "slow");
      $('.slider-outer').animate({top: 0, opacity : 1},"fast");
    });
    
    $('.slider_gram img').on("click", function() {
      $('.gram-content').animate({"top": '2000',"opacity" : '0'}, "slow");
      $('.grid-grams').animate({"top": '0',"opacity" : '1'}, "slow");
      $('.slider-outer').animate({top: -450, opacity : 0},"fast");
    });
    
    
    
    function gramSlider(element, settings){
      
      this.options = {};
      this.element = element;
      
      
      
      $.extend(this.options, defaults, settings);
      
      this.sliderOuter = this.element;
      console.log(this.sliderOuter.width());
      this.autoSlide = this.options.autoSlide;
      
      this.sliderInner = $(this.options.sliderInner);
      
      this.wrapper = $(this.options.wrapper);
      
      this.leftGram = $(this.options.leftGram);
      console.log(this.leftGram.width());
      this.rightGram = $(this.options.rightGram);
      console.log(this.rightGram.width());
      this.customHeight = $(this.options.customHeight);
      
      this.sliderGram = $(this.options.sliderGram);
      
      this.singleImageWidth = this.sliderOuter.width() - (this.leftGram.width() + this.rightGram.width());
      console.log(this.singleImageWidth);
      
      this.leftLink = $(this.options.leftLink);
      
      this.rightLink = $(this.options.rightLink);
      
      this.init();
      
    }
    
    gramSlider.prototype.init = function(){
      
      var parent = this;
      numberOfImages = $(parent.sliderGram).length;
      
      $(".center-wrap").width(parent.singleImageWidth);
      parent.wrapper.width((numberOfImages * parent.singleImageWidth));
      console.log(parent.wrapper.width());
      
      parent.sliderInner.height(parent.customHeight).width(parent.singleImageWidth);
      parent.leftGram.height(parent.customHeight);
      parent.rightGram.height(parent.customHeight);
      $(parent.sliderGram).height(parent.customHeight);
      
      $(parent.sliderGram).eq($(parent.sliderGram).length - 1).insertBefore($(parent.sliderGram).eq(0));
      
      var originalWaitTime = parent.waitTime;
      parent.waitTime = 0;
      parent.slideLeft();
      parent.waitTime = originalWaitTime;
      var linkHeight = parent.leftLink.height();
      var leftGramHeight = parent.sliderInner.height();
      
      
      
      parent.leftLink.css({"top" : ((leftGramHeight - linkHeight)/2) + "px"}).on("click", function() {
        parent.slideRight.call(parent);
      });
      parent.rightLink.css({"top" : ((leftGramHeight - linkHeight)/2) + "px"}).on("click", function() {
        parent.slideLeft.call(parent);
      });
      
      
    };
    
    
    
    
    
    gramSlider.prototype.slideLeft = function() {
      var parent = this;
      
      // if(parseInt(parent.wrapper.css("left").replace("px","")) == -(parent.singleImageWidth)){
      //   var first = $(parent.sliderGram).first();
      //   var last = $(parent.sliderGram).last();
      //
      //   first.insertAfter(last);
      //   var originalWaitTime = parent.waitTime;
      //   parent.waitTime = 0;
      //   parent.wrapper.animate({"left" : "+=" +parent.singleImageWidth + "px"}, parent.waitTime);
      //   parent.waitTime = originalWaitTime;
      //
      // }
      $(parent.sliderGram).eq($(parent.sliderGram).length - 1).insertBefore($(parent.sliderGram).eq(0));
      parent.wrapper.animate({"left" : "-=" + parent.singleImageWidth + "px"}, parent.waitTime);
      
    };
    
    gramSlider.prototype.slideRight = function() {
      var parent = this;
      // if(parseInt(parent.wrapper.css("left").replace("px","")) == -(parent.singleImageWidth)){
      //   var first = $(parent.sliderGram).first();
      //   var last = $(parent.sliderGram).last();
      //
      //   last.insertBefore(first);
      //
      //   var originalWaitTime = parent.waitTime;
      //   parent.waitTime = 0;
      //   parent.wrapper.animate({"left": "-=" + parent.singleImageWidth + "px"}, parent.waitTime);
      //   parent.waitTime = originalWaitTime;
      //
      // };
      
      parent.wrapper.animate({"left" : "+=" + parent.singleImageWidth + "px"}, parent.waitTime);
      
    };
    
    
    
    $.fn.slider = function(setting){
      
      var $this = this;
      new gramSlider($this, setting);
      
      return $this;
      
      
    };
    
    
    
    
    
    
  });
})(jQuery);
