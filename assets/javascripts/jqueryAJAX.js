// $.get("info.txt", function(data) {
// 	alert(data);
// });

$.ajax("info.txt")
	.done(function(data) {

		$("p").html(data);

	})
		.fail(function() {
		alert("Could not get data");
	});

// a regular expression are to check or format a content of a string

var regex = /Great/i;

	var string = "Regex is great!";

	// this variable is saying match the string "Regex is great!" according to the regex variable ie /is/
	// what this means is that it is searching if the word "is" is in the string var.
	var result = string.match(regex);

	alert(result);