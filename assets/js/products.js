(function ($) {
	
	"use strict";

	// Load Products from JSON
	$(document).ready( function() {
        
		$.getJSON( "assets/data/products.json", function( data ) {

			// List of products 
			var products = '';
				
			$.each(data, function(key, value){
				products += '<div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items '+value.filter+'">';
				products += '<div class="item">';
				products += '<img src="assets/images/'+value.image_name+'" alt=""/>';
				products += '<span class="category">'+value.category+'</span>';
				products += '<h6>'+value.list_price+'</h6>';
				products += '<h4><a href="property-details.html">'+value.name+'</a></h4>';
				products += '<ul>';

				value.attributes.forEach(attribute => {
					products += '<li>'+ attribute.property+' : <span>'+attribute.value+'</span></li>';
				});

				products += '</ul>';

				products += '</div>';
				products += '</div>';
			});
				
			console.log(products);
			// $('#productsrow').append(products);

			// Set footer
			var footer = '<footer>';
			footer += 'div class="container"';
			footer += 'div class="col-lg-12"';
			footer += '<p>Copyright © Five Guys Doodads, Ltd. All rights reserved. </p>';
			footer += '</div>';
			footer += '</div>';
			footer += '</footer>';

			$('#productsrow').after(products, footer);

		});

	});

})(window.jQuery);