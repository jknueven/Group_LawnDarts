$( document ).ready(function() {

var howOften = 5; //number often in seconds to rotate
var current = 0; //start the counter at 0
var ns6 = document.getElementById&&!document.all; //detect netscape 6

// place your images, text, etc in the array elements here
var items = new Array();
    items[0]="<img alt='darts' src=' ../images/darts.jpg'>";
    items[1]="<img alt='darts' src='../images/oldDartBox.jpg'>"; 
    items[2]="<img alt='darts' src='../images/dartsinLawn.jpg'>";
    items[3]="<img alt='darts' src='../images/peopleHavingFun.jpg'>";

function rotater() {
    document.getElementById("placeholder").innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}

function rotater() {
    if(document.layers) {
        document.placeholderlayer.document.write(items[current]);
        document.placeholderlayer.document.close();
    }
    if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
        if(document.all)
            placeholderdiv.innerHTML=items[current];

    current = (current==items.length-1) ? 0 : current + 1; //increment or reset
    setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;

//getting the info for product
$.ajax({
		url: "https://json-data.herokuapp.com/darts/info",
		type:"GET",
		success: function(response)
		{
			console.log(response);
			var title = response.data.product.title;
			var descrip = response.data.product.description;
			$('.Title').append("<h2>"+title+"</h2>");
			$('.descripBox').append("<p>"+descrip+"</p>");
		}
	});

});