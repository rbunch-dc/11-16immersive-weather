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
			$('#currTemp').html("The temp in " + name + " is currently " +currTemp);
			// console.log(currTemp);
		});

	})


});
// console.log(apiKey);