if(storage.getItem('citiesName')==null){
	
	var citiesData=[];
 	$('body').prepend('<div class="launch-page-div"><img class="launch-page-pic" src="images/launch-page-image1.jpg"></div>');
	$('.cities-add-card').show();  
	$('.cities-add-card').animate({height: addedCityCardHeight+'px'}, 200); 
			console.log( addedCityCardHeight+'no city add carf height');
	// $('.varify-add-cities').click(function(event) {
 
	// 	var newCity=$('.input-city-name').val();
		
	// 	if(newCity!=''){
	// 	$('.mask-div').css('display', 'none');

	// 	$('.cities-add-card').animate({height: 0}, 200); 
	// 	function addCityDiv(){
	// 		$('.cities-add-card').css('display', 'none');
	// 	}
	// 	setTimeout(addCityDiv,200);
	// 		citiesData.push(newCity)
	// 		console.log(citiesData);  
	// 		storage.setItem('citiesName',citiesData.join(','));
	// 		window.location.reload();

	// 	}
		
	// 	// $('body').append('
	// 	// 	<script src="js/adddomnode.js"></script> 
	// 	//     <script src="js/material.js"></script>
	// 	//     <script src="js/nativeweather.js"></script>')
	// });

	$('.loading-before-launch').css('display', 'none'); 
	$('.cancle-btn').css('display', 'none');


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

	var themeColr=null; 
	if(currentTime>=4&&currentTime<10){themeColr='#4CAF50';} 
	else if(currentTime>=10&&currentTime<16){themeColr='#3F51B5';}
	else if(currentTime>=16&&currentTime<22){themeColr='#FF5722';}
	else if(currentTime>=22&&currentTime<=23||currentTime>=0&&currentTime<4){themeColr='#00BCD4';} 
	
		

	
	$('.mdl-layout__header').css('background', themeColr);
	$('.mdl-layout__tab-bar').css('background',themeColr); 
	$('.cities-add-card .mdl-card__title').css('background',themeColr); 
	$('.iconfont').css('color', themeColr); 
}


function BackgroundImageChangeWithTime(){
	if(currentTime>=4&&currentTime<10){bacImgUrl='url(images/weatherimages/spring.jpg)';} 
	else if(currentTime>=10&&currentTime<16){bacImgUrl='url(images/weatherimages/summer.jpg)';}
	else if(currentTime>=16&&currentTime<22){bacImgUrl='url(images/weatherimages/autum.jpg)';}
	else if(currentTime>=22&&currentTime<=23||currentTime>=0&&currentTime<4){bacImgUrl='url(images/weatherimages/winter.jpg)';}
console.log('bacimage'+bacImgUrl); 
$('.mdl-layout').css({
	
	  'background-image': bacImgUrl
	 
});


}


themecolorChangeWithTime(); 
BackgroundImageChangeWithTime();
