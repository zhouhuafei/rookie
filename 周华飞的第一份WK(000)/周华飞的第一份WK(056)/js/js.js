//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
eventBind(window,'load',function(){
	
	/*common_i*/
	(function(){
		var aCommon_i=getClass(document.body,'common_i');
		for(var i=0; i<aCommon_i.length;i++){
			aCommon_i[i].style.left=Math.floor((1000-aCommon_i[i].offsetWidth)/2)+'px';	
		}
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
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	var re=RegExp('\\b'+sClass+'\\b','i');
	for(var i=0; i<aEle.length;i++){
		if(re.test(aEle[i].className)){
			aResult.push(aEle[i]);	
		}	
	}
	return aResult;
}