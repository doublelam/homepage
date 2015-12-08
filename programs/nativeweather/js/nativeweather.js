


//reset the layout css  of the main body
var deviceScreenWidth=$(window).width();
var deviceScreenHeight=$(window).height();
var cityNum=citiesNum; 
console.log('屏幕宽度：'+deviceScreenWidth+'，屏幕高度'+deviceScreenHeight); 

$('.mdl-layout__tab-panel').css({
	'display': 'block',
	'width': deviceScreenWidth+'px', 
	'float': 'left',
	

}); 

$('.mdl-layout__content').css({
	'width': deviceScreenWidth*cityNum+'px', 
	'transition': 'all .2s ease-in-out'  
}); 
 
$('.mdl-layout__tab-bar').css({
	'padding': '0 0 0 30px',
	  
});




function tabClickPageSlade(){
	var aTabCities=document.getElementsByClassName('mdl-layout__tab');
	for(i=0;i<aTabCities.length;i++){
		aTabCities[i].index=i;
		aTabCities[i].onclick=function(){
			$('.slideable-container')[0].style.transform='translateX(-'+this.index*deviceScreenWidth+'px'
		}  
	} 
}

var clientX=null;
var startX=null;
var xGap=null;
var mainContainerTranslate=$('.slideable-container')
function leftRightSlideMove(){
	$('.slideable-container').touchstart(function(){
		startX=event.changedTouches[0].clientX; 
		console.log('开始时的X：'+startX);
	});  

	$('.slideable-container').touchmove(function() {		 
	    clientX=event.changedTouches[0].clientX;
	    xGap=clientX-startX;
		console.log('x坐标：'+clientX); 
		console.log('x坐标厨具：'+xGap); 
		$('.slideable-container').css('transform','translateX('+xGap+'px)');    


	});

    $('.slideable-container').swipe(function(){
		console.log('swipe后x坐标：'+clientX); 
		 
    }) 

}
var thisday;
var dayIndex=0;
function getWeatherData(data){
	thisday=data.results[0].weather_data[0].weather;
	console.log(dayIndex+thisday); 
	dayIndex++;
 }  

var aLocalCitiesNames=$('.local-citiy-name'); 
function dataWriteIn(){
	var scriptStringA='<script src="http://api.map.baidu.com/telematics/v3/weather?location=';
	var scriptStringB='&output=json&ak=c5LGschxMOERc7N5yrOt7Ajv&callback=getWeatherData"></script>';
 
	for (var i = 0; i < cityNum; i++) {
		scriptString=scriptStringA+citiesData[i]+scriptStringB; 
		aLocalCitiesNames[i].innerHTML=citiesData[i]; 
		$('body').append(scriptString); 
		console.log(i); 

		 
		    
	};  
}

  





dataWriteIn();

// leftRightSlideMove(); 
tabClickPageSlade();


