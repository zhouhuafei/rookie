//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
eventBind(window,'load',function(){
	/*contrast*/
	(function(){
		var oOl=getClass(document.body,'contrast')[0].getElementsByTagName('ol')[0];
		var oMark=oOl.getElementsByTagName('em')[0];
		var aBtn=oOl.getElementsByTagName('li');
		var oCut=getClass(document.body,'imgShow')[0].getElementsByTagName('img')[0];;
		var now=0;
		var timer=null;
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){
				now=this.index;
				tab();
			}	
		}
		function tab(){		
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';
			}
			aBtn[now].className='li_active';
			oMark.style.left=aBtn[now].offsetLeft+Math.floor((aBtn[now].offsetWidth-oMark.offsetWidth)/2)+'px';
			oCut.src='images/imgShow'+(now+1)+'.jpg';
			var iAngle=360*(now+1);	
		}
		function next(){
			now++;
			now%=aBtn.length;
			tab();
		}
		timer=setInterval(next,7000);
		oCut.onmouseover=oOl.onmouseover=function(){clearInterval(timer);}
		oCut.onmouseout=oOl.onmouseout=function(){timer=setInterval(next,7000);}
	})();
})
function eventBind(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}	
}
function getClass(oParent,sClass){
	var aResult=[];
	var re=new RegExp('\\b'+sClass+'\\b','i');
	var aEle=oParent.getElementsByTagName('*');
	for(var i=0;i<aEle.length;i++){
		if(re.test(aEle[i].className)){
			aResult.push(aEle[i]);							
		}
	}
	return aResult;		
}