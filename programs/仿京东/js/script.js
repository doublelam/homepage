var oUl=document.getElementById('address');
var aLi=oUl.getElementsByTagName('li');
var oExp=document.getElementById('express');
var oUpd=document.getElementById('upordown');
var oP=document.getElementById('addres');
for(var i=0;i<aLi.length;i++){
	aLi[i].style.top=38*(i%6)+10+"px";
	aLi[i].style.left=75*(parseInt(i/6))+25+"px";
};




function exactive(){
	oExp.style.background="white";
	oExp.style.borderRight="1px solid #DDDDDD";
	oExp.style.borderLeft="1px solid #DDDDDD";
	oExp.style.zIndex=999;
	oUpd.style.transform="rotate(-225deg)";
	oUpd.style.transformOrigin="40% 80%";
	//oExp.style.background="blue";
};


function unexactive(){

	oExp.style.background="#F1F1F1";
	oExp.style.borderRight="1px solid #F1F1F1";
	oExp.style.borderLeft="1px solid #F1F1F1";
	oExp.style.zIndex=998;
	oUpd.style.transform="rotate(-45deg)";
	oUpd.style.transformOrigin="40% 80%";
	//oExp.style.background="blue";	
}






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

  


//地名onmouseover效果
aLi[i].onmouseover=function(){
if (this.className=="") {
this.className="addreover";
};

}

//划出时消失
aLi[i].onmouseout=function(){
	if(this.className=="addreover")
{this.className="";}
};


	}





oUl.onmouseout=function(){
	unexactive();
}
oExp.onmouseout=function(){
	unexactive();
}


oUl.onmouseover=function(){
	exactive();
}
oExp.onmouseover=function(){
	exactive();
}

