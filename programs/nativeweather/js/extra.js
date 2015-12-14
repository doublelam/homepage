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

window.onload=function(){
	
 	firstAjaxScriptAdded();
	timeoutDisappear(); 
}


function themecolorChangeWithTime(){
	var currentTime=new Date().getHours();
	var themeColr=null;
	if(currentTime>=0&&currentTime<6){themeColr='#4CAF50';color="#424242"} 
	else if(currentTime>=6&&currentTime<9){themeColr='#FF9800';color="#424242"}
	else if(currentTime>=9&&currentTime<12){themeColr='#FF5722';color='default';}
	else if(currentTime>=12&&currentTime<15){themeColr='#E91E63';color='default';}
	else if(currentTime>=15&&currentTime<18){themeColr='#009688';color='default';}
	else if(currentTime>=18&&currentTime<24){themeColr='#673AB7';color='default';}
		

	
	$('.mdl-layout__header').css('background', themeColr);
	$('.mdl-layout__tab-bar').css('background',themeColr); 
	if(color!='default'){
		$('.mdl-layout__tab').css('color','rgba(66,66,66,.6)'); 
		$('.mdl-layout__header').css('color', color);
		$('.mdl-layout.is-upgraded .mdl-layout__tab.is-active::after').css('background',color) 
	}



}
themecolorChangeWithTime(); 
