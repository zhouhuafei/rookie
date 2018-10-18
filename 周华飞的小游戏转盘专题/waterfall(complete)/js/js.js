//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
addEvent(window,'load',function(){
	var waterfall=new WaterFall();
	waterfall.init();		
})
function WaterFall(){
	this.oUl=document.querySelector('ul#waterfall');
	this.aLi=document.querySelectorAll('ul#waterfall li');
	this.iLiWidth=this.aLi[0].offsetWidth;
	this.viewWidth=document.documentElement.clientWidth;
	this.viewHeight=document.documentElement.clientHeight;
	this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	this.cols=Math.floor(this.viewWidth/this.iLiWidth);
	this.oUl.style.width=this.cols*this.iLiWidth+'px';
	this.aLiHeight=[];
	this.aLiMinHeight=null;
	this.minIndex=null;
	this.lastHeight=null;
	this.bTrue=null;
	this.data={
		"imgdata":[
			{"src":"images/31.jpg"},
			{"src":"images/32.jpg"},
			{"src":"images/33.jpg"},
			{"src":"images/34.jpg"},
			{"src":"images/35.jpg"},
			{"src":"images/36.jpg"},
			{"src":"images/37.jpg"},
			{"src":"images/38.jpg"},
			{"src":"images/39.jpg"},
			{"src":"images/40.jpg"}
		]
	}
}
WaterFall.prototype={
	constructor:WaterFall,
	init:function(){
		this.getLiHeight();
		this.wScroll();
	},
	getLiHeight:function(){
		for(var i=0;i<this.aLi.length;i++){
			if(i<this.cols){
				this.aLiHeight[i]=this.aLi[i].offsetHeight//把第一行的li的高度全部存储到数组中
			}else{
				this.aLiMinHeight=Math.min.apply(null,this.aLiHeight);//获取数组中存储的第一行高度中最小的那个li的高度
				this.aLi[i].style.position='absolute';
				this.aLi[i].style.top=this.aLiMinHeight+'px';
				this.minIndex=this.posIndex(this.aLiHeight,this.aLiMinHeight);//获取数组中存储的第一行高度中最小的那个li的位置
				this.aLi[i].style.left=this.minIndex*this.iLiWidth+'px';
				this.aLiHeight[this.minIndex]+=this.aLi[i].offsetHeight;//改变数组中存储的第一行高度中最小的那个li的高度
			}			
		}
	},
	/*获取数组中存储的第一行高度中最小的那个li的位置*/
	posIndex:function(arr,iMin){
		for(var i in arr){
			if(arr[i]==iMin){
				return i;
			}
		}
	},
	wScroll:function(){
		var self=this;
		addEvent(window,'scroll',function(){
			self.aLi=document.querySelectorAll('ul#waterfall li');//获取原先的li和新添的li
			self.getLiHeight();//给原先的li和新添的li也要加上样式
			self.bTrue=self.boolean();
			if(self.bTrue){
				for(var i=0;i<self.data.imgdata.length;i++){
					var oLi=document.createElement('li');	
					oLi.innerHTML='<a><img src="'+self.data.imgdata[i].src+'"></a>';
					self.oUl.appendChild(oLi);
				}
			}	
		})
	},
	boolean:function(){
		this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		this.lastHeight=this.offsetTop(this.aLi[this.aLi.length-1]);
		if(this.scrollTop+this.viewHeight>=this.lastHeight){
			return true;
		}else{
			return false;
		}
	},
	offsetTop:function(obj){
		var iTop=0;
		while(obj){
			iTop+=obj.offsetTop;
			obj=obj.offsetParent;
		}
		return iTop;
	}
}
function addEvent(obj,ev,fn){obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);}