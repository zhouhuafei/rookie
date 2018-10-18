// JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
function eventBind(obj,ev,fn){return obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);}
function getId(id){return document.getElementById(id);}
function getTag(oParent,tag){return oParent.getElementsByTagName(tag);}
function getClass(oParent,sClass){
	var aResult=[];
	var re=new RegExp('\\b'+sClass+'\\b','i');
	var aEle=oParent.getElementsByTagName('*');
	for(var i=0;i<aEle.length;i++){
		re.test(aEle[i].className)&&aResult.push(aEle[i]);
	}
	return aResult;
}
function getStyle(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];}
function css(obj,attr,value){
	if(arguments.length==2){
		return getStyle(obj,attr);
	}
	else{
		obj.style[attr]=value;
	}
}
function oncontinue(obj,fn){
	var ie=!-[1,];
	return ie?obj.onpropertychange=fn:obj.oninput=fn;
}