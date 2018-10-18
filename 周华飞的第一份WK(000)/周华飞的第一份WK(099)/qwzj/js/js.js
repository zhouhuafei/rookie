eventBind(window,'load',function(){
	/*classify*/
	(function(){
		TouchSlide({ slideCell:"#classify",titCell:"ol li",mainCell:".classify_dlMain" });
	})();
	/*tab*/
	(function(){
		var aSpan=getClass(document.body,'tab')[0].getElementsByTagName('dt')[0].getElementsByTagName('span');
		function set(){for(var i=0,iLen=aSpan.length;i<iLen;i++){aSpan[i].innerHTML=upDate(i);}}
		set();
		setInterval(set,1000);
	})();
	/*article*/
	(function(){
		var aBtn=getClass(document.body,'article')[0].getElementsByTagName('ol')[0].getElementsByTagName('li');
		var oMain=getClass(document.body,'article_ulMain')[0];
		var oCut=oMain.getElementsByTagName('ul')[0];
		var aCut=oMain.getElementsByTagName('ul')[0].getElementsByTagName('li');
		var oA=oMain.getElementsByTagName('ul')[0].getElementsByTagName('a')[0];
		var now=0;
		for(var i=0,iLen=aBtn.length;i<iLen;i++){
			aBtn[i].index=i;
			aBtn[i].onclick=function(){
				now=this.index;
				if(now==0){
					oA.style.display='block';
					oMain.style.height=aCut[0].offsetHeight+'px';	
				}
				for(var i=0,iLen=aBtn.length;i<iLen;i++){
					removeClass(aBtn[i],'active');	
				}
				addClass(aBtn[now],'active');
				oCut.style.left=-now*aCut[0].offsetWidth+'px';
			}	
		}
		oA.onclick=function(){
			this.style.display='none';
			oMain.style.height=this.parentNode.offsetHeight+'px';
		}
	})();
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*eventBind*/
function eventBind(obj,ev,fn){obj.addEventListener?obj.addEventListener(ev,fn,false):obj.attachEvent('on'+ev,fn);}
/*getClass*/
function getClass(oParent,sClass){
	var aResult=[];
	var re=new RegExp('\\b'+sClass+'\\b','i');
	var aEle=oParent.getElementsByTagName('*');
	for(var i=0,len=aEle.length;i<len;i++){re.test(aEle[i].className)&&aResult.push(aEle[i]);}
	return aResult;
}
/*hasClass*/
function hasClass(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b','ig');
	return obj.className.match(re);
}
/*addClass*/
function addClass(obj,sClass){!hasClass(obj,sClass)&&(obj.className?obj.className+=' '+sClass:obj.className=sClass);}
/*removeClass*/
function removeClass(obj,sClass){
	var re=new RegExp('(\\s)?\\b'+sClass+'\\b','i');
	hasClass(obj,sClass)&&(obj.className=obj.className.replace(re,''));
}
/*fullZero*/
function fullZero(n){return n=n<10?'0'+n:''+n;}
/*updata*/
function upDate(day){
	var oDate=new Date();
	var iTime=oDate.getTime()+24*60*60*1000*day;
	oDate.setTime(iTime);
	var iMoon=oDate.getMonth()+1;
	var iData=oDate.getDate();
	return fullZero(iMoon)+'.'+fullZero(iData);
}