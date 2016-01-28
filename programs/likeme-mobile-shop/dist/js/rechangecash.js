(function(){
	var maskFlexedBubble=null;
	function hiddenMask(clickedid,bubbleelement){
		
		$(clickedid).click(function(){
			
			var maskdiv='<div id="mask-cover" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:9998"></div>';    
			$('body').append(maskdiv);
			$(bubbleelement).css({
				display: 'block'
				
			});
			function bubbleFlexed(){
				$('#mask-cover').remove();
				$(bubbleelement).css({
				display: 'none'
				})
			};
			maskFlexedBubble=bubbleFlexed;
			$('#mask-cover').click(function(){

				bubbleFlexed();
				noTracked(); 

			});

  
			}); 


		}
		// 点击出现弹层并产生半透明覆盖层 

	function isEnable(){
		if($('.rechange-commit').attr('disabled')=='disabled'){ 
					$('.rechange-commit').css({
						background: '#aaa', 
						color: 'white'
					})
				}
				else{$('.rechange-commit').css({
						background: '#222',  
						color: 'white'   
				})
				}
	}	
	//检测按钮是否是disable状态，并改变样式

	function isCashRechangable(){ 
		$('.cash-input').keyup( 
			function(){
				var numtype=/^\d{1,7}$/; 
				var numtype2=/^\d{1,7}\.{1}\d{1,2}$/; 
  
				if($('.cash-input').val().match(numtype)||$('.cash-input').val().match(numtype2)){  
					console.log($('.cash-input').val());
					$('.rechange-commit').attr('disabled',false); 
					}
				else{
					$('.rechange-commit').attr('disabled',true); 
					} 
					console.log($('.rechange-commit').attr('disabled')=='disabled');
				isEnable();
				
				}	 
				)};
		// 进行正则匹配，如果输入金额不是数字或者不符合位数，使按钮处于disable

	function labbelClick(){
		   $('.buble-lable-commen').click(function(event){
		   		console.log(maskFlexedBubble);
		   		maskFlexedBubble();
		   });
	} 
	// 弹层内部点击仍然使弹层消失

	function checkContentChange(enchangeele,banedele){
	 

		if(enchangeele==".mask-bank-series"){ 
			$('.bank-select-container').click(function() {
			console.log($('.bank-select-radios:checked').attr('id'));        
		    $('.bank-name').html($('.bank-select-radios:checked').prev().html());              
			});  
		}
	}
	// 选择银行卡使页面银行卡变化


	// var fakeBankInfo={ 
	// 	"banknumber":0,     
	// }  
	// function verifyBankInfo(){
	// 	if(fakeBankInfo.banknumber==0){
	// 		console.log('dd');
	// 		$('#banks-select').css({
	// 			display: 'none'
	// 		});
	// 		$('#add-bank').css({
	// 			display: 'block'
				
	// 		});
	// 	}
	// 	else{
	// 		$('#banks-select').css({
	// 			display: 'block'
	// 		});
	// 		$('#add-bank').css({
	// 			display: 'none' 
	// 		}); 
	// 	}
	// }
	function accountAlte(){
		$('#account-type').val($('#up-down-icon').children('option:selected').val());
		$('#up-down-icon').change(function() {
			console.log($(this).children('option:selected').val());    
			$('#account-type').val($(this).val()); 
			withoutLocationiIfAlipay(); 

			 


		});
	} 
	// 选择账户类型时时input内value与选中账号一致

	function menuBanksOprateClick(){
		$('.menu-icon').attr('onoff',true); 


		$('.menu-icon').click(function(){
			   

			      
			if($(this).attr('onoff')=='true'){  
			$(this).next().css({
				display: 'block'
			});
			$(this).attr('onoff',false);  
		}
			else{
				$(this).next().css({
				display: 'none' 
			});
				$(this).attr('onoff',true);   
			}

		});


	};
	// 银行卡管理：点击菜单图标使可选内容出现

	function deleteCancel(){
		$('.delete-cancel').click(function() {
			maskFlexedBubble();   

		});
	};
	// 取消删除银行卡操作

	function markWhichDelete(){
		$('.delete-btn').click(function() {
			$(this).parent().parent().attr('deleteable',true); 
		});
	}
	// 点击删除按钮，标记可删除银行卡卡片

	function deleteAction(){
		$('.delete-warn').click(function() {
			$('.bankcards-list[deleteable="true"]').remove();
			maskFlexedBubble(); 

		});
	}
	// 确认删除移除被标记div

	var noTracked=null;
	function cancelMarkTract(){
		function cancelTrackOfMark(){
			$('.bankcards-list').attr('deleteable',false);
			$('.menu-icon').attr('onoff',true);
			$('.bank-manage-menu').css('display','none');   

		};
	noTracked=cancelTrackOfMark
		$('.delete-cancel').click(cancelTrackOfMark);
		

	}
	// 点击页面使操作菜单消失时取消删除标记

	function cancelBtn(){
		$('.cancel-paycode-btn').click(function(event) {
			maskFlexedBubble(); 
			$('.verify-code-input').val(''); 
		});
	}

	// 输入支付密码框点击取消弹层消失并清空密码框内容

	
	function cashChangeFollowUser(){
		$('.rechange-commit').click(function() {
			$('.cash-rechangeout').html($('.cash-input').val()+'元');
			console.log($('.verify-code-input')[0].type);  
			 $('.verify-code-input')[0].focus(); 
			 
			
	})
	}
	 // 支付框金额显示与填入金额一致

function pageJumpTo(clickbtn,url){
	$(clickbtn).click(function(event) {
		location.href=url; 
	});
}
// 点击btn 实现页面跳转；

function withoutLocationiIfAlipay(){

	if($('#account-type').val()=='支付宝'){
		$('.location-bank-regist').css({
			'display': 'none'  
		});
	}
	else{
		$('.location-bank-regist').css({
			'display': 'block'      
		});
	}
};
// 判断是否是银行类型支付宝。是使开户地址消失

function accountTypeKeyup(){
	$('#account-type').keyup(function() {
		withoutLocationiIfAlipay(); 
	});    
}



	 
	accountTypeKeyup();
	cancelBtn();
	cancelMarkTract(); 
	deleteAction(); 
	markWhichDelete(); 
	menuBanksOprateClick(); 
	accountAlte(); 
	// verifyBankInfo(); 
	checkContentChange('.mask-bank-series');   
	labbelClick();
	isEnable();	
	isCashRechangable(); 
	hiddenMask('#banks-select','.mask-bank-series');
	 
	hiddenMask('.delete-btn','.deleted-commit');
	hiddenMask('.rechange-commit','.password-verify');     
	deleteCancel(); 
	cashChangeFollowUser();
  
	pageJumpTo('.commit-paycode-btn','rechange-success.html');
	withoutLocationiIfAlipay();     

})();
 