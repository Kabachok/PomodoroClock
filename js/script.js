// program code for the timer

// how to anime a progress bar http://www.hongkiat.com/blog/html5-progress-bar/

$(document).ready(function(){
	$(".start-pause").click(function(){
		changePosition();
	});
});

function changePosition(){
	$(".timer-fill").animate({top:'+=175px'}, 60000).animate({top:'-=175px'}, 60000, changePosition);
}