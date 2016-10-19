// $( document ).ready(function() {
//   ////// add like to database ///////////////
//   $(".heart-icon").on("click", function() {
//     $('.ht').addClass('pink-heart-icon')
//     $('.ht').removeClass('heart-icon')
//     $.ajax({
//       type: 'POST',
//       url: $('center-wrap').data('update-url'),
//       success: function() {
//         var likes = $('.heart').text()
//         $('.heart').text(parseInt(likes) + 1)
//       }
//     });
//   });
//
//   ////// delete like from database ///////////////
//
//   $(".pink-heart-icon").on("click", function() {
//
//     $('.ht').addClass('heart-icon pink-heart-icon')
//     $('.ht').removeClass('pink-heart-icon')
//     $.ajax({
//       type: 'DELETE',
//       url: $('center-wrap').data('update-url'),
//       dataType: 'json',
//       data: { likes: { user_id : current_user },{gram_id: current_gram} },
//       success: function() {
//         var likes = $('.heart').text()
//         $('.heart').text(parseInt(likes) - 1)
//       }
//     });
//   });
// });
