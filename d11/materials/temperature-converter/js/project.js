console.log("is this working?");



$("button").on("click", function convert(){

	var temperature = document.getElementById("temperature").value * 9 / 5 + 32;
	document.getElementById("converted").innerHTML = temperature;
});

