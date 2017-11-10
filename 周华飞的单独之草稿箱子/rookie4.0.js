// JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
//前台调用:使用前先实例化Rookie防止aEle共享
var fnR=function(_this){
	return	new Rookie(_this);
}
//rookie基础库
function Rookie(_this){
	//创建一个数组用来存储节点和节点数组
	this.aEle=[];	
	if(_this){
		this.aEle[0]=_this;
		//return this;	//这里不用返回,因为传入this时==>fnR(this)函数返回的就是new Rookie(_this)对象本身;不过添加了返回值貌似也不会出错,有待验证...
	}
}	
//获取id节点
Rookie.prototype.getId=function(id){
	this.aEle.push(document.getElementById(id));
	return	this;
}
//获取tag节点
Rookie.prototype.getTag=function(tag){
	var aTag=document.getElementsByTagName(tag);
	for(var i=0;i<aTag.length;i++){
		this.aEle.push(aTag[i]);			
	}
	return this;	
}
//获取class节点
Rookie.prototype.getClass=function(sClass,idArea){
	var oParent=null;
	if(arguments.length==2){
		oParent=document.getElementById(idArea);
	}else{
		oParent=document;	
	}
	var allEle=oParent.getElementsByTagName('*');
	var re=new RegExp('\\b'+sClass+'\\b','i');//var re=new RegExp('\\s|^'+sClass+'\\s|$','i');
	for(var i=0;i<allEle.length;i++){
		if(re.test(allEle[i].className)){
			this.aEle.push(allEle[i]);	
		}
	}
	return this;
}
//添加class
Rookie.prototype.addClass=function(sClass){
	var re=new RegExp('\\b'+sClass+'\\b','i');//var re=new RegExp('\\s|^'+sClass+'\\s|$','i');
	for(var i=0;i<this.aEle.length;i++){
		if(!re.test(this.aEle[i].className)){
			this.aEle[i].className+=' '+sClass;			
		}	
	}
	return this;
}
//移除class
Rookie.prototype.removeClass=function(sClass){
	var re=new RegExp('\\b'+sClass+'\\b','i');//var re=new RegExp('\\s|^'+sClass+'\\s|$','i');
	for(var i=0;i<this.aEle.length;i++){
		if(re.test(this.aEle[i].className)){
			this.aEle[i].className=this.aEle[i].className.replace(re,' ');		
		}	
	}
	return this;		
}
//获取某一个节点
Rookie.prototype.getOne=function(num){
	var oOne=this.aEle[num];
	this.aEle=[];
	this.aEle[0]=oOne;
	return this;
}
//getStyle
Rookie.prototype.getStyle=function(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];	
	}	
}
//设置css
Rookie.prototype.css=function(attr,value){
	for(var i=0;i<this.aEle.length;i++){
		if(arguments.length==1){
			return this.getStyle(this.aEle[i],attr);	
		}
		this.aEle[i].style[attr]=value;			
	}
	return this;
}
//设置html
Rookie.prototype.html=function(str){
	for(var i=0;i<this.aEle.length;i++){
		if(arguments.length==0){
			return this.aEle[i].innerHTML;	
		}
		this.aEle[i].innerHTML=str;			
	}
	return this;
}
//show显示
Rookie.prototype.show=function(){		
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].style.display='block';		
	}
	return this;		
}
//hide隐藏
Rookie.prototype.hide=function(){		
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].style.display='none';		
	}
	return this;		
}
//center居中
Rookie.prototype.center=function(width,height){
	var iTop=(document.documentElement.clientHeight-height)/2;
	var iLeft=(document.documentElement.clientWidth-width)/2;	
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].style.top=iTop+'px';
		this.aEle[i].style.left=iLeft+'px';
	}
	return this;
}
//hover事件方法
Rookie.prototype.hover=function(fnOver,fnOut){		
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].onmouseover=fnOver;
		this.aEle[i].onmouseout=fnOut;	
	}
	return this;		
}
//click事件方法
Rookie.prototype.click=function(fn){		
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].onclick=fn;		
	}
	return this;	
}
//resize事件方法
Rookie.prototype.resize=function(fn){	
	for(var i=0;i<this.aEle.length;i++){
		var oEle=this.aEle[i];
		window.onresize=function(){
			if(fn){
				fn();
			}else{		//下述封装我觉得完全是多此一举,因为可以直接使用center(width,height)让他居中,用户体验绝对要比下述的封装要好很多;
				if(oEle.offsetLeft>fnR().getInner().width-oEle.offsetWidth){oEle.style.left=fnR().getInner().width-oEle.offsetWidth+'px';}
				if(oEle.offsetTop>fnR().getInner().height-oEle.offsetHeight){oEle.style.top=fnR().getInner().height-oEle.offsetHeight+'px';}
			}
		}
	}	
	return this;	
}
//获取可视区窗口大小
Rookie.prototype.getInner=function(){
	if(window.innerWidth){
		return{
			width:window.innerWidth,	//firefox为了兼容低版本火狐,因为低版本火狐在使用锁屏时,会不去计算滚动条的那段高度,会导致遮罩空缺
			height:	window.innerHeight	//firefox不过我认为没必要做这样的兼容,因为低版本firefox的市场占有率现在应该可以忽略不计了吧
		}	
	}else{
		return{			
			width:document.documentElement.clientWidth,		//全都兼容	但是在低版本火狐,本次的遮罩实验时,会产生小bug,遮罩层会少覆盖一段滚动条的距离
			height:document.documentElement.clientHeight		//全都兼容
		}	
	}	
}
//lock事件方法
Rookie.prototype.lock=function(){	
	for(var i=0;i<this.aEle.length;i++){
		//我认为理想的封装应该,先创建一个div,然后再添加一个csstext属性,创造一个完美的锁屏事件
		this.aEle[i].style.width=getInner().width+'px';
		this.aEle[i].style.height=getInner().height+'px';
		this.aEle[i].style.display='block';
		document.documentElement.style.overflow='hidden';	//隐藏滚动条 防止弹窗且拖拽时遮罩层覆盖不了全屏的的BUG----当然如果拖拽做了限制,也可以解决这个BUG 
	}								//但是对于IE来说,虽然取消了滚动条,但是依然会出现遮罩断层现象,所以建议对拖拽进行限制,可完美解决不必要的BUG
	return this;	
}
//unlock事件方法
Rookie.prototype.unlock=function(){	
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].style.display='none';
		document.documentElement.style.overflow='auto';		//弹窗取消时 取消锁屏并还原滚动条的默认状态----当然如果拖拽做了限制,也可以解决这个BUG
	}
	return this;	
}
//drag事件方法
Rookie.prototype.drag=function(){	
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].onmousedown=function(ev){
			var ev=ev||event;
			var _this=this;				//this  指的是this.aEle[i];
			var iDisX=ev.clientX-this.offsetLeft;		//this  指的是this.aEle[i];
			var iDisY=ev.clientY-this.offsetTop;		//this  指的是this.aEle[i];
			document.onmousemove=function(ev){
				var ev=ev||event;
				var iL=ev.clientX-iDisX;
				var iT=ev.clientY-iDisY;
				iL<=50&&(iL=0);				//50是附加的吸附效果(可有可无,只是为了提高用户体验,本人附加的一个小特效)
				if(iL>=fnR().getInner().width-_this.offsetWidth-50){iL=fnR().getInner().width-_this.offsetWidth;}
				iT<=50&&(iT=0);
				if(iT>=fnR().getInner().height-_this.offsetHeight-50){iT=fnR().getInner().height-_this.offsetHeight;}
				_this.style.left=iL+'px';		//_this  指的是this.aEle[i];
				_this.style.top=iT+'px';		//_this  指的是this.aEle[i];
			}
			document.onmouseup=function(){
				this.onmousemove=null;
				this.onmouseup=null;
				_this.releaseCapture&&_this.releaseCapture();
			}
			_this.setCapture&&_this.setCapture();
			ev.stopPropagation?ev.stopPropagation():ev.cancelBubble=true;
			ev.preventDefault?ev.preventDefault():ev.returnValue=false;		//阻止默认事件会导致输入框无效
		}	
	}
	return this;
}
//事件绑定eventBind	事件绑定自带标准化的event事件  即var ev=ev||event;
Rookie.prototype.eventBind=function(obj,ev,fn){			//如果fn不是一个匿名函数,而是从外部传入的一个函数名称,则在IE8以下版本会发生this取值不同的BUG
	if(obj.attachEvent){						//如果fn不是一个匿名函数==>会触发以下BUG
		obj.attachEvent('on'+ev,fn);				//直接使用匿名函数,默认是可以标准化event的,但是在匿名函数里执行fn函数,无法标准化event(请观看第2条BUG)
	}else{								//1.this取值不同,IE8以下取的是window,标准化取值是当前事件元素(fn不是一个匿名函数,才会触发此BUG)
		obj.addEventListener(ev,fn,false);			
	}
	return this;
}
//事件绑定eventBind2	非完全解决上述问题
Rookie.prototype.eventBind2=function(obj,ev,fn){			//无法解决的问题==>无法使用下述的移除事件绑定==>IE执行顺序颠倒==>执行多次同一个非匿名函数W3C会忽略,IE不会忽略
	if(obj.attachEvent){						
		obj.attachEvent('on'+ev,function(){			//2.在匿名函数里使用事件冒充,解决了this传值问题,但是无法标准化event
			fn.call(obj,window.event);			//使用事件冒充,解决this传值和无法标准化event问题(this指向obj,window.event是参数)
		});						
	}else{								
		obj.addEventListener(ev,fn,false);			
	}
	return this;
}
//移除事件绑定removeEvent1(很少使用,尽量不用)
Rookie.prototype.removeEvent=function(obj,ev,fn){			//fn不能是匿名函数,否则移除无效且移除事件
	if(obj.detachEvent){
		obj.detachEvent('on'+ev,fn);	
	}else{
		obj.removeEventListener(ev,fn,false);
	}
	return this;
}