$("button").on("click", function() {
  var title = $("input").val();

  $.getJSON("http://www.omdbapi.com/?t=" + title, function(omdbData) {
    // console.log(omdbData["Rated"]);
    var title = omdbData["Title"];
    var rating = omdbData["Rated"];
    var h1Combined = title + " (" +  rating + ")";
    $("h1.title").text(h1Combined);
    $("h4.year").text(omdbData["Year"]);
    $("img.poster").attr("src", omdbData["Poster"]);
    $("p.plot").text(omdbData["Plot"]);
  });
});