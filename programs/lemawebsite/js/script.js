

$('#menu').click(function(){
	$('#sidebar').css({'left':'0px'});
    var eleTxt='<div id="coverDiv" style="z-index:998;position:fixed;background:rgba(0,0,0,.5);top:0;left:0;width:100%;height:100%"></div>';
    $('body').append(eleTxt);
   $('#coverDiv').click(function(){
     $('#sidebar').css({'left':'-200px'});
     $('#coverDiv').remove();

   })
   
})


var obj="nav ul li:eq(3)";
$(obj).click(
	function(){
	  $("html,body").animate({scrollTop: 0 }, 400);
})

