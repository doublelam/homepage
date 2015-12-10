
var citiesData=['绍兴','苏州','杭州','天台','上海','北京','宁波'];  
var citiesNum=citiesData.length;
console.log(citiesData.length); 
var tabText=''; 
var samleContentHtml=$('.get-innerHTML').html(); 
var contentSectionText='';
var tabsContainer=$('.tabs-cities-container');
var contentContainer=$('.slideable-container'); 
for (var i = 0; i < citiesData.length; i++) {
	tabText=tabText+'<a href="#scroll-tab-'+i+'" class="mdl-layout__tab">'+citiesData[i]+'</a>';
	tabsContainer.html(tabText); 
	contentSectionText=contentSectionText+samleContentHtml; 
	contentContainer.html(contentSectionText); 
};
