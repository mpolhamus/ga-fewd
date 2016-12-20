var searchTitle = function(movieTitle) {
  $.getJSON("http://www.omdbapi.com/?t=" + movieTitle, function(data) {
    var title = data["Title"];
    var year = data["Year"];
    var plot = data["Plot"];
    var rated = data["Rated"];
    var posterSrc = data["Poster"];

    $(".title").text(title + " (" + rated + ")");
    $(".year").text(year);
    $(".plot").text(plot);
    $("img.poster").attr("src", posterSrc);

    $("input").val("");
  });
}

$("button").on('click', function(){
  var movieTitle = $("input").val();
  searchTitle(movieTitle);
  var li = $("<li>" + movieTitle + "</li>");
  $("ul.search-history").append(li);
});

$("ul").on("click", function(event) {
  var movieTitle = $(event.target).text();
  searchTitle(movieTitle);
})
