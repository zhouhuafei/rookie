//JavaScript Document
eventBind(window,'load',function(){
	/*interest*/
	(function(){
			var scrollPic_02 = new ScrollPic();
			scrollPic_02.scrollContId   = "interest_ul"; //内容容器ID
			scrollPic_02.arrLeftId      = "interest_prev";//左箭头ID
			scrollPic_02.arrRightId     = "interest_next"; //右箭头ID
			
			scrollPic_02.frameWidth     = 884;//显示框宽度
			scrollPic_02.pageWidth      = 300; //翻页宽度   (翻页宽度 = 显示框宽度)
			scrollPic_02.sclContWidth   = 9000; //内容容器总宽度   (内容容器总宽度=显示框宽度*图片个数*2)       
			
			scrollPic_02.speed          = 20; //移动速度(单位毫秒，越小越快)
			scrollPic_02.space          = 20; //每次移动像素(单位px，越大越快)
			scrollPic_02.autoPlay       = true; //自动播放
			scrollPic_02.autoPlayTime   = 5; //自动播放间隔时间(秒)
			scrollPic_02.initialize(); //初始化			
	})();
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*eventBind*/
function eventBind(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}	
}