// JavaScript Document
define(function(require,experts,module){
	experts.tabSwitch=function(){
		var iAllW=document.documentElement.clientWidth;
		var aImg=document.querySelectorAll('img');
		var iLen=aImg.length;
		var iLiW=300;
		var now=0;
		for(var i=0;i<iLen;i++){
			if(i<Math.floor(iLen/2)){
				aImg[i].style.left=80*i+'px';
				aImg[i].className='l';
			}else if(i>Math.floor(iLen/2)){
				aImg[i].style.left=200+80*i+'px';
				aImg[i].className='r';				
			}else{
				aImg[i].style.left=100+80*i+'px';
				aImg[i].className='c';	
			}
		}
		for(var i=0;i<iLen;i++){
			aImg[i].index=i;
			aImg[i].onclick=function(){
				now=this.index;
				for(var i=0;i<iLen;i++){
					if(i<now){
						aImg[i].style.left=80*i+'px';
						aImg[i].className='l';
					}else if(i>now){
						aImg[i].style.left=200+80*i+'px';
						aImg[i].className='r';				
					}else{
						aImg[i].style.left=100+80*i+'px';
						aImg[i].className='c';	
					}
				}				
			}	
		}
	}	
})
