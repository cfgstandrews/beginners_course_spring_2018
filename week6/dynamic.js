/*
**	CF:G - St Andrews - Week 6 - In Class Code Example
**	JavaScript File
*/

// Test One - Pure JavaScript
//alert('works from first test');
//console.log('works from first test');

// Test Two - Pure JavaScript
/*function test() {
	alert('btn second test');
	document.getElementById("textdemo").innerHTML = "new data";
}*/

//test();

// Test Three - jQuery
/*
**	Necessary encapsulation. 
** 	$(function(){
**		// all jQuery code within here!
**	});
*/
$(function() {

	// button click test.
	
	/*
	**	Intermediate Code example
	*/

	// Step 1 : Handle Click Event
	$("#btn").click(function(){
		
		// Step 2 : Retrieve value of HTML element with id="academicSchool"
		var inputValue = $("#academicSchool").val();
		// Step 3 : Alert this value via a command prompt.
		alert(inputValue);
		// Step 4 : Update the information displayed in the id="textdemo" <div>, with the new data retrieved from the id="academicSchool" input field.
		$("#textdemo").html(inputValue);

	});

	//alert('btn click');
		/*$("#textdemo").html("new data");

		var test = $("#textdemo").text();

		if(test == "new data") {
			alert("it's a match!");
		}*/

});
