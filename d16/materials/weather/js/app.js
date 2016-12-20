
$("button").on("click", function(){

	var city = $("input").val();
	console.log(city);

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&apikey=3a7a478a903c87c0ca3517588b429658", function(data) {
  		$("span.temperature").text(data["main"]["temp"])

  		//
	});


});

