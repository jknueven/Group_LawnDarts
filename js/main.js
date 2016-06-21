$( document ).ready(function() {

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