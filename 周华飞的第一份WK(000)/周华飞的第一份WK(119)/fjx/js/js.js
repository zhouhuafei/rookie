//JavaScript Document
addEvent(window,'load',function(){
	/*expert*/
	(function(){
		var aBtn=document.querySelectorAll('.expert ol li');
		var aCut=document.querySelectorAll('.expert ul li');
		TabSwidth(aBtn,aCut);
	})();
	/*safe*/
	(function(){
		var aBtn=document.querySelectorAll('.safe ol li');
		var aCut=document.querySelectorAll('.safe ul li');
		TabSwidth(aBtn,aCut);		
	})();		
})
function addEvent(obj,ev,fn){obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn);}
function TabSwidth(aBtn,aCut){
	for(var i=0,iLen=aBtn.length;i<iLen;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
				for(var i=0,iLen=aBtn.length;i<iLen;i++){
					aBtn[i].className='';	
					aCut[i].className='';	
				}
				this.className='on';	
				aCut[this.index].className='on';	
		}	
	}
}