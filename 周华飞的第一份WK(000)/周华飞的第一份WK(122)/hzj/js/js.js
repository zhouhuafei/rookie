// JavaScript Document
window.addEventListener('DOMContentLoaded',function(){
	/*degree*/
	new TabSwitch('.degree dl');
	/*step*/
	new TabSwitch2('.step dl');
},false)
/*TabSwitch*/	
function TabSwitch(aBtn){
	this.aBtn=document.querySelectorAll(aBtn);
	this.iLen=this.aBtn.length;
	var _this=this;
	for(var i=0;i<this.iLen;i++){
		this.aBtn[i].index=i;
		this.aBtn[i].onclick=function(){
			_this.tab(this);
		}	
	}
	this.init();
}
TabSwitch.prototype.tab=function(_this){
	for(var i=0;i<this.iLen;i++){
		this.aBtn[i].style.backgroundColor='#f93f3f';
	}
	_this.style.backgroundColor='#ff6a6a';
}
TabSwitch.prototype.init=function(){
	this.aBtn[0].style.backgroundColor='#ff6a6a';	
}
/*TabSwitch2*/
function TabSwitch2(aBtn){
	TabSwitch.call(this,aBtn);
}
for(var attr in TabSwitch.prototype){
	TabSwitch2.prototype[attr]=TabSwitch.prototype[attr];
}
TabSwitch2.prototype.tab=function(_this){
	for(var i=0;i<this.iLen;i++){
		this.aBtn[i].querySelector('dd').style.top='-170px';
	}
	_this.querySelector('dd').style.top=0;		
}
TabSwitch2.prototype.init=function(){
	this.aBtn[0].querySelector('dd').style.top=0;
}
