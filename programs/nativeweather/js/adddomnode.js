

var storage=window.localStorage;
// for (var i = 0; i < storage.length; i++) {



// console.log(storage.getItem('citiesName'));   


 
var citiesData=storage.getItem('citiesName').split(','); 


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
$('.tabs-cities-container .mdl-layout__tab:first-child').addClass('is-active') 
