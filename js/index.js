var $svg = $('svg').drawsvg({
  callback: function() {
    $('#logo').fadeIn(1000);
  }
});

$svg.drawsvg('animate');

$(document).ready(function(){	
	$('svg').fadeIn(300);
	$('#logo').css('top', $('svg').offset().top - 20 + 'px');	
	$('#logo').css('left', $('svg').offset().left + 'px');
});