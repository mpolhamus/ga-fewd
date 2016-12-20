$("button").on("click", function() {
  var city = $("input").val();
 
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&apikey=8f494dd94f027bc524dfb5c4274799f1", function(data) {
    $("h4 .temperature").text(data["main"]["temp"]);
    $("img.icon").attr("src", "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png");
  });
});