//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
window.onload=function(){
	var aBtn=document.getElementsByTagName('small');
	var oBig=document.getElementById('big');
	var oImg=oBig.children[0];
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			oBig.style.cssText='transform:rotate(720deg);-webkit-transform:rotate(720deg);opacity:1;filter:alpha(opacity:100);';	
			if(this.index==0){
				oBig.style.right=document.documentElement.clientWidth-this.parentNode.offsetLeft-oBig.offsetWidth/2-50+'px';
				oBig.style.top='175px';
			}else if(this.index>40){					
				oBig.style.right=document.documentElement.clientWidth-this.parentNode.offsetLeft-oBig.offsetWidth/2-50+'px';
				oBig.style.top=this.parentNode.offsetTop-oScrollTop-oBig.offsetHeight-50+'px';		
			}else{
				oBig.style.right=document.documentElement.clientWidth-this.parentNode.offsetLeft-oBig.offsetWidth-this.parentNode.offsetWidth*2+'px';	
				oBig.style.top=this.parentNode.offsetTop-oScrollTop-oBig.offsetHeight/2+'px';			
			}
			oImg.src='images/big/'+this.index+'.jpg';
		}
		aBtn[i].onmouseout=function(){
			oBig.style.cssText='';	
		}	
	}
}