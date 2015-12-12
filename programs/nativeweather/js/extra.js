if(storage.getItem('citiesName')==null){
	var addedCityCardHeight=$('.cities-add-card').outerHeight();
	var citiesData=[]; 
 	$('body').prepend('<div class="mask-div" style="position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,.2);z-index:998"></div>');
	$('.cities-add-card').css('display', 'block'); 
	$('.cities-add-card').animate({height: addedCityCardHeight+'px'}, 200);
	$('.varify-add-cities').click(function(event) {
 
		var newCity=$('.input-city-name').val();
		
		if(newCity!=''){
		$('.mask-div').css('display', 'none');
		$('.cities-add-card').animate({height: 0}, 200); 
		function addCityDiv(){
			$('.cities-add-card').css('display', 'none');
		}
		setTimeout(addCityDiv,200);
			citiesData.push(newCity)
			console.log(citiesData);  
			storage.setItem('citiesName',citiesData.join(','));
			window.location.reload();

		}
		
		// $('body').append('
		// 	<script src="js/adddomnode.js"></script> 
		//     <script src="js/material.js"></script>
		//     <script src="js/nativeweather.js"></script>')
	});


}