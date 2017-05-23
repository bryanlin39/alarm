$(function() {
  $('.set-time').submit(function(event) {
    event.preventDefault()
    var setTime = $('#set-time').val()
    if(setTime === moment().format("hh:mm")) {
      console.log('success')
      $('body').addClass('grey')
      $('#alarm').show()
    }
  });
});

$(document).ready(function(){
  $('#time').text(moment().format('hh:mm A'));
});
