


var aImgArray=['images/gongqi1.jpg','images/gongqi2.jpg','images/gongqi3.jpg'];
var oDiv=document.getElementById('imgfoot');
function disImg(){


for (var i = 0;i<aImgArray.length ; i++) {
	oDiv.innerHTML+='<div class="innerdiv"></div>';
};
};

disImg();



function  cakeImgDis(){
	var aCakeArray=['images/cake1.png','images/cake2.png','images/cake3.png','images/cake4.png','images/cake5.png','images/cake6.png']
	var oDiv=document.getElementById('cakedis');
	for(i=0;i<aCakeArray.length;i++){
	oDiv.innerHTML+='<img class="cakeimg" src='+aCakeArray[i]+'>';
}
};
cakeImgDis();





function hoverDis(){
var aImgDiv=oDiv.getElementsByTagName('div');
var oImg=document.getElementById('imgdisplay');
   var startx;
   var endx;
   aImgDiv[0].style.background='#FFB400';
oImg.ontouchstart=function(event){
	
	startx=event.changedTouches[0].clientX;
};

var num=0;
oImg.ontouchend=function(event){
 
 endx=event.changedTouches[0].clientX;
 var gap=endx-startx;
 function path(){
if (gap<-50) {
 return 'left';
};
if (gap>50) {
  return 'right';
};

};
function numAlt(){
if (path()==='left') {
	num++;
}
if(path()==='right'){
	num--;
}
if(num<0){num=2;};if(num>2){num=0;};
};
numAlt();
console.log(num);
oImg.src=aImgArray[num];
for (var i = 0; i < aImgDiv.length; i++) {
	aImgDiv[i].style.background='white';
};
aImgDiv[num].style.background='#FFB400';

}


};

hoverDis();


function moveMenuBar(){

var oMenu=document.getElementById('menu');
var oMenuBar=document.getElementById('menubar');
var oArrow=document.getElementById('arrow');
var oDivReco=document.getElementById('recoverall');
console.log(oMenu,oArrow);
oMenu.ontouchstart=function(){
   oMenuBar.style.left='50%';
   oDivReco.style.display='block';
};

oArrow.ontouchend=function(){
	oMenuBar.style.left='105%';
	oDivReco.style.display='none';
};

oDivReco.ontouchend=function(){
	oMenuBar.style.left='105%';
	oDivReco.style.display='none';
	};


}

moveMenuBar();