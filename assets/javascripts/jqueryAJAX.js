// $.get("info.txt", function(data) {
// 	alert(data);
// });

$.ajax("info.txt")
	.done(function(data) {

		$("p").html(data);

	})
		.fail(function() {
		alert("Could not get data")
	});