(function(){


	var aPriceLi=document.getElementsByClassName('single-goods-list');
	var aNewerPrice=document.getElementsByClassName('discounted-price');
	var aOlderPrice=document.getElementsByClassName('old-price'); 
	var aLiSingleGoods=document.getElementsByClassName('single-goods-check-icon'); 
	var idName=''; 
	
	function resultCountedPrice(){
		
		
		
		 
   

		function summeryPrice(){ 

			var singleGoodsNum=0; 
			var sumPrice=0;  
			var sumOlderPrice=0; 
			var discountOff=10;
			var discountedPrice=0;      
			for(i=0;i<aPriceLi.length;i++){ 
				if (aPriceLi[i].marker=='marked'){  
				singleGoodsNum++;
			    sumPrice=sumPrice+Number(aNewerPrice[i].innerHTML.substr(1));
			    sumOlderPrice=sumOlderPrice+Number(aOlderPrice[i].innerHTML.substr(1));
			    discountOff=10-singleGoodsNum;
			    discountedPrice=(discountOff/10*sumPrice).toFixed(2);     
			    //打折商品折扣与商品数量公式，discount：折扣；  singleGoodsNum:选择的商品数量


				};   
			}
			console.log('总价格'+sumPrice); 
			console.log('单数量'+singleGoodsNum);
			console.log('打折前价格'+sumOlderPrice);

			$('.more-discount-hint').html('再享'+discountOff+'折'); 
			$('.result-discounted-price').html('￥'+discountedPrice);     
			$('.discounted-before-price').html('￥'+sumPrice); 
		};
		summeryPrice();
		function cancleBtn(){
			for(i=0;i<aPriceLi.length;i++){ 
				idName='#single-goods-list'+i+' .single-goods-check-icon';
				console.log($(idName).parent()[0].tempStuff+'stuff'); 
				if ($(idName).parent()[0].tempStuff==true){   
					$(idName).parent()[0].marker='unmarked'; 
					$(idName).removeClass('icon-check-circle');
					$(idName).addClass('icon-circle-thin');   
				};   
			}  
		};
		
		
		sumPriceCount=summeryPrice; 
		cancleBtnOuter=cancleBtn;
	
	}
	       
	var sumPriceCount=null;
	var cancleBtnOuter=null;
 	function labelClickFlex(){  
  
			
			
			resultCountedPrice();//test    
			for (var i = 0; i <aLiSingleGoods.length; i++) { 
				
				idName='#single-goods-list'+i+' .single-goods-check-icon'; 
 


				$(idName).click(function(){
						for (var j = 0; j <aLiSingleGoods.length;j++) { 
						idName='#single-goods-list'+j+' .single-goods-check-icon';   
						$(idName).parent()[0].tempStuff=false;  
						}
					
					    $(this).parent()[0].tempStuff=true;

						if ($(this).parent()[0].marker!='marked') {
						$(this).parent()[0].marker= 'marked';
						$(this).removeClass('icon-circle-thin');
						$(this).addClass('icon-check-circle');
						sumPriceCount();
						
					}
					else{
						$(this).parent()[0].marker= 'unmarked';
						$(this).removeClass('icon-check-circle');
						$(this).addClass('icon-circle-thin'); 
						sumPriceCount();     
					}; 


						
					
					console.log($(idName).parent()[0].tempStuff); 
							if($(this).parent()[0].marker=='marked'){  
  				//function   

				$(this).modal({     
        ANIMATE: '.fadeInUp quick',
        CSS_CLASS: '.modal-choose',
        CSS_TOP: 'auto',
        CSS_BOTTOM: '0',
        CSS_MASK_OPACITY: 0.5,
        OK_BTN: true,
        DISPOSABLE: true, 
        CLOSE_BTN: true,    
        LOCK: true, 
        beforeShow: function() {
            $(this.$modalContent).html($('.item-prop').html());
            return true;
        },
        show: function() { 
            $('.modal-choose .prop-choose .btn-prop').click(function(){
                $(this).siblings().removeClass('sel');
                $(this).addClass('sel');
            }); 
            $('[data-trigger="spinner"]').spinner();
        },
        close: function() {  
        	 
        	cancleBtnOuter();    
        	sumPriceCount(); 
        },

        	 
          
    }) 
    //function

     }
	


				}) 
  		
				
			  	 
     

 
			};
			
			}; 
function getLiveDomHtml(){ 
 
	$(document).on('click','.single-goods-size .sel',function(){
		for (var i = 0; i <aLiSingleGoods.length; i++) {
			idName='#single-goods-list'+i+' .single-goods-check-icon';
			if($(idName).parent()[0].tempStuff==true){        
				$('.reference-size-colour .size')[i].innerHTML="尺寸："+$(this).html();  
			}       
		};
		ifNotSelectDisplayHint(); 	            
		})     
	$(document).on('click','.single-goods-color .sel',function(){
			  for (var i = 0; i <aLiSingleGoods.length; i++) {
			idName='#single-goods-list'+i+' .single-goods-check-icon';
			if($(idName).parent()[0].tempStuff==true){        
				$('.reference-size-colour .color')[i].innerHTML="颜色："+$(this).html();    
			}       
		}; 
		ifNotSelectDisplayHint();         
		})
	$(document).on('click','.ok-btn', function(){     
		 for (var i = 0; i <aLiSingleGoods.length; i++) {
			idName='#single-goods-list'+i+' .single-goods-check-icon';
			if($(idName).parent()[0].tempStuff==true){ 
				if ($('.reference-size-colour .size')[i].innerHTML==''||$('.reference-size-colour .color')[i].innerHTML=='') {
					alert('请选择尺寸和颜色');
					cancleBtnOuter();    
        	        sumPriceCount();  

				};
			}
		}
	});  
}  

function ifNotSelectDisplayHint(){ 
	var sizeHtml=null;
	var colorHtml=null;
	for (var i = 0; i <aLiSingleGoods.length; i++) {
		sizeHtml=$('.reference-size-colour .size')[i].innerHTML;
		colorHtml=$('.reference-size-colour .color')[i].innerHTML;
			if(colorHtml==''&& sizeHtml==''){  
			    $('.select-hint')[i].innerText='请选择尺寸和颜色';      
			}    
			else{$('.select-hint')[i].innerText='已选择:';}          
			}  
}


ifNotSelectDisplayHint(); 
getLiveDomHtml(); 
labelClickFlex();   

})();