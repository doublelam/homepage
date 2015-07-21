var arr1=["image/outman1.jpg","image/outman2.jpg","image/outman3.jpg"];
var arr2=["image/outman4.jpg","image/outman5.jpg","image/outman6.jpg"];





function display(menuname,arrayname,theothermenuname){

  var oDiv=document.getElementById('altdis'); 
  var oMenu=document.getElementById(menuname);
  var aDiv=oDiv.getElementsByTagName('div');
  var oImg=document.getElementById('imag');
  var oldMenu=document.getElementById(theothermenuname);
     
 var argu=arguments[1];
 
 function menuclick(){

    
 	oDiv.innerHTML="";
    for (var i = 0; i <arrayname.length; i++) {
    	if (argu==arr1) {j=i+1}
    	else if (argu==arr2) {j=i+4}
   
    	
    oDiv.innerHTML+='<div class="divli">'+'图片'+j+'</div>';

    };

    
     oldMenu.style.background="#94FFC6";
 	 oMenu.style.background="blue";
     aDiv[0].style.background="darkgreen";
     oImg.src=arrayname[0];

          
     for (var i = 0; i <aDiv.length; i++) {
     	aDiv[i].index=i;
     	aDiv[i].onclick=function(){
        for (var j = 0;j <aDiv.length; j++) {
        	aDiv[j].style.background="green";
        };
        oImg.src=arrayname[this.index];
        this.style.background="darkgreen";
		
		

     	}
     };



 }
oMenu.onclick=menuclick;
menuclick();


}



display("menu2",arr2,"menu1");
display("menu1",arr1,"menu2");







function intervaldispaly(){
      var oDiv=document.getElementById('altdis'); 
      var aDiv=oDiv.getElementsByTagName('div');
       var oImg=document.getElementById('imag');


   window.setTimeout(function delaydisplay1(){
		  display("menu1",arr1,"menu2");
			},1000);

     window.setTimeout(function delaydisplay2(){

       for (var j = 0;j <aDiv.length; j++) {
        	aDiv[j].style.background="green";
        };

        aDiv[1].style.background="darkgreen";
        oImg.src=arr1[1];
       },2000);


        window.setTimeout(function delaydisplay3(){

       for (var j = 0;j <aDiv.length; j++) {
        	aDiv[j].style.background="green";
        };

        aDiv[2].style.background="darkgreen";
        oImg.src=arr1[2];
       },3000);



        window.setTimeout(function delaydisplay4(){
		  display("menu2",arr2,"menu1");
			},4000);

   

        window.setTimeout(function delaydisplay5(){

       for (var j = 0;j <aDiv.length; j++) {
        	aDiv[j].style.background="green";
        };

        aDiv[1].style.background="darkgreen";
        oImg.src=arr2[1];
       },5000);


        window.setTimeout(function delaydisplay6(){

       for (var j = 0;j <aDiv.length; j++) {
        	aDiv[j].style.background="green";
        };

        aDiv[2].style.background="darkgreen";
        oImg.src=arr2[2];
       },6000);


  }

intervaldispaly();
window.setInterval(intervaldispaly,6000);


