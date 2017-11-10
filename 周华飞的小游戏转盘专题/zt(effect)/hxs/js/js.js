//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
window.addEventListener('load',function(){
	jsScrollAddActive('.delay',true);
	onOff('.type p');
        TouchSlide({slideCell:"#dis-main",effect:"leftLoop",autoPlay:true});
	slideTab('.repeat li');
},false)
window.addEventListener('resize',function(){
	slideTab('.repeat li');	
},false)
function onOff(obj){
	var obj=document.querySelectorAll(obj);	
	var iLen=obj.length;
	var re=new RegExp('\\bactive\\b','ig');
	for(var i=0; i<iLen;i++){
		re.test(obj[i].className)?obj[i].onOff=true:obj[i].onOff=false;
		obj[i].onclick=function(){	
			this.onOff?this.classList.remove('active'):this.classList.add('active');
			this.onOff=!this.onOff;	
		}
	}
}
function slideTab(obj){
	var obj=document.querySelectorAll(obj);
	var iWidth=obj[0].offsetWidth;
	var iAllW=obj[0].parentNode.offsetWidth;
	var iLen=obj.length;
	for(var i=1;i<iLen;i++){
		obj[i].style.position='absolute';
		obj[i].style.left=iWidth+((iAllW-iWidth)/2)*(i-1)+'px';
	}	
	for(var j=0;j<iLen;j++){			
		obj[j].className='';				
		obj[0].className='active';	
	}
	for(var i=0;i<iLen;i++){
		obj[i].index=i;
		obj[i].onclick=function(){
			for(var j=0;j<iLen;j++){			
				obj[j].className='';				
				obj[this.index].className='active';	
			}
			for(var i=1;i<iLen;i++){
				if(this.index>=i){
					obj[i].style.left=((iAllW-iWidth)/2)*i+'px';
				}else{
					obj[i].style.left=iWidth+((iAllW-iWidth)/2)*(i-1)+'px';
				}
			}
		}
	}
}