(function($) {
  
  $( document ).ready(function() {
    
    var defaults = {
      waitTime : 400,
    };
    
    /*****************************************************
    *************** Setting up slider settings ***********
    *****************************************************/
    function gramSlider(element, settings){
      this.options = {};
      this.element = element;
      $.extend(this.options, defaults, settings)
      this.sliderOuter = this.element;
      this.autoSlide = this.options.autoSlide;
      this.sliderInner = $(this.options.sliderInner);
      this.wrapper = $(this.options.wrapper);
      this.leftGram = $(this.options.leftGram);
      this.rightGram = $(this.options.rightGram);
      this.customHeight = $(this.options.customHeight);
      this.sliderGram = $(this.options.sliderGram);
      this.singleImageWidth = this.sliderOuter.width() - (this.leftGram.width() + this.rightGram.width());
      this.leftLink = $(this.options.leftLink);
      this.rightLink = $(this.options.rightLink);
      this.numberOfImages = ($('.gram').length) + 4;
      
      init(this, this.numberOfImages);
    }
    
    /*****************************************************
    *************** Slider Initialization ***************
    *****************************************************/
    var slideIndex = 1;
    var currentSlideData = {index: -1};
    var contentFade = $('.content-fade');
    var currentSlide = null
    var numberOfImages = $('.gram').length;
    console.log(currentSlideData);
    console.log(numberOfImages);
    
    function init(parent, numberOfImages){
      
      var parent = parent;
      
      // setting numberOfImages variable
      
      //setting width of grams
      $(".center-wrap").width(parent.singleImageWidth + "px");
      // setting width of slider wrapper
      parent.wrapper.width((numberOfImages * parent.singleImageWidth));
      // setting height of slider
      parent.sliderInner.height(parent.customHeight).width(parent.singleImageWidth);
      
      $(parent.sliderGram).height(parent.customHeight);
      
      //setting rightTrigger
      console.log(numberOfImages);
      var rightTrigger = (parent.singleImageWidth * (numberOfImages - 3)* -1);
      console.log(rightTrigger);
      //storing wrapper position value
      var wrapper_offset = null;
      
      //setting leftTrigger
      var leftTrigger = (parent.singleImageWidth * -2);
      console.log(leftTrigger);
      
      
      /*****************************************************
      ***************   initial click id ***************
      *****************************************************/
      
      function parseIndexFromId(id) {
        var currentSlide = id.split("_");
        return  parseInt(currentSlide[currentSlide.length -1]);
      }
      
      /*****************************************************
      ***************   Show slider of grams ***************
      *****************************************************/
      
      $('.gram').on("click", function() {
        slideIndex = parseInt($(this).attr("data-index")) + 1;
        currentSlideData.index = parseIndexFromId($(this).attr('id'));
        //set initial value of gram content
        var title = $("#carousel_slide_" + currentSlideData.index).attr("data-title");
        var message = $("#carousel_slide_" + currentSlideData.index).attr("data-message");
        $('#gram-title').text(title)
        $('.gram-description').text(message);
        var indexCount = currentSlideData.index + "/" + (numberOfImages - 4);
        $('#index-count').text(indexCount);
        console.log(currentSlideData)
        
        $('.gram-content').animate({top: '450',opacity : 1}, "fast");
        $('.grid-grams').animate({top: 2000,opacity : 0}, "fast");
        $('.slider-outer').animate({top: 0, opacity : 1},"slow");
        parent.wrapper.animate({"left" : "-" + (parent.singleImageWidth * slideIndex )  + "px"}, 0);
        
      });
      
      /*****************************************************
      ****setting height of next and prev arrows**************
      *****************************************************/
      
      var linkHeight = parent.leftLink.height();
      var leftGramHeight = parent.sliderInner.height();
      
      parent.leftLink.css({"top" : ((leftGramHeight - linkHeight)/2) + "px"});
      parent.leftLink.on("click", function() {
        slideRight(parent, leftTrigger, wrapper_offset, numberOfImages, slideIndex, currentSlide, contentFade);
      });
      parent.rightLink.css({"top" : ((leftGramHeight - linkHeight)/2) + "px"});
      parent.rightLink.on("click", function() {
        slideLeft(parent, rightTrigger, wrapper_offset, numberOfImages, slideIndex, currentSlide, contentFade);
      });
      
      // end of slider Initialization function
    };
    
    /*****************************************************
    ***************    Show grid of grams ***************
    *****************************************************/
    
    $('.slider_gram img').on("click", function() {
      $('.gram-content').animate({"top": '2000',"opacity" : '0'}, "slow");
      $('.grid-grams').animate({"top": '0',"opacity" : '1'}, "slow");
      $('.slider-outer').animate({top: -450, opacity : 0},"fast");
    });
    
    /*****************************************************
    ***************   Show Comments       ***************
    *****************************************************/
    
    $('.comment_button').on("click", function(){
      $('.content-fade').animate({"top" : -500, "opacity" : '0'}, "slow");
      $('.gram-content').animate({"top" : 600}, "slow");
      $('.comment-fade').animate({"top" : "80px", "opacity" : '1'}, "slow");
    });
    
    
    /*****************************************************
    *************** Update Gram Content ***************
    *****************************************************/
    
    function contentUpdate(data, n, numberOfImages){
      var numberOfImages = numberOfImages - 4
      data.index += n;
      if (data.index > numberOfImages) {
        data.index = data.index % numberOfImages;
        console.log(numberOfImages)
      }
      if (data.index < 1) {
        data.index = numberOfImages;
        console.log(numberOfImages)
      }
      
      
      var title = $("#carousel_slide_" + data.index).attr("data-title");
      var message = $("#carousel_slide_" + data.index).attr("data-message");
      console.log(message)
      $('#gram-title').text(title);
      $('.gram-description').text(message);
      
      var indexCount = data.index + "/" + numberOfImages;
      $('#index-count').text(indexCount);
      
      
      
      
    }
    
    
    /*****************************************************
    ***************   Slide Left Function ***************
    *****************************************************/
    
    function slideLeft(parent, rightTrigger, wrapper_offset, numberOfImages,slideIndex, currentSlide, contentFade){
      
      wrapper_offset = (parseInt($(".wrapper").css("left").replace("px","")));
      console.log(wrapper_offset);
      console.log(rightTrigger);
      if ( wrapper_offset == rightTrigger  ) {
        
        parent.wrapper.animate({"left" : "-=" + parent.singleImageWidth + "px"}, parent.waitTime);
        parent.wrapper.animate({"left" : "-" + (parent.singleImageWidth * 2)  + "px"}, 0);
      } else {
        parent.wrapper.animate({"left" : "-=" + parent.singleImageWidth + "px"}, parent.waitTime);
      }
      
      // fade out gram content
      contentFade.fadeOut(250, contentUpdate(currentSlideData,1, numberOfImages));
      
      
      
      // grab new gram content based on index
      console.log(currentSlideData)
      //fade in gram content
      contentFade.fadeIn(1000);
      
    };
    
    /*****************************************************
    ***************   Slide Right Function ***************
    *****************************************************/
    
    function slideRight(parent, leftTrigger, wrapper_offset, numberOfImages, currentSlide) {
      
      
      wrapper_offset = (parseInt($(".wrapper").css("left").replace("px","")));
      console.log(wrapper_offset)
      console.log(leftTrigger);
      if ( wrapper_offset == leftTrigger  ) {
        //if true animate to clone
        parent.wrapper.animate({"left" : "+=" + parent.singleImageWidth + "px"}, parent.waitTime);
        //then snap to nonclone version with no transition
        parent.wrapper.animate({"left" : "-" + (parent.singleImageWidth * (numberOfImages - 3) )  + "px"}, 0);
      } else {
        //if false just animate as usual
        parent.wrapper.animate({"left" : "+=" + parent.singleImageWidth + "px"}, parent.waitTime);
      }
      
      // fade out gram content
      contentFade.fadeOut(250);
      console.log(slideIndex);
      
      contentUpdate(currentSlideData,-1, numberOfImages);
      // grab new gram content based on index
      console.log(currentSlideData)
      //fade in gram content
      contentFade.fadeIn(1000);
      slideIndex += 1;
      
    };
    
    
    /*****************************************************
    ***************   Calling Slider? ***************
    *****************************************************/
    $.fn.slider = function(setting){
      var $this = this;
      new gramSlider($this, setting);
      return $this;
    };
    
    
  });
})(jQuery);
