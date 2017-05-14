// this is equivalent to document.getElementById
// $("#circle").hover(function() {
// 	$("iframe").attr("src", "http://www.foxnews.com");
// });

// can able to target divs
// $("div").click(function() {
// 	alert("Square was clicked!");
// });


// "this" is a keyword in this particular case is referring to the element that we are dealing with at the moment. Enabling a single function applying to different number of elements depending on the action specified (for example: click, hover, etc.)
$("div").click(function() {
	if ($(this).attr("id") == "circle") {
		alert("You clicked on a circle");

	} else {
		alert("You clicked on a square")
	}
});