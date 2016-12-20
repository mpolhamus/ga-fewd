


$("button").on("click", function() {
	console.log("hi!!")

	var movie = $("input").val();
	$.getJSON("http://www.omdbapi.com/?t=" + movie, function(data){

		$("h1").text(data["Title"]); 
		// the word data is a variable and can be any name
		$("h4").text(data["Year"]);
		$("img").attr("src", data["Poster"]);
		$("p").text(data["Plot"]);

	});


});