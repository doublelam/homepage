


//reset the layout css  of the main body
var currentTime=new Date().getHours();
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
	'padding': '0',
	'width':'80%',
	'margin-left':'10%',
	  
});




function tabClickPageSlade(){
	var aTabCities=document.getElementsByClassName('mdl-layout__tab');
	for(i=0;i<aTabCities.length;i++){
		aTabCities[i].index=i;
		aTabCities[i].onclick=function(){
			$('.slideable-container').css({
				transform: 'translateX(-'+this.index*deviceScreenWidth+'px)',
				 
			});
		}  
	}   
}

var clientX=null;
var startX=null;
var xGap=null;
var mainContainerTranslate=$('.slideable-container')
// function leftRightSlideMove(){
// 	$('.slideable-container').touchstart(function(){
// 		startX=event.changedTouches[0].clientX; 
// 		console.log('开始时的X：'+startX);
// 	});  

// 	$('.slideable-container').touchmove(function() {		 
// 	    clientX=event.changedTouches[0].clientX;
// 	    xGap=clientX-startX;
// 		console.log('x坐标：'+clientX); 
// 		console.log('x坐标厨具：'+xGap); 
// 		$('.slideable-container').css('transform','translateX('+xGap+'px)');    


// 	});

//     $('.slideable-container').swipe(function(){
// 		console.log('swipe后x坐标：'+clientX); 
		 
//     }) 

// }
var thisday;
var dayIndex=0; 
var scriptStringA='<script class="added-ajax-script" src="http://api.map.baidu.com/telematics/v3/weather?location=';
var scriptStringB='&output=json&ak=c5LGschxMOERc7N5yrOt7Ajv&callback=getWeatherData"></script>';
var scriptString=''; 
var aListContainer=$('.next-days .content-area-container');
var aListTips=null;
var weatherStuff=null;
var subWeatherStuff=null;
function getWeatherData(data){
	 
	scriptString=scriptStringA+citiesData[dayIndex+1]+scriptStringB;  
		console.log(dayIndex+'start');
		console.log(data.status); 
		if(data.status=='success'){  
			console.log(data.results[0].currentCity); 

			
		
		$('.this-day-stuff .local-citiy-name')[dayIndex].innerHTML=data.results[0].currentCity;  
		$('.mdl-layout__tab-panel')[dayIndex].setAttribute('cityName',data.results[0].currentCity);  
		$('.this-day-stuff .this-week')[dayIndex].innerHTML=data.results[0].weather_data[0].date.substr(0,2);	   
		$('.this-day-stuff .this-date')[dayIndex].innerHTML=data.date;
		$('.weather-infor-content .temp-display')[dayIndex].innerHTML=data.results[0].weather_data[0].temperature;  
		$('.weather-infor-content .wind-kind')[dayIndex].innerHTML=data.results[0].weather_data[0].wind;
		$('.weather-infor-content .weather-state')[dayIndex].innerHTML=data.results[0].weather_data[0].weather; 

// weather icons dispaly with different weather
		weatherStuff=data.results[0].weather_data[0].weather;
		var mainWeatherIcon=$('.this-day-stuff .this-day-content-area .iconfont')[dayIndex];
		var subWeatherIcon=null;
		function weatherIconChanged(weatherStuffArgument,iconStuffArgument){
			for(k=0;k<weatherStuffArgument.length;k++){
			if(weatherStuffArgument[k]=='转'){weatherStuffArgument=weatherStuffArgument.substr(k+1);} 
				
		}  
		
// day icons principle
		if(currentTime>=6&&currentTime<18){
			if(weatherStuffArgument=='晴'){
				iconStuffArgument.className='iconfont icon-sun1';
			}
			else if (weatherStuffArgument=='多云') {
				iconStuffArgument.className='iconfont icon-mostlycloudy1';
			}
			else if (weatherStuffArgument=='阴') {
				iconStuffArgument.className='iconfont icon-mostlycloudy2';
			}
			else if (weatherStuffArgument=='小雨') {
				iconStuffArgument.className='iconfont icon-rain1';
			}
			else if (weatherStuffArgument=='中雨'||weatherStuffArgument=='阵雨') {
				iconStuffArgument.className='iconfont icon-heavyrain2';
			}
			else if (weatherStuffArgument=='大雨') {
				iconStuffArgument.className='iconfont icon-heavyrain1';
			}
			else if (weatherStuffArgument=='雾') {
				iconStuffArgument.className='iconfont icon-fog3';
			}
			else if (weatherStuffArgument=='霾') {
				iconStuffArgument.className='iconfont icon-mist';
			}
			else if (weatherStuffArgument=='暴雨') {
				iconStuffArgument.className='iconfont icon-hail2';
			}
			else if (weatherStuffArgument=='小雪') {
				iconStuffArgument.className='iconfont icon-snowday1';
			}
			else if (weatherStuffArgument=='中雪'||weatherStuffArgument=='大雪') {
				iconStuffArgument.className='iconfont icon-snowflake';
			}
		}
// night icons principle
		else{
			if(weatherStuffArgument=='晴'){
				iconStuffArgument.className='iconfont icon-moon2';
			}
			else if (weatherStuffArgument=='多云') {
				iconStuffArgument.className='iconfont icon-partlycloudy3';
			}
			else if (weatherStuffArgument=='阴') {
				iconStuffArgument.className='iconfont icon-mostlycloudy2';
			}
			else if (weatherStuffArgument=='小雨') {
				iconStuffArgument.className='iconfont icon-hailnight1';
			}
			else if (weatherStuffArgument=='中雨'||weatherStuffArgument=='阵雨') { 
				iconStuffArgument.className='iconfont icon-heavyhailnight';
			}
			else if (weatherStuffArgument=='大雨') {
				iconStuffArgument.className='iconfont icon-heavyrainnight';
			} 
			else if (weatherStuffArgument=='雾') {
				iconStuffArgument.className='iconfont icon-fog4';
			}
			else if (weatherStuffArgument=='霾') {
				iconStuffArgument.className='iconfont icon-mist';
			}
			else if (weatherStuffArgument=='暴雨') {
				iconStuffArgument.className='iconfont icon-hailnight2';
			}
			else if (weatherStuffArgument=='小雪') {
				iconStuffArgument.className='iconfont icon-snownight1';
			}
			else if (weatherStuffArgument=='中雪'||weatherStuffArgument=='大雪') {
				iconStuffArgument.className='iconfont icon-snowflake'; 
			}
		}
		};
		weatherIconChanged(weatherStuff,mainWeatherIcon);
		
		
		




		if(data.results[0].pm25==''){data.results[0].pm25='无数据'}
		$('.weather-infor-content .pm-state')[dayIndex].innerHTML='PM2.5:&nbsp'+data.results[0].pm25; 
	
		aListTips=aListContainer[dayIndex].getElementsByTagName('li');
		for (var i = 0;i < aListTips.length;i++) {
			aListTips[i].getElementsByClassName('week-stuff')[0].innerHTML=data.results[0].weather_data[i+1].date;
			aListTips[i].getElementsByClassName('weather-stuff')[0].innerHTML=data.results[0].weather_data[i+1].weather;
			subWeatherStuff=data.results[0].weather_data[i+1].weather;
			subWeatherIcon=aListTips[i].getElementsByClassName('iconfont')[0];
			// weather change function
			weatherIconChanged(subWeatherStuff,subWeatherIcon);
			// weather change function
			aListTips[i].getElementsByClassName('temprature-stuff')[0].innerHTML=data.results[0].weather_data[i+1].temperature; 



		};
		}
		else{$('.mdl-layout__tab-panel')[dayIndex].innerHTML+='<div class="error-page-info">该页面无法显示，原因可能是你输入的城市名错误或者无法查询到该城市<ol class="error-more-detail"><li>尝试先删除该城市名，重新添加</li><li>发送反馈到<br><a href="mailto:whatisurname7@gmai.com">whatisurname7@gmail.com</a><br>或者<br><a href="mailto:">1422015387@QQ.com</a></li></ol></div>';
		$('.page-content')[dayIndex].style.display='none';

	};
	   

	console.log(dayIndex);
	
	 
		dayIndex++;
		


		$('body').append(scriptString);  
	
	if (dayIndex>=cityNum-1){scriptStringA='';scriptStringB='';}    
	console.log(dayIndex+'end');
 }   

function firstAjaxScriptAdded(){
	scriptString=scriptStringA+citiesData[0]+scriptStringB;  
	$('body').append(scriptString);
} 

var addedCityCardHeight=$('.cities-add-card').outerHeight();
function citiesAddBtn(){
	
	
	console.log(addedCityCardHeight); 
	$('.plus-city').click(function() {
		$('body').prepend('<div class="mask-div" style="position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,0);z-index:998"></div>');

	$('.cities-add-card').show(100);  

	});
	$('body').on('click','.mask-div',function(){

		$(this).css('display', 'none');
		$('.cities-add-card').hide(100);

})
	
	$('.cancle-btn').click(function(event) {
		$('.mask-div').css('display', 'none');
		$('.cities-add-card').hide(100); 
	}); 
 
}

function citiesAddvarify(){

	$('.varify-add-cities').click(function(event) {
		
		var newCity=$('.input-city-name').val();
		
		if(newCity!=''){
			$('.mask-div').css('display', 'none');
			 
 
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

function citiesDeleteOperate(){
	$('.delete-city').click(function(event) {
		var deletableCity=$('.mdl-layout__tab-bar .is-active').text(); 
		console.log(deletableCity);
		for (var i = 0; i < citiesData.length; i++) {
		 	if (citiesData[i]==deletableCity) {
		 		console.log(citiesData);
		 		console.log(citiesData[0]);

		 		citiesData.splice(i,1);
		 		
		 		if (citiesData[0]==null) {  
		 			storage.removeItem('citiesName'); 
		 		}
		 		else{storage.setItem('citiesName',citiesData.join(','));}
		 		console.log(storage.getItem('citiesName'));
				 window.location.reload();
		 	};
		 }; 

	});
}




// dataWriteIn();

// leftRightSlideMove(); 
tabClickPageSlade();

citiesAddBtn(); 
citiesAddvarify();
citiesDeleteOperate();


   


