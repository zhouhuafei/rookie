//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
/*createHtml5Element*/
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('aside');
document.createElement('video');
document.createElement('audio');
var r=new Rookie();
r.version();
r.addEvent(window,'load',function(){
	/*email-box*/
	(function(){
		var eMail=new Email();//new一个构造函数
		eMail.init();//初始化函数
		//console.log(eMail.constructor,Email.constructor,Email.prototype.constructor)		
	})();
})
/*Email构造函数*/
function Email(){
	/*获取父级*/
	this.obj=document.getElementById('email-box');
	this.obj.style.cssText=" margin:0 auto; height:40px; position:relative;";
	this.iWidth=this.obj.offsetWidth;
	this.iHeight=this.obj.offsetHeight;
	/*可以进行修改的样式*/
	this.iFontSize=18;
	this.sColor='#060';
	this.sBorder='1px solid #060';
	this.sValue='邮箱/帐号/手机号';
	this.iPadding=10;
	/*创建邮箱输入框input*/
	this.oInput=document.createElement('input');
	this.oInput.style.cssText=" width:"+(this.iWidth-2-this.iPadding*2)+"px; padding:0 "+this.iPadding+"px; height:"+(this.iHeight-2)+"px; line-height:"+(this.iHeight-2)+"px; border:"+this.sBorder+"; font-size:"+this.iFontSize+"px; color:"+this.sColor+";";
	this.oInput.id="email";
	this.oInput.name="email";
	this.oInput.type="text";
	this.oInput.placeholder=this.sValue;
	this.oInput.autocomplete="off";//关闭文本框的自动补全功能
	/*判断IE版本*/
	this.reIE=/(msie\s8.0)|(msie\s9.0)/i;
	this.ie=this.reIE.test(navigator.userAgent);
	this.ie&&(this.oInput.value=this.sValue);//IE8,IE9
	this.obj.appendChild(this.oInput);
	/*创建提示层*/
	this.data=['<======请选择邮箱======>','','@qq.com','@163.com','@126.com','@sina.com','@188.com','@sohu.com','@gmail.com','@hotmail.com','@yahoo.com','@tom.com'];//提示层数据
	this.iLen=this.data.length;
	this.oUl=document.createElement('ul');
	for(var i=0;i<this.iLen;i++){
		var oLi=document.createElement('li');
		oLi.style.cssText=" width:"+(this.iWidth-2-this.iPadding*2)+"px; padding:0 "+this.iPadding+"px; height:"+(this.iHeight-1)+"px; line-height:"+(this.iHeight-1)+"px; border:"+this.sBorder+"; border-top:none; font-size:"+this.iFontSize+"px; color:"+this.sColor+";";
		oLi.innerHTML=this.data[i];
		this.oUl.appendChild(oLi);		
	}
	this.oUl.style.cssText=" width:100%; height:0; position:absolute; left:0; top:"+(this.iHeight)+"px; background:#fff; opacity:0; filter:alpha(opacity:0); transition:1s; overflow:hidden;";	
	this.obj.appendChild(this.oUl);
	/*创建验证盒子*/
	this.oSpan=document.createElement('span');
	this.oSpan.style.cssText=" transition:1s; width:"+(this.iHeight-2)+"px; text-align:center; height:"+(this.iHeight-2)+"px; line-height:"+(this.iHeight-2)+"px; position:absolute; top:0; right:"+(-this.iHeight-12)+"px; border:"+this.sBorder+"; border-radius:50%; color:"+this.sColor+"; font-size:"+(this.iFontSize-4)+"px; opacity:0; filter:alpha(opacity:0);";
	this.obj.appendChild(this.oSpan);	
	/*获取子元素*/
	this.aLi=this.oUl.getElementsByTagName('li');
	this.aLi[0].style.cssText=" width:"+(this.iWidth-2-this.iPadding*2)+"px; padding:0 "+this.iPadding+"px; height:"+(this.iHeight-1)+"px; line-height:"+(this.iHeight-1)+"px; border:"+this.sBorder+"; border-top:none; font-size:"+this.iFontSize+"px; color:"+this.sColor+"; text-align:center;";
}
/*Email构造函数的prototype*/
Email.prototype={
	/*constructor指回Email构造函数本身*/
	constructor:Email,
	/*init初始化*/
	init:function(){
		this.change();
		this.low();
		this.sele(1);
	},
	/*low文本提示向下兼容之优雅的降级*/
	low:function(){
		var self=this;
		this.oInput.onfocus=function(){
			if(self.oInput.value==self.sValue&&self.ie){
				self.oInput.value="";	
			}
		}
		this.oInput.onblur=function(){
			if(self.oInput.value==""&&self.ie){
				self.oInput.value=self.sValue;	
			}
			self.test();					
		}
	},	
	/*onchange事件封装*/
	onchange:function(obj,fn){
		if(this.ie){
			this.oInput.onpropertychange=fn;
		}else{
			this.oInput.oninput=fn;
		}		
	},
	/*change事件触发*/
	change:function(){
		var self=this;
		/*onchange事件*/
		this.onchange(this.oInput,function(){
			if(self.oInput.value==self.sValue||self.oInput.value==""){
				self.tips();
				self.hide();
				return;
			}
			self.show();
			self.tips();
			//self.sele(1);
		})			
	},
	/*show显示ul*/
	show:function(){
		if(this.oUl.className==""){
			this.oUl.className='active';
		}		
		if(this.oInput.className==''){
			this.oInput.className='active';
		}
		
	},	
	/*hide隐藏ul*/
	hide:function(){
		if(this.oUl.className=="active"){
			this.oUl.className='';
		}		
		if(this.oInput.className=='active'){	
			this.oInput.className='';
		}
	},
	/*tips文字输入提示*/
	tips:function(){
		var sValue=this.oInput.value;
		var re=new RegExp('@'+sValue.substring(sValue.indexOf('@')+1)+'','i');//这里是重点
		for(var i=1;i<this.iLen;i++){
			this.aLi[i].style.cssText+=" width:"+(this.iWidth-2-this.iPadding*2)+"px; padding:0 "+this.iPadding+"px; height:"+(this.iHeight-1)+"px; line-height:"+(this.iHeight-1)+"px; border:"+this.sBorder+"; border-top:none; font-size:"+this.iFontSize+"px; color:"+this.sColor+"; display:block;";
		}
		for(var i=1;i<this.iLen;i++){
			if(i==1){
				this.aLi[i].innerHTML=sValue;
			}else{
				if(re.test(sValue)){
					if(re.test(this.data[i])){
						this.aLi[i].style.cssText=" width:"+(this.iWidth-2-this.iPadding*2)+"px; padding:0 "+this.iPadding+"px; height:"+(this.iHeight-1)+"px; line-height:"+(this.iHeight-1)+"px; border:"+this.sBorder+"; border-top:none; font-size:"+this.iFontSize+"px; color:"+this.sColor+"; display:block;";
					}else{
						this.aLi[i].style.cssText=" width:"+(this.iWidth-2-this.iPadding*2)+"px; padding:0 "+this.iPadding+"px; height:"+(this.iHeight-1)+"px; line-height:"+(this.iHeight-1)+"px; border:"+this.sBorder+"; border-top:none; font-size:"+this.iFontSize+"px; color:"+this.sColor+"; display:none;";
					}
				}else{
					this.aLi[i].innerHTML=sValue+this.data[i];
				}
			}
		}
	},
	/*sele鼠标事件和键盘事件*/
	sele:function(iNow){
		var self=this;
		for(var i=1;i<self.iLen;i++){
			self.aLi[i].className='';			
		}
		this.aLi[iNow].className='active';
		for(var i=1;i<self.iLen;i++){
			this.aLi[i].index=i;
			this.aLi[i].onmouseover=function(){
				iNow=this.index;
				self.tab(this);					
			}
			this.aLi[i].onclick=function(){
				self.oInput.value=this.innerHTML;
				if(self.oUl.className=="active"){
					self.oUl.className='';
				}
			}
		}
		this.oInput.onkeydown=function(ev){
			var ev=ev||event
			if(ev.keyCode==38){
				if(iNow==1){
					iNow=self.iLen-1;
				}else{
					iNow--;	
				}
				self.tab(self.aLi[iNow]);
			}	
			if(ev.keyCode==40){
				if(iNow==self.iLen-1){
					iNow=1;
				}else{
					iNow++;	
				}
				self.tab(self.aLi[iNow]);
			}
			if(ev.keyCode==13){
				self.oInput.value=self.aLi[iNow].innerHTML;
				if(self.oUl.className=="active"){
					self.oUl.className='';
				}
			}	
		}
		this.oInput.onclick=function(ev){
			var ev=ev||event;
			ev.stopPropagation?ev.stopPropagation():ev.cancelBubble=true;
		}
		document.onclick=function(){	
			if(self.oUl.className=="active"){
				self.oUl.className='';
			}	
		}			
	},
	tab:function(_this){
		for(var i=1;i<this.iLen;i++){
			this.aLi[i].className='';
		}
		_this.className='active';		
	},
	/*邮箱验证*/
	test:function(){
		var self=this;	
		var re=/^\w+@[a-z0-9]+\.[a-z]+$/i;
		setTimeout(function(){		
			if(re.test(self.oInput.value)){
				self.oSpan.innerHTML='正确';	
				!self.ie&&(self.oInput.className='');
				self.oSpan.className='';
				self.oSpan.style.cssText=" transition:1s; width:"+(self.iHeight-2)+"px; text-align:center; height:"+(self.iHeight-2)+"px; line-height:"+(self.iHeight-2)+"px; position:absolute; top:0; right:"+(-self.iHeight-12)+"px; border:"+self.sBorder+"; border-radius:50%; color:"+self.sColor+"; font-size:"+(self.iFontSize-4)+"px;";
			}else{
				self.oSpan.innerHTML='错误';
				!self.ie&&(self.oInput.className='active');
				self.oSpan.className='active';		
			}
		},200)
	}	
}