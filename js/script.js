
//划过头像显示联系方式
function headdis(hiddenableid,clickdivid){
var oHidden=document.getElementById(hiddenableid);
var oClick=document.getElementById(clickdivid);
var oDivDe=document.getElementById('detailinfo');
var aInfo=oDivDe.getElementsByTagName('div');
var aImg=oHidden.getElementsByTagName('img');
oClick.onmouseover=showOperate;
oClick.ontouchstart=showOperate;
function showOperate(){
 oHidden.style.paddingLeft="18px";
 oHidden.style.width="250px"; 

}

function disapp(){ 

  oHidden.style.paddingLeft="0px";
  oHidden.style.width="0px";
  for (var i =0; i<aInfo.length ; i++) {
  	
  	aInfo[i].style.display="none";
  	
  };
 };

 

//点击空白区域隐藏，阻止事件冒泡

//ie属性
if ('addEventListener' in oHidden) {

	oHidden.addEventListener('click',function (a){a.stopPropagation()},false);
	oDivDe.addEventListener('click',function (a){a.stopPropagation()},false);
  oClick.addEventListener('click',function (a){a.stopPropagation()},false);
}


else {
oHidden.onclick=function(ev){
	ev.cancelBubble = false;}
oDivDe.onclick=function(ev){
	ev.cancelBubble = false;}
oClick.onclick=function(ev){ 
  ev.cancelBubble = false;}
}
 
//////////////////////////////////////////////////////////////////////////////

document.onclick=disapp;



///////////////////////////////////

function  detaildis(){

 for (var i = 0;i<aImg.length; i++) {
 	aImg[i].index=i;
 	aImg[i].onmouseover=function(){
 	
     for (var j=0 ;j<aInfo.length; j++) {
     	aInfo[j].style.display="none";	
        
     };
    aInfo[this.index].style.display="block";
   
    



 	}
 };
  

}
detaildis(); 

}
//////////////////////////////////


//调用函数
headdis("contactme","selfi")
////////////////////////////


//点击tab切换页面
function transform(){
	var oNavi=document.getElementById("nav");
	var aNavLi=oNavi.getElementsByTagName("li");
    var oMain=document.getElementById("maindis");
  for (var i = 0;i<aNavLi.length; i++) {
  	aNavLi[i].index=i;
  	aNavLi[i].onmouseover=function(){
  	for (var j =0; j<aNavLi.length; j++) {
  			aNavLi[j].style.boxShadow="";
};	
   if(!this.onoff){
    this.style.boxShadow="0px 2px 8px #aaa";
   }

  	};
  	aNavLi[i].onmouseout=function(){
  	    this.style.boxShadow="";
   	}
//一开始首页显示有颜色的背景
    aNavLi[0].style.background="#707B91";
  			aNavLi[0].style.color="white";
  			aNavLi[0].onoff=true;
///////////////////////////////////////////////////
  	aNavLi[i].onclick=function(){

  		for (var j =0; j<aNavLi.length; j++) {
  			aNavLi[j].style.background="#ECEEF2";
  			aNavLi[j].style.color="#909EB4";
  			aNavLi[j].onoff=false;
  		};
  		this.onoff=true;
  		this.style.background="#707B91";
  		this.style.color="white";
        oMain.style.left=(-100*this.index)+"%";

  	}
  };

}
transform();
///////////////////////////////////////////////////


//对实例展示内的图片进行排列
// function imgdisplay(){
//   var oImg=document.getElementById("imgdiv");
//   var aImg=oImg.getElementsByTagName("img");
//   for (var i = 0 ; i <aImg.length; i++) {
//   	aImg[i].style.left=i%5*20+1.6+"%";
//   	aImg[i].style.top=parseInt(i/5)+5+"%";
//   };


// }

// imgdisplay();
/////////////////////////


//自我评价内的图片播放
function imgdisplayinrecom(){
	var oImg=document.getElementById('mypaintimg');
	var oPre=document.getElementById('previous');
	var oNext=document.getElementById('next');
	var oHide=document.getElementById('hide');
	var oDivPaint=document.getElementById('mypaintdis');
    var array=["image/mypaint/mypaint1.jpg","image/mypaint/mypaint2.jpg","image/mypaint/mypaint3.jpg","image/mypaint/mypaint4.jpg","image/mypaint/mygif1.gif","image/mypaint/mygif2.gif"]
	var num=0;
	oNext.onclick=function(){
		if(num>4){num=-1};
      num++;
      
      oImg.src=array[num];

	}
oPre.onclick=function(){
		if(num<1){num=6};
      num--;
      
      oImg.src=array[num];

	}

	oHide.onclick=function(){
     oDivPaint.style.display="none";
	}

}
imgdisplayinrecom();
////////////////////////////////////////////////////


//判断浏览器以及弹出提示
function alertupgrade(){
 var oImg=document.getElementById('mypaintimg');
 if('boxShadow' in oImg.style==false){
 	alert("请使用IE9及以上版本或其他内核浏览器");
 }
};


alertupgrade();
///////////////////////////////////////////////////////////////////


///////////////////////////////////////////