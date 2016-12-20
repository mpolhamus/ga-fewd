var ny = {
  name: "New York",
  capital: "Albany",
  governor: "Andrew Cuomo",
  usSenators: ["Chuck Schumer", "Kirsten Gillibrand"]
}

var ct = {
  name: "Connecticut",
  capital: "Hartford",
  governor: "Dannel Malloy",
  usSenators: ["Richard Blumenthal", "Christopher S. Murphy"]
}


$("button#ct").on("click", function(){
	$("li#first-senator").text(ct["usSenators"][0]);
	$("li#second-senator").text(ct["usSenators"][1]);
	});






// var me = {
//   name: "Jeff Konowitch",
//   birthplace: {
//     state: "New York",
//     city: "Bronxville"
//   },
//   favoriteColor: "blue",
//   height: 73,
//   hungry: false
// };
// console.log(me["birthplace"]["city"]);



// var students = ["Matt", "Abigail", "Anissa"];
// console.log(students[0])

// var students = [
//   {
//     name: "Matt",
//     last: "Spellman"
//   },
//   {
//     name: "Abigail",
//     last: "Chansler"
//   },
//   {
//     name: "Anissa",
//     last: "Smith"
//   },
//   "Reinhardt"
// ]

// console.log(students[0]["name"]);
// console.log(students[1]["last"]);
// console.log(students[3]);