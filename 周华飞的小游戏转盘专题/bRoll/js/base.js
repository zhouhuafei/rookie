//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
/*Rookie*/
function Rookie(){}
Rookie.prototype.version=function(){
	var Sys={};
        var ua=navigator.userAgent.toLowerCase();
        var s;
        (s=ua.match(/msie ([\d.]+)/))?Sys.ie=s[1]:
        (s=ua.match(/firefox\/([\d.]+)/))?Sys.firefox=s[1]:
        (s=ua.match(/chrome\/([\d.]+)/))?Sys.chrome=s[1]:
        (s=ua.match(/opera.([\d.]+)/))?Sys.opera=s[1]:
        (s=ua.match(/version\/([\d.]+).*safari/))?Sys.safari=s[1]:0;
	if(Sys.ie<8){
		alert('����������汾����,���������°������');
		window.top.location.href="http://www.firefox.com.cn/download/";
		return false;
	}
}
Rookie.prototype.addEvent=function(obj,ev,fn){obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);}
Rookie.prototype.getStyle=function(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];}
Rookie.prototype.hasClass=function(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b','ig');
	return obj.className.match(re);
}
Rookie.prototype.addClass=function(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b','ig');
	if(!this.hasClass(obj,sClass)){
		if(!obj.className){
			obj.className=sClass;
		}else{
			obj.className+=' '+sClass;	
		}
	}
}
Rookie.prototype.removeClass=function(obj,sClass){
	var re=new RegExp('(\\s)?\\b'+sClass+'\\b','ig');
	if(this.hasClass(obj,sClass)){
		obj.className=obj.className.replace(re,'');
	}
}
Rookie.prototype.move=function(obj,json,fn){
	var self=this;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop=true;
		for(var attr in json){
			var cur=attr=='opacity'?cur=Math.round(parseFloat(self.getStyle(obj,attr))*100):cur=parseInt(self.getStyle(obj,attr));
			var speed=(json[attr]-cur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			cur!=json[attr]&&(bStop=false);
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;	
			}else{
				obj.style[attr]=cur+speed+'px';
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			fn&&fn();	
		}	
	},30)
}
Rookie.prototype.tabSwitch=function(json){
	var aBtn=document.querySelectorAll(json.aBtn)||null;
	var aCut=document.querySelectorAll(json.aCut)||null;
	var iWidth=json.aCut?aCut[0].offsetWidth:0;
	var oPrev=document.querySelector(json.oPrev)||null;
	var oNext=document.querySelector(json.oNext)||null;
	var bAutoPlay=json.bAutoPlay||false;
	var bRoll=json.bRoll||false;
	var now=0;
	var timer=null;
	var self=this;
	var iLen=json.aBtn?aBtn.length:aCut.length;
	var oParent=json.aCut?aCut[0].parentNode:aBtn[0].parentNode;
	if(json.aBtn){
		for(var i=0;i<iLen;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){
				now=this.index;
				tab();
			}	
		}	
	}
	function tab(){
		for(var i=0;i<iLen;i++){
			json.aBtn&&self.removeClass(aBtn[i],'active');
			if(json.aCut)
			{
				if(!json.bRoll){
					aCut[i].style.zIndex=1;
					self.move(aCut[i],{opacity:0});	
				}
			}
		}
		json.aBtn&&self.addClass(aBtn[now],'active');
		if(json.aCut){
			if(json.bRoll){
				self.move(aCut[0].parentNode,{left:-now*iWidth});
			}else{
				aCut[now].style.zIndex=2;
				self.move(aCut[now],{opacity:100});
			}
		}		
	}
	function next(){
		now++;
		now%=iLen;
		tab();
	}
	function prev(){
		now--;
		now==-1&&(now=iLen-1);
		tab();	
	}
	function auto(){
		timer=setInterval(next,5000);	
	}
	if(bAutoPlay){
		auto();
		oParent.onmouseover=function(){
			clearInterval(timer);	
		}
		oParent.onmouseout=function(){
			auto();
		}
	}
	oPrev&&(oPrev.onclick=prev);
	oNext&&(oNext.onclick=next);
}
Rookie.prototype.fillZero=function(n){return n<10?'0'+n:''+n;}
Rookie.prototype.upDate=function(obj,iDay,type){
	var obj=document.querySelector(obj);
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);
	var iYear=oDate.getFullYear();
	var iMonth=oDate.getMonth()+1;
	var iDate=oDate.getDate();
	if(type==true){
		obj.innerHTML=iYear+'��'+this.fillZero(iMonth)+'��'+this.fillZero(iDate)+'��';
	}else{
		obj.innerHTML=iMonth+'��'+iDate+'��';
	}
}