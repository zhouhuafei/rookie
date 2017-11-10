//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
window.onload=function(){
	var aA=document.getElementsByTagName('a');
	var oB=document.getElementById('big');
	var oImg=oB.children[0];
	for(var i=0;i<aA.length;i++){
		aA[i].index=i;
		aA[i].onmouseover=function(){
			var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			oB.style.cssText='transform:rotate(720deg);-webkit-transform:rotate(720deg);opacity:1;filter:alpha(opacity:100);';	
			if(this.index==0){
				oB.style.right=document.documentElement.clientWidth-this.offsetLeft-oB.offsetWidth/2-50+'px';
				oB.style.top='175px';
			}else if(this.index>38){					
				oB.style.right=document.documentElement.clientWidth-this.offsetLeft-oB.offsetWidth/2-50+'px';
				oB.style.top=this.offsetTop-oScrollTop-oB.offsetHeight-50+'px';		
			}else{
				oB.style.right=document.documentElement.clientWidth-this.offsetLeft-oB.offsetWidth-this.offsetWidth*2+'px';	
				oB.style.top=this.offsetTop-oScrollTop-oB.offsetHeight/2+'px';			
			}
			oImg.src='images/big/'+this.index+'.jpg';
		}
		aA[i].onmouseout=function(){
			oB.style.cssText='';		
		}	
	}
}