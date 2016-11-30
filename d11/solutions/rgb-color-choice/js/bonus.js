console.log("is this working?");

$("a#color-button").on("click", function() {
  var red = Math.random() * 255
  console.log(red);
  var green = Math.random() * 255
  console.log(green);
  var blue = Math.random() * 255;
  console.log(blue);

  var rgb = "rgb(" + Math.round(red) + "," + Math.round(green) + "," + Math.round(blue) + ")";
  console.log(rgb);

  $("#wrapper").css("background-color", rgb);
  $("p#colorful-text").text(rgb);
});