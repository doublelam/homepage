

(function(){
	$('.track-express-container').slideUp();
	$('.dropdown-view').parent().click(
			function(){
				if($(this).attr('expended')=='true'){
					$(this).next('.track-express-container').slideUp(200);
					$(this).attr('expended','false');
					$(this).find('.dropdown-view').css('transform', 'rotate(0deg)');
				}
				else{ 
					$(this).next('.track-express-container').slideDown(200);
					$(this).attr('expended','true');
					$(this).find('.dropdown-view').css('transform', 'rotate(-180deg)');   
				} 
				

			}  
		)
})()