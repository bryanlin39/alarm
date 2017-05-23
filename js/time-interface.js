$(document).ready(function(){
  $('#time').text(moment().format('hh:mm A'))
  setInterval(function() {
    currentTime = moment().format('hh:mm A')
    $('#time').text(currentTime);
  }, 1000);
});
