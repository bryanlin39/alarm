$(function() {
  $('.set-time').submit(function(event) {
    event.preventDefault()
    var setTime = $('#set-time').val()
    setInterval(function() {
      if(setTime === moment().format('hh:mm')) {
      $('body').addClass('grey')
      $('#alarm').show()
      }
    }, 1000);
  });
});
