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

$(document).ready(function(){
  $('#time').text(moment().format('hh:mm A'))
  setInterval(function() {
    currentTime = moment().format('hh:mm A')
    $('#time').text(currentTime);
  }, 1000);
});
