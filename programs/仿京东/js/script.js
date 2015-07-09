


/*大的function对鼠标滑入产生隐藏显现的div块进行参数化，构造可以通用的method*/
function onmouseover_hidden(overid,rotateid,hiddenableid){



var oUl=document.getElementById(hiddenableid);
var aLi=oUl.getElementsByTagName('li');
var oExp=document.getElementById(overid);
var oUpd=document.getElementById(rotateid);
var oP=document.getElementById('addres');




//"送至：..."这个div鼠标滑进去的变化
function exactive(){
	oExp.style.background="white";
	oExp.style.borderRight="1px solid #DDDDDD";
	oExp.style.borderLeft="1px solid #DDDDDD";
	oExp.style.zIndex=999;
	oUpd.style.transform="rotate(-225deg)";
	oUpd.style.transformOrigin="40% 80%";
	//oExp.style.background="blue";
};
///////////////////////////////////////////////


// "送至：..."这个div鼠标移出来的变化
function unexactive(){

	oExp.style.background="#F1F1F1";
	oExp.style.borderRight="1px solid #F1F1F1";
	oExp.style.borderLeft="1px solid #F1F1F1";
	oExp.style.zIndex=998;
	oUpd.style.transform="rotate(-45deg)";
	oUpd.style.transformOrigin="40% 80%";
	//oExp.style.background="blue";	
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


onmouseover_hidden("express","upordown","address");

onmouseover_hidden("myjingdong","myjingdongdiv","minejingdong","linotfollow","listofmyjingdong");

onmouseover_hidden("phonejingdong","fonerotatediv","fonejingdongdiv");


