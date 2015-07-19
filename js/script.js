function hidde_ddis(){

var oUper=document.getElementById(arguments[0]);
var oDowner=document.getElementById(arguments[1]);
var odd=true;
 
function disp(){
if (odd) {
oDowner.style.display="none";
odd=false;
oUper.className="describbtpe";
}

else {
	
	oDowner.style.display="block";
	odd=true;
	oUper.className="describbtpe_js";
}
}
disp();
oUper.onclick=disp;

}
 
hidde_ddis("decribeh4","describep");