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
		alert('您的浏览器版本过低,建议下载新版浏览器');
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
	var bOpacity=json.bOpacity||false;
	var iBtnNow=0;
	var iCutNow=0;
	var timer=null;
	var self=this;
	var iLen=json.aBtn?aBtn.length:aCut.length;
	var oParent=json.aCut?aCut[0].parentNode:null;
	oParent&&(oParent.style.width=iWidth*iLen+'px');
	if(oParent&&(json.oPrev||json.oNext||json.bAutoPlay)){
		oParent.innerHTML+=oParent.innerHTML;
		oParent.style.width=iLen*iWidth*2+'px';
	}
	if(json.aBtn){
		for(var i=0;i<iLen;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){
				iBtnNow=this.index;
				iCutNow=this.index;
				tab();
				oParent&&self.move(oParent,{left:-iWidth*iBtnNow});
			}	
		}	
	}
	function tab(){
		for(var i=0;i<iLen;i++){
			json.aBtn&&self.removeClass(aBtn[i],'active');
			if(json.aCut)
			{
				if(json.bOpacity){
					aCut[i].style.zIndex=1;
					self.move(aCut[i],{opacity:0});	
				}
			}
		}
		json.aBtn&&self.addClass(aBtn[iBtnNow],'active');
		if(json.aCut){
			if(json.bOpacity){
				aCut[iBtnNow].style.zIndex=2;
				self.move(aCut[iBtnNow],{opacity:100});
			}
		}		
	}
	function next(){
		iBtnNow++;
		iBtnNow%=iLen;
		tab();
		if(iCutNow==iLen){
			iCutNow=0;
			oParent&&(oParent.style.left=0);	
		};
		oParent&&self.move(oParent,{left:-iWidth*(iCutNow+1)});
		iCutNow++;
	}
	function prev(){
		iBtnNow--;
		iBtnNow==-1&&(iBtnNow=iLen-1);
		tab();
		if(iCutNow==0){
			iCutNow=iLen;
			oParent&&(oParent.style.left=-iWidth*iCutNow+'px');	
		};
		oParent&&self.move(oParent,{left:-iWidth*(iCutNow-1)});
		iCutNow--;
	}
	function auto(){
		timer=setInterval(next,5000);	
	}
	if(bAutoPlay){
		auto();
		oParent&&(oParent.onmouseover=function(){
			clearInterval(timer);	
		})
		oParent&&(oParent.onmouseout=function(){
			auto();
		})
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
		obj.innerHTML=iYear+'年'+this.fillZero(iMonth)+'月'+this.fillZero(iDate)+'日';
	}else{
		obj.innerHTML=iMonth+'月'+iDate+'日';
	}
}
Rookie.prototype.offset=function(obj){
	if(typeof obj=='string'){var obj=document.querySelector(obj);}
	var x=0,y=0;
	while(obj!=null){
		x+=obj.offsetLeft;
		y+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return{x:x,y:y}
}
Rookie.prototype.flowNav=function(json){	
	var obj=document.querySelector(json.obj);
	var aChildren=document.querySelectorAll(json.child);
	var aTarget=document.querySelectorAll(json.target);
	var iObjTop=this.offset(obj).y;
	var aTargetTop=[];
	var iLen=aChildren.length;
	//var iParentH=obj.parentNode.offsetHeight;//这个变量是根据江城美容列表页进行的特殊处理,其他专题可以删除
	var iObjH=obj.offsetHeight+50//11;//+11是针对江城美容列表页进行的特殊处理,其他专题可以删除+11或者根据情况修改;
	var iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var now=0;
	var speed=0;
	var timer=null;			
	var self=this;
	//以下是针对江城美容的列表页进行的特殊处理,其他专题使用时可以选择删除;
	/*
	var oBtn=document.querySelector(json.oBtn);			
	var aCut=document.querySelectorAll(json.aCut);
	if(oBtn&&aCut){
		oBtn.onclick=function(){
			clearInterval(timer);	
			window.scrollTo(0,iObjTop);
			for(var i=0;i<iLen;i++){
				self.removeClass(aChildren[i],'active');	
			}
			self.addClass(oBtn,'active');
			aCut[0].style.display='none';
			aCut[1].style.display='block';
			timer=true;
			iParentH=obj.parentNode.offsetHeight;
		}
	}
	*/
	//以上是针对江城美容的列表页进行的特殊处理,其他专题使用时可以选择删除;	
	for(var i=0;i<iLen;i++){
		aTargetTop.push(this.offset(aTarget[i]).y);
		aChildren[i].index=i;
		aChildren[i].onclick=function(){
			//以下是针对江城美容的列表页进行的特殊处理,其他专题使用时可以选择删除;
			/*
			if(oBtn&&aCut){
				self.removeClass(oBtn,'active');
				aCut[0].style.display='block';
				aCut[1].style.display='none';
			}
			iParentH=obj.parentNode.offsetHeight;
			*/
			///以上是针对江城美容的列表页进行的特殊处理,其他专题使用时可以选择删除;
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
		/*if(iScrollTop>=(iObjTop+iParentH)-iObjH+11){//此次判断条件是根据江城美容列表页进行的特殊处理,其他专题可以删除
			obj.style.position='absolute';
			obj.style.top=iParentH-iObjH+8+'px';//此次判断条件是根据江城美容列表页进行的特殊处理,其他专题可以删除	
		}else */if(iScrollTop>=iObjTop){		
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
Rookie.prototype.iScroll=function(){
	var x=document.documentElement.scrollLeft||document.body.scrollLeft;
	var y=document.documentElement.scrollTop||document.body.scrollTop;
	return {x:x,y:y}	
}
Rookie.prototype.iClient=function(){
	var x=document.documentElement.clientWidth;
	var y=document.documentElement.clientHeight;
	return {x:x,y:y}	
}
Rookie.prototype.sliderTil=function(json){
	var aTil=document.querySelectorAll(json.aTil);
	var oParent=document.querySelectorAll(json.oParent)[0];
	var iParentW=oParent.offsetWidth;
	var iLen=aTil.length;
	var iScrollT=this.iScroll().y;
	var iClientT=this.iClient().y;
	var self=this;
	var pos=[];
	this.addEvent(window,'scroll',function(){
		iScrollT=self.iScroll().y;
		for(var i=0; i<iLen;i++){
			pos.push([self.offset(aTil[i]).y,Math.floor((iParentW-aTil[i].offsetWidth)/2)]);
			if(iScrollT+iClientT>=pos[i][0]){aTil[i].style.left=pos[i][1]+'px'}
		}			
	})
}