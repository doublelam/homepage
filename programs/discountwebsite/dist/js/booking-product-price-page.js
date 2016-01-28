(function(){

	function productNumberCounter(){
		$('.plus-btn').click(function(event) {
			console.log($(this).parent().find('input[type="number"]').val()); 
			var productNum = parseInt($(this).parent().find('input[type="number"]').val()); 

			$(this).parent().find('input[type="number"]').val(1+productNum);  
		});

		$('.minus-btn').click(function(event) {
			console.log($(this).parent().find('input[type="number"]').val());
			var productNum = parseInt($(this).parent().find('input[type="number"]').val()); 
			if(productNum<=0){$(this).parent().find('input[type="number"]').val(0);}
			else{$(this).parent().find('input[type="number"]').val(productNum-1);}
	});
	};

		
	function priceCounter(targetele){
		var enableInput=$('.product-display-checkbox:checked').parent().find('input[type=number]');  
		var enablePrice=$('.product-display-checkbox:checked').parent().find('.price-single span') 
		var sumPrice=0; 
		var sumNmber=0;
		var pricePerOne=0;
		var numerOfThings=0;
		for (var i = 0; i <enableInput.length; i++) {
			pricePerOne=parseFloat(enablePrice[i].innerHTML);
			numerOfThings=parseInt(enableInput[i].value);
			 console.log(numerOfThings);  
			 if (isNaN(numerOfThings)){numerOfThings=0}    
			 sumPrice=sumPrice+pricePerOne*numerOfThings;
			 sumNmber=sumNmber+numerOfThings;
		}; 
			              
		
			$(targetele).html('￥'+sumPrice);
			$('.confirm-countered-price').html(sumPrice); 
			$('#thingsNumber').html(sumNmber); 
	};


	function eventPriceChangeBind(btneles,checkboxeles,manufinputeles){
		for (var i = 0; i <btneles.length; i++) {
		btneles[i].onclick=function(){
 			priceCounter('.price-countered-display');  
		}
	}
		for (var i = 0; i <checkboxeles.length; i++) {
		checkboxeles[i].onclick=function(){
 			priceCounter('.price-countered-display');  
		}
	}
		for (var i = 0; i <manufinputeles.length; i++) {
		manufinputeles[i].onkeyup=function(){

 			priceCounter('.price-countered-display');     
		}
		manufinputeles[i].onclick=function(){

 			priceCounter('.price-countered-display');     
		} 
		manufinputeles[i].onmousewheel=function(){ 

 			priceCounter('.price-countered-display');     
		} 
	}


}; 
































priceCounter('.price-countered-display');  
productNumberCounter();
eventPriceChangeBind($('.counter-btn'),$('.product-display-checkbox'),$('input[type=number]')) 



})();