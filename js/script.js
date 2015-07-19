// 上下滑动的指示div函数
function move_down_up(){
var oMoveup=document.getElementById('moveup');
var oMovedown=document.getElementById('movedown');
var oDiv1=document.getElementById('page1');
oDiv1.style.marginTop='0px';
var num=0;
oMovedown.onclick=function(){
	
	if (num<3) {
		num++;
	var heightpx=document.body.clientHeight;
     oDiv1.style.marginTop=parseInt(oDiv1.style.marginTop)-heightpx+"px";
     

    };
}

oMoveup.onclick=function(){
	
	if (num>0) {
		num=num-1;
	var heightpx=document.body.clientHeight; 
     oDiv1.style.marginTop=parseInt(oDiv1.style.marginTop)+heightpx+"px";
    
    };
}

}


move_down_up();