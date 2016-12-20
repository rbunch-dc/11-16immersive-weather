$(document).ready(function(){

	var weatherUrl = 'api.openweathermap.org/data/2.5/weather?zip=94040,us&appid='+apiKey;
	console.log(weatherUrl);
	$.getJSON(weatherUrl, function(weatherData){
		console.log(weatherData);
	});

});
// console.log(apiKey);