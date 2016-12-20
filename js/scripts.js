// * Ideas 
//     * Make it change color based on X 
//     * Change the circle... 
//         * Make it into a thermometer that fills up 
//         * Make it a car that leaves tracks 
//         * Make it into a bottle of sunscreen that shoots the temp out 
//         * Etc. 
//     * Change the background based on the weather code 
// * Explore the API 
//     * There is a lot more that you can do than what we covered. 
//     * http://openweathermap.org/weather-conditions 
//     * See if you can find and use other end points 
//     * See what else is the object we are already getting back and what you can do with it 
// * Make it a full-blown widget someone would want on their page! 
// * Make a modal via bootstrap or Fancybox that pops open the wind speed, etc. 
// * Go look at other widgets online and follow suit. 

$(document).ready(function(){

	$('#weather-form').submit(function(){
		// stop the form from submitting!
		event.preventDefault();
		// Inout field has id of lcoation. go get it.
		var location = $('#location').val();
		var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip='+location+',us&appid='+apiKey;
		console.log(weatherUrl);
		$.getJSON(weatherUrl, function(weatherData){
			// console.log(this);
			console.log(weatherData);
			var currTemp = weatherData.main.temp;
			var name = weatherData.name;
			var icon = weatherData.weather[0].icon + '.png';
			$('#currTemp').html('<img src="http://openweathermap.org/img/w/'+icon+'">The temp in ' + name + ' is currently ' +currTemp+'&deg; ');
			var canvas = $('#weather-canvas');
			var context = canvas[0].getContext('2d');

			// Set up the outter circle
			var currPercent = 0;
			function animate(current){
				// Draw inner circle
				context.fillStyle = "#ccc";
				context.beginPath();
				context.arc(155,75,65,Math.PI*0,Math.PI*2);
				context.closePath();
				context.fill();

				// Draw the outter line
				context.lineWidth = 10; // make a thick outer line
				context.strokeColor = '#000';
				context.beginPath();
				context.arc(155,75,70,Math.PI*1.5, (Math.PI * 2 * current ) + Math.PI*1.5);
				context.stroke(); //stroke not fill... we want a line!
				currPercent++; //incrament currPercent
				console.log(currPercent)
				if(currPercent < currTemp){
					requestAnimationFrame(function(){
						animate(currPercent / 100);
					});
				}
			}	
			animate();
		});

	})


});
// console.log(apiKey);