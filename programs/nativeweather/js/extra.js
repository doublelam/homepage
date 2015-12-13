if(storage.getItem('citiesName')==null){
	var addedCityCardHeight=$('.cities-add-card').outerHeight();
	var citiesData=[]; 
 	$('body').prepend('<div class="mask-div" style="position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);z-index:998"></div>');
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

	$('.loading-before-launch').css('display', 'none'); 


}

function loadingDisappear(){
	
		$('.page-before-app-laungch').css({
		top: '-400px',});
		function displayDisappear(){
			$('.page-before-app-laungch').css({
		display: '-none',}); 
		}
	
		setTimeout(displayDisappear, 500);
	
}
function timeoutDisappear(){
	setTimeout(loadingDisappear, 500);
}

window.onload=timeoutDisappear; 