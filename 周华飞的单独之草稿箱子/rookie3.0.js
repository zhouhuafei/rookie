// JavaScript Document
var rookie={
	eventBind:function(obj,ev,fn){return obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);},
	getId:function(id){return document.getElementById(id);},
	getTag:function(oParent,tag){return oParent.getElementsByTagName(tag);},
	getClass:function(oParent,sClass){
		var aResult=[];
		var re=new RegExp('\\b'+sClass+'\\b','i');
		var aEle=oParent.getElementsByTagName('*');
		for(var i=0;i<aEle.length;i++){
			re.test(aEle[i].className)&&aResult.push(aEle[i]);
		}
		return aResult;
	},
	getStyle:function(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];},
	css:function(obj,attr,value){
		if(arguments.length==2){
			return getStyle(obj,attr);
		}
		else{
			obj.style[attr]=value;
		}
	},
	oncontinue:function(obj,fn){
		var ie=!-[1,];
		return ie?obj.onpropertychange=fn:obj.oninput=fn;
	}	
}