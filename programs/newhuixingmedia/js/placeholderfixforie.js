(function(){
     var input = document.createElement('input');
     var textarea=document.createElement('textarea');
     var iepart={
        placeHolder:function(element){
            var aInput=document.getElementsByTagName(element);
            for(i=0;i<aInput.length;i++){
                 console.log(aInput[i].getAttribute('placeholder')!==null);
                if(aInput[i].getAttribute('placeholder')!==null){ 
                    if (aInput[i].getAttribute('type')=='password'){
                        aInput[i].setAttribute('type','text');
                        console.log(aInput[i].type,'hhh');
                         console.log(aInput[i].getAttribute('type'),'jjj');

                        if(aInput[i].type=='password'){
                            console.log(aInput[i].type,'yes');
                            aInput[i].style.display='none';
                            var inputEle = document.createElement("input"); 
                            // 创建一个元素节点 
                            insertAfter(inputEle,aInput[i]); 
                            // 因为js没有直接追加到指定元素后面的方法 所以要自己创建一个方法 
                            function insertAfter( newElement, targetElement ){ 
                            // newElement是要追加的元素 targetElement 是指定元素的位置 
                            var parent = targetElement.parentNode; 
                            // 找到指定元素的父节点 
                            if( parent.lastChild == targetElement ){ 
                            // 判断指定元素的是否是节点中的最后一个位置如果是的话就直接使用appendChild方法 
                            parent.appendChild( newElement, targetElement ); 
                            }else{ 
                            parent.insertBefore( newElement, targetElement.nextSibling );
                            }; 
                            }; 
                            inputEle.setAttribute('type',aInput[i].getAttribute('type'));
                            inputEle.setAttribute('placeholder',aInput[i].getAttribute('placeholder'));
                            inputEle.setAttribute('style',aInput[i].getAttribute('style'));
                            inputEle.setAttribute('class',aInput[i].getAttribute('class'));
                            inputEle.style.display='inline-block';
                            inputEle.fakemark=true;




                        }
                        aInput[i].markpassword=true;
                        aInput[i].value=aInput[i].getAttribute('placeholder');
                    }
                   else{aInput[i].value=aInput[i].getAttribute('placeholder');}
                    
                }
                aInput[i].onfocus=function(){
                    if (this.value==this.getAttribute('placeholder')) {
                        if(this.fakemark==true){
                            this.style.display='none';
                            console.log(this.nextSibling); 
                            this.previousSibling.style.display='inline-block';
                            this.previousSibling.focus();

                        }
                        if(this.markpassword==true){
                            this.setAttribute('type','password');
                            this.style.display='inline-block';
                        }
                        this.value="";};
                    
                };
                aInput[i].onblur=function(){
                    if (this.value=="") {
                        if (this.markpassword==true) {
                            this.setAttribute('type','text');
                            console.log(this.type);
                            if(this.type=='password'){
                            this.style.display='none'; 
                            this.nextSibling.style.display='inline-block'; }
                        };
                        this.value=this.getAttribute('placeholder');};
                        console.log(this.type); 
                    
                };
            }  
            
        
         }  
            // if(!placeHolderSupport()){
            //     console.log(placeholderSupport());
            // }
        };
    
if("placeholder" in input){
    console.log('支持placeholder');
}else{
    console.log('不支持placeholder');
    iepart.placeHolder('input'); 
     iepart.placeHolder('textarea');    


}
   
    
})(); 