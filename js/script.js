$(document).ready(function(){
	$(".start-pause").click(function(){
		// TODO: change functionality to click on the timer for toggling the class with css animation
		changePosition();
	});
	// TODO: implement timer functionality

	// TODO: dinamically change the value of the timer clock

	// TODO: set both timers to the value from the SESSION and BREAK areas (has to be implemented in html file)

	// TODO: implement the code for the RESET button
	// it has to set all values to their defaults and stop the timer if it was started
});

// TODO: refact with this idea: http://codepen.io/gabrieleromanato/pen/jEfbn?editors=011

function changePosition(){
	$(".timer-fill").animate({top:'-=180px'}, 15000).animate({top:'+=180px'}, 15000, changePosition);
}