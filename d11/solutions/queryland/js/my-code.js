console.log("Hello!");

// var title = prompt("What do you want the title to be?");

// $("h1").text(title);

$("button").on("click", function() {
  var title = $("input").val();
  $("h1").text(title);
  $("h1").css("background-color", "yellow");
});

// $("p").css("color", "red");
