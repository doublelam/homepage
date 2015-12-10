


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
var scriptStringA='<script class="added-ajax-script" src="http://api.map.baidu.com/telematics/v3/weather?location=';
var scriptStringB='&output=json&ak=c5LGschxMOERc7N5yrOt7Ajv&callback=getWeatherData"></script>';
var scriptString=''; 
var aListContainer=$('.next-days .content-area-container');
var aListTips=null;
function getWeatherData(data){
	console.log(dayIndex);  
	scriptString=scriptStringA+citiesData[dayIndex+1]+scriptStringB;  
	

	thisday=data.results[0].weather_data[0].weather;
	
	$('.this-day-stuff .local-citiy-name')[dayIndex].innerHTML=data.results[0].currentCity;  
	$('.mdl-layout__tab-panel')[dayIndex].setAttribute('cityName',data.results[0].currentCity);  
	$('.this-day-stuff .this-week')[dayIndex].innerHTML=data.results[0].weather_data[0].date.substr(0,2);   
	$('.this-day-stuff .this-date')[dayIndex].innerHTML=data.date;
	$('.weather-infor-content .temp-display')[dayIndex].innerHTML=data.results[0].weather_data[0].temperature;  
	$('.weather-infor-content .wind-kind')[dayIndex].innerHTML=data.results[0].weather_data[0].wind;
	$('.weather-infor-content .weather-state')[dayIndex].innerHTML=data.results[0].weather_data[0].weather; 
	if(data.results[0].pm25==''){data.results[0].pm25='暂无该城市监测数据'}
	$('.weather-infor-content .pm-state')[dayIndex].innerHTML='PM2.5:&nbsp'+data.results[0].pm25; 
	aListTips=aListContainer[dayIndex].getElementsByTagName('li');
	for (var i = 0;i < aListTips.length;i++) {
		aListTips[i].getElementsByClassName('week-stuff')[0].innerHTML=data.results[0].weather_data[i+1].date;
		aListTips[i].getElementsByClassName('weather-stuff')[0].innerHTML=data.results[0].weather_data[i+1].weather;
		aListTips[i].getElementsByClassName('temprature-stuff')[0].innerHTML=data.results[0].weather_data[i+1].temperature; 



	};
	   

	console.log(dayIndex);
	
	 
		dayIndex++;
		$('body').append(scriptString);  
	
	if (dayIndex>=cityNum){scriptStringA='';scriptStringB='';}    
	console.log(dayIndex+thisday);
 }   

function firstAjaxScriptAdded(){
	scriptString=scriptStringA+citiesData[0]+scriptStringB;  
	$('body').append(scriptString); 
} 







// dataWriteIn();

// leftRightSlideMove(); 
tabClickPageSlade();
firstAjaxScriptAdded();
 


