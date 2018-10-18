// JavaScript Document
/*
**author:rookie
**qq:1123486116
**/
function Rookies(){};
Rookies.prototype.addEvent=function(obj,ev,fn){obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);}
Rookies.prototype.hasClass=function(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b','ig');
	return obj.className.match(re);
}
Rookies.prototype.addClass=function(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b','ig');
	if(!this.hasClass(obj,sClass)){
		if(!obj.className){
			obj.className=sClass;
		}else{
			obj.className+=' '+sClass;	
		}
	}
}
Rookies.prototype.removeClass=function(obj,sClass){
	var re=new RegExp('(\\s)?\\b'+sClass+'\\b','ig');
	if(this.hasClass(obj,sClass)){
		obj.className=obj.className.replace(re,'');
	}
}
Rookies.prototype.offset=function(obj){
	if(typeof obj=='string'){var obj=document.querySelector(obj);}
	var x=0,y=0;
	while(obj!=null){
		x+=obj.offsetLeft;
		y+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return{x:x,y:y}
}
Rookies.prototype.flowNav=function(json){	
	var obj=document.querySelector(json.obj);
	var aChildren=document.querySelectorAll(json.child);
	var aTarget=document.querySelectorAll(json.target);
	var iObjTop=this.offset(obj).y;
	var aTargetTop=[];
	var iLen=aChildren.length;
	var iObjH=json.iObjHeight?obj.offsetHeight:0;
	var iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var now=0;
	var speed=0;
	var timer=null;			
	var self=this;
	for(var i=0;i<iLen;i++){
		aTargetTop.push(this.offset(aTarget[i]).y);
		aChildren[i].index=i;
		aChildren[i].onclick=function(){
			now=this.index;
			for(var i=0;i<iLen;i++){	
				self.removeClass(aChildren[i],'active');	
			}
			self.addClass(aChildren[now],'active');
			clearInterval(timer);
			timer=setInterval(function(){
				iOldScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				speed=(aTargetTop[now]-iObjH-iOldScrollTop)/10;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);		
				window.scrollTo(0,iOldScrollTop+speed);
				if(iOldScrollTop==aTargetTop[now]-iObjH){
					clearInterval(timer);
					timer=null;	
				}
			},30)
		};
	}
	this.addEvent(window,'scroll',function(){
		iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(iScrollTop>=iObjTop){		
			obj.style.position='fixed';
			obj.style.top=0;
			obj.style.zIndex=10;		
		}else{
			obj.style.position='absolute';	
			obj.style.top=0;	
		}
		if(!timer){
			for(var i=0;i<iLen;i++){			
				if(iScrollTop>=aTargetTop[i]-iObjH){				
					for(var j=0;j<iLen;j++){
						self.removeClass(aChildren[j],'active');
					}
					self.addClass(aChildren[i],'active');			
				}
			}	
		}
	});
}
var r=new Rookies();
r.addEvent(window,'load',function(){
	!-[1,]&&/msie\s(\d+)/i.exec(navigator.userAgent)[1]!=8&&(window.location.href="http://www.firefox.com.cn/download/");
	r.flowNav({obj:"#slider ul",child:"#slider li",target:".content"});
})