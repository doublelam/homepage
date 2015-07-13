


/*大的function对鼠标滑入产生隐藏显现的div块进行参数化，构造可以通用的method*/
function onmouseover_hidden(overid,rotateid,hiddenableid){



var oUl=document.getElementById(hiddenableid);
var aLi=oUl.getElementsByTagName('li');
var oExp=document.getElementById(overid);
var oUpd=document.getElementById(rotateid);
var oP=document.getElementById('addres');
var fourthva=arguments[3];
var oImgmyfone=document.getElementById("fonejingdongimg");


//"送至：..."这个div鼠标滑进去的变化
function exactive(){
	oExp.style.background="white";
	oExp.style.borderRight="1px solid #DDDDDD";
	oExp.style.borderLeft="1px solid #DDDDDD";
	oExp.style.zIndex=999;
	oUpd.style.transform="rotate(-225deg)";
	oUpd.style.transformOrigin="50% 80%";
	//oExp.style.background="blue";
	if (fourthva==="fonejingdongfrontimg") {
         oImgmyfone.src="image/phonejingdongred.png"
	};

};
///////////////////////////////////////////////


// "送至：..."这个div鼠标移出来的变化
function unexactive(){

	oExp.style.background="";
	oExp.style.borderRight="1px solid #F1F1F1";
	oExp.style.borderLeft="1px solid #F1F1F1";
	oExp.style.zIndex=998;
	oExp.style.zIndex=997;
	oUpd.style.transform="rotate(-45deg)";
	oUpd.style.transformOrigin="50% 50%";
	//oExp.style.background="blue";	
	if (fourthva==="fonejingdongfrontimg") {
         oImgmyfone.src="image/phonejingdonggrey.png"
	};
}
//////////////////////////////////////////////

//"送至：..."的div在移出时消失的效果
oUl.onmouseout=function(){
	unexactive();
}
//跟随的块鼠标移出时的效果
oExp.onmouseout=function(){
	unexactive();
}
///////////////////////////////////////
//"送至：..."的div在移出时消失的效果
oUl.onmouseover=function(){
	exactive();
}
//跟随的块鼠标移出时的效果
oExp.onmouseover=function(){
	exactive();
}
//////////////////////////////////////////


//地名的颜色效果
if (aLi[0]!==undefined&&arguments[3]!=="linotfollow") {


//全国地名在div中的平均分布
for(var i=0;i<aLi.length;i++){
	aLi[i].style.top=38*(i%6)+10+"px";
	aLi[i].style.left=75*(parseInt(i/6))+25+"px";
};
//////////////////////////////////////////////////	
aLi[0].className="addreclicked";

for(var i=0;i<aLi.length;i++){

//单击地名改变背景和字体颜色以及地址信息
	aLi[i].onclick=function(){
  for (var j =0; j<aLi.length;j++) {
  	aLi[j].className="";
  };
		
    this.className="addreclicked"
    oP.innerHTML="送至："+this.innerHTML;
    }


////////////////////////////////////////////  


//地名onmouseover效果
aLi[i].onmouseover=function(){
if (this.className=="") {
this.className="addreover";
};

}

//地名list划出时消失
aLi[i].onmouseout=function(){
	if(this.className=="addreover")
{this.className="";}
};

 };
	
}
//我的京东下面的list排布
else if(arguments[3]==="linotfollow"&&arguments[4]==="listofmyjingdong"){
for(var i=0;i<aLi.length;i++){
	aLi[i].style.top=32*(i%4)+60+"px";
	aLi[i].style.left=100*(parseInt(i/4))+25+"px";
};
////////////////////////////////////////////////////////////////
}
	
}
////////////////////////////////////////////////////////////////////////////



//送至北京 div和隐藏div的鼠标事件效果
onmouseover_hidden("express","upordown","address");

//关注京东 div和隐藏div的鼠标事件效果
onmouseover_hidden("focusonjingdong","focusonjingdongdivrotate","hiddenoffocus");

//我的京东 div和隐藏div的鼠标事件效果
onmouseover_hidden("myjingdong","myjingdongdiv","minejingdong","linotfollow","listofmyjingdong");

//手机京东 div和隐藏div的鼠标事件效果
onmouseover_hidden("phonejingdong","fonerotatediv","fonejingdongdiv","fonejingdongfrontimg");

//客户服务 div和隐藏div的鼠标事件效果
onmouseover_hidden("customerservice","customerrotatediv","customerhiddenable","linotfollow");

//网站导航  div和隐藏div的鼠标事件效果
onmouseover_hidden("webnavigation","navrotatediv","navhiddenable","linotfollow");




// 手机京东下面的二维码及链接、描述等的布局，两个完全一样
// 使用function进行方法使用
function fonejingdong_layout(qrcode_id,text_link_id,p_id,icon_id){
var oQrcode=document.getElementById(qrcode_id);
var oTextlink=document.getElementById(text_link_id);
var oP=document.getElementById(p_id);
var oIcon=document.getElementById(icon_id);


oTextlink.style.position="absolute";
oTextlink.style.display="inline-block";
oTextlink.style.marginTop="3px";
oTextlink.style.marginLeft="10px";
oTextlink.style.textDecoration="none";
oTextlink.style.fontSize="12px";
oTextlink.style.color="#666666";


oP.style.position="absolute";
oP.style.fontSize="12px";
oP.style.display="inline-block";
oP.style.marginTop="20px";
oP.style.marginLeft="5px";
oP.style.color="#C41A1D";


oQrcode.style.marginLeft="10px";
oQrcode.style.marginTop="10px";


oIcon.style.marginLeft="5px";



}
/////////////////////////////////////////////////////////////


//调用函数调整手机京东下面的两个div样式
fonejingdong_layout("qrcode","alinkid","pid","iconid");
fonejingdong_layout("qrcodevice","alinkidvice","pidvice","iconidvice");
/////////////////////////////////////////////////////////////////////

//网站导航内的li排列
function navilayout(){
   var oDivnav=document.getElementById('navhiddenable');
   var aUlnav=oDivnav.getElementsByTagName('ul');
  
   for (var i=0; i<aUlnav.length; i++) {
       var aLi=aUlnav[i].getElementsByTagName("li");   
   
    for (var j =0; j<aLi.length; j++) {
    	 aLi[j].style.marginLeft=86*parseInt(j/5)+"px";
    	 aLi[j].style.marginTop=25*(j%5)-15+"px";
    };

   	
   };


}


navilayout();
/////////////////////////////////////////////////////////////////


//我的购物车和下面隐藏div的滑动效果

function myShoppingcar(){

     var oDiv1=document.getElementById('mycar')
     var oDiv2=document.getElementById('hiddenshoppinglist');
     function hovered(){
     	oDiv2.style.visibility="visible";
     	oDiv1.style.background="white";
     	oDiv1.style.borderBottom='0px';
     	oDiv1.style.zIndex="999";
     	oDiv1.style.height="38px";
     	oDiv1.style.boxShadow="0px -1px 1px #eee,-1px -2px 1px #eee,1px -2px 1px #eee";
        oDiv2.style.boxShadow="0px 0px 3px #ccc";
     	
     };
    
      function unhoverd(){
           oDiv2.style.visibility="hidden";
           oDiv1.style.background="#F9F9F9";
           oDiv1.style.borderBottom='1px solid  #DFDFDF';
           oDiv1.style.height="35px";
           oDiv1.style.boxShadow="";
           oDiv1.style.zIndex="997";

      };
      

oDiv1.onmouseover=function(){
  hovered();
};
oDiv2.onmouseover=function(){
  hovered();	
};

oDiv1.onmouseout=function(){
unhoverd();
};

oDiv2.onmouseout=function(){
	unhoverd();
};
};

myShoppingcar();

///////////////////////////////////////////////////////