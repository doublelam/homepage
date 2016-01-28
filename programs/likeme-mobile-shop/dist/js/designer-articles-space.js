

(function(){
	function likeItClick(){
		$('.users-article-operate .icon-thumbs-up').click(function () {
		
		
		$(this).addClass('animated');  
		$(this).addClass('tada');  
		var tempThis=$(this); 
		function removeAnimate(){
			tempThis.removeClass('animated');
			tempThis.removeClass('tada'); 
		 }; 
		setTimeout(removeAnimate, 1000); 
		function likeItColorChange(){
			if(tempThis.attr('marker')!='true'){
				tempThis.attr('marker', true);
				tempThis.css('color', '#4C8CF5');
				console.log(tempThis.next().text()); 
				if(tempThis.next().text()==''){tempThis.next().text(0)}; 
				tempThis.next().text(parseInt(tempThis.next().text())+1); 


			}
			else{
				tempThis.attr('marker', false); 
				tempThis.css('color', '#666');
				tempThis.next().text(parseInt(tempThis.next().text())-1);
				if(tempThis.next().text()=='0'){tempThis.next().text('');};   


			}
			if(tempThis.next().text()==''){tempThis.next().css('margin-left', '0');}
			else{tempThis.next().css('margin-left', '5px');}; 

			
		}  

		likeItColorChange();
		//点击点赞按钮颜色变化并在dom上产生一个marker属性，点击后为true，取消后为false；
	  }); 
	}
	
function commentClick(){
	$('.users-article-operate .comment-block').css('height', '0');
	$('.users-article-operate .icon-commenting').click(function() {
		if ($(this).attr('marker')=='true') {
			$(this).attr('marker', 'false');
			$(this).parent().parent().find('.comment-block').css('height', '0');
			$(this).parent().parent().find('.comment-block').css('marginTop', '0');
			$(this).parent().parent().find('.comment-block input').val(''); 
		}
		else{
			$(this).attr('marker', 'true');
			$(this).parent().parent().find('.comment-block').css('height', '3rem');
			$(this).parent().parent().find('.comment-block').css('marginTop', '20px'); 
			$(this).parent().parent().find('.comment-block input')[0].focus();      
		}  
		
	});
}

function usersPicturesLayout(){
	var aPicContainer=document.getElementsByClassName('users-pictures-display-container');
	var aPicList=null;
	var aItImages=null;
	var columNumber=0;
	for(i=0;i<aPicContainer.length;i++){
		aPicList=aPicContainer[i].getElementsByTagName('li');
		aItImages=aPicContainer[i].getElementsByTagName('img');
		console.log(aPicList.length);
		switch (aPicList.length){
			case 1: for (var j = 0; j <aPicList.length; j++) {
				columNumber=1;
				if(aItImages[j].offsetWidth<aItImages[j].offsetHeight){
					aPicList[j].style.width='60%'; 
					aItImages[j].style.width='100%'; 
					
					aPicList[j].style.height=aItImages[j].offsetHeight+'px';
					 
				}
				else{
					aPicList[j].style.width=aItImages[j].offsetWidth+'px';
					 
					aPicList[j].style.maxWidth='100%';
					aItImages[j].style.width='100%';
					aPicList[j].style.height=aItImages[j].offsetHeight+'px';
				}
				


			}; 
			break;   
		
			

			case 2:
			case 4 : for (var j = 0; j <aPicList.length; j++) { 
				columNumber=2; 
				aPicList[j].style.width='49%';  
				if(j*columNumber<aPicList.length){aPicList[j*columNumber].style.marginRight='2%';}
				 
				console.log(aPicList[j].offsetWidth); 
				aPicList[j].style.height= aPicList[j].offsetWidth+'px'; 
			};  
			break;
			default:
			case 3: for (var j = 0; j <aPicList.length; j++) {
				columNumber=3;
				aPicList[j].style.width='32%';
				if(j*columNumber+1<aPicList.length){aPicList[(j*columNumber)+1].style.marginRight='2%';
				aPicList[(j*columNumber)+1].style.marginLeft='2%';}    
				 
				console.log(aPicList[j].offsetWidth); 
				aPicList[j].style.height= aPicList[j].offsetWidth+'px';
			};
			break;


		}
        for (var j = 0; j <aPicList.length; j++){
        	if(aItImages[j].offsetWidth<aItImages[j].offsetHeight){
        		aItImages[j].style.maxWidth=aPicList[j].offsetWidth*1.5+'px';
        	}
        	else{
        		aItImages[j].style.maxHeight=aPicList[j].offsetHeight*1.5+'px';
        	} 
        }

	}

}

// 点击箭头dropdown
function moreOperateHiddenMask(clickedid,bubbleelement){
		var operateUlHeight=$('.article-more-operate').outerHeight();
		$('.article-more-operate').css({height: '0',opacity:'0'});
		$('.user-tips-more').css('transform','rotate(0deg)');    
		$(clickedid).click(function(){ 
			  
			var maskdiv='<div id="mask-cover" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0);z-index:998"></div>'; 
				$('body').append(maskdiv);
				$(this).css('transform','rotate(180deg)');  
				$(this).next().css({ 
				height: operateUlHeight+'px',opacity:'1' 
				
			});
			function bubbleFlexed(){
				$('#mask-cover').remove();
				$('.user-tips-more').css('transform','rotate(0deg)'); 
				$(bubbleelement).css({  
				height: '0',opacity:'0' 
				}) 
			};
			
			$('#mask-cover').click(function(){

				bubbleFlexed();
				

			});

  
			}); 


		}
// 点击出现弹层并产生覆盖层 

// 图片上传
// 在微信安卓版本下面可能无法调用
$(function() {
	var prependingContent='<img class="commen-images-preview image-preview-temp"><i class="lm-icon icon-close preview-image-close temp-icon"></i>' 
$('.select-file-pic').change(function() { 
	$('.commen-images-preview').removeClass('image-preview-temp');
	$('.preview-image-close').removeClass('temp-icon');


	$('.image_container').prepend(prependingContent);
var $file = $(this); 
var fileObj = $file[0];
var windowURL = window.URL || window.webkitURL;
var dataURL;
var $img = $(".image-preview-temp");
console.log(windowURL.createObjectURL(fileObj.files[0])); 
if(fileObj.files&&fileObj.files[0]){ 
	
	dataURL = window.URL.createObjectURL(fileObj.files[0]); 
	$img.attr('src',dataURL); 
}else{


console.log($('.image-preview-temp').attr('src'));  
if($('.image-preview-temp').attr('src')==undefined){
	$('.image-preview-temp').remove();
	$('.temp-icon').remove();
}  
   
// imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)"; 
// imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;   
}
 function picturePreviewDelete(){ 
	$('.preview-image-close').click(function() {
 		$(this).prev().remove();
		$(this).remove();  
		  

	});
}
picturePreviewDelete(); 


}); 
});
//图片上传功能 


// 点击评论输入框产生回复xx
function replyClickPara(){
	$('.comment-display-block .comment-display-content').click(function(event) {
		$(this).parents('.articles-devided-area').find('.icon-commenting').attr('marker', 'true');
			$(this).parents('.articles-devided-area').find('.comment-block').css('height', '3rem');
			$(this).parents('.articles-devided-area').find('.comment-block').css('marginTop', '20px');
			$(this).parents('.articles-devided-area').find('.comment-block input')[0].focus();
			$(this).parents('.articles-devided-area').find('.comment-block input').val('回复 '+$(this).find('.identity-comment').text());

	});    
}













replyClickPara();
moreOperateHiddenMask('.user-tips-more','.article-more-operate');  
usersPicturesLayout(); 
commentClick(); 
likeItClick();

})();
