//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
var rookie={}
rookie.tools={}
rookie.tools.getId=function(id){return document.getElementById(id);}
rookie.tools.getTag=function(oParent,tag){return oParent.getElementsByTagName(tag);}
rookie.tools.getClass=function(oParent,sClass){var aResult=[],re=new RegExp('\\b'+sClass+'\\b','i'),aEle=oParent.getElementsByTagName('*');for(var i=0;i<aEle.length;i++){re.test(aEle[i].className)&&aResult.push(aEle[i]);}return aResult;}
rookie.tools.eventBind=function(obj,ev,fn){return obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);}
rookie.tools.oncontinue=function(obj,fn){var ie=!-[1,];return ie?obj.onpropertychange=fn:obj.oninput=fn;}
rookie.tools.getStyle=function(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];}
rookie.assemblies={}
rookie.applications={}