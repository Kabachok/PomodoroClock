$(document).ready(function(){
	$(".start-pause").click(function(){
		changePosition();
	});
});

// TODO: refact with this idea: http://codepen.io/gabrieleromanato/pen/jEfbn?editors=011

function changePosition(){
	$(".timer-fill").animate({top:'-=180px'}, 15000).animate({top:'+=180px'}, 15000, changePosition);
}