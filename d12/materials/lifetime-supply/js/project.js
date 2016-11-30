

$("button").on("click", function(){

  var age = $("#age").val();
  // console.log(age);
  var maxAge = $("#max-age").val();
  // console.log(maxAge);
  var item = $("#item").val();
  // console.log(item);
  var numPerDay = $("#num-per-day").val();
  // console.log(num-per-day);

  var daysOfLife = (maxAge - age) * 365;
  // console.log(daysOfLife);

  var numOfDrinks = daysOfLife * numPerDay;
  // console.log(numOfDrinks)

  $("#solution").text(numOfDrinks);
  $("#drink").text(item);

});

