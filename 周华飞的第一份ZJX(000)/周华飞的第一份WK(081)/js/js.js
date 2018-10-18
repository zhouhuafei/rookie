//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
/*banner*/
$(function(){
	var aBtn=$('.banner ol').find('li');
	var aCut=$('.banner ul').find('li');
	timerSwitch(aBtn,aCut);
})

/*date*/
$(function(){
	function getDay(day){  
	       var today = new Date();  		 
	       var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
	       today.setTime(targetday_milliseconds);
	       var tMonth = today.getMonth();  
	       var tDate = today.getDate();  
	       tMonth = fullZero(tMonth + 1);  
	       tDate = fullZero(tDate);  
	       return tMonth+"."+tDate;  
	}
	function fullZero(n){
		return n=n<10?'0'+n:''+n;	
	}
	function upDate(){
		var aSpan=$('.tab span');
		for(var i=0; i<4;i++){
			aSpan[i].innerHTML=getDay(i);
		}
	}
	upDate();
	setInterval(upDate,1000)
})

/*address*/
$(function(){
	var aBtn=$('.address ol').find('li');
	var aCut=$('.address ul').find('li');
	tabSwitch(aBtn,aCut);		
})

/*m_box3*/
$(function(){
	$(".m_box3 ul li:first-child").addClass("hover");
	$(".m_box3 ul li").each(function(i){
		$(".m_box3 ul li").eq(i).mouseover(function(){
			$(this).addClass("hover").siblings("li").removeClass("hover");
			$(".m_box3_c").eq(i).show().siblings(".m_box3_c").hide();			
		});
	});
});

/*question粘性专家*/
eventBind(window,'load',function(){
	var oQues=$('.questionMain')[0];
	var oImgs=$('.questionMain .imgBox')[0];
	var iTop=0;
	var oQues_T=oQues.offsetTop;
	var oImgs_T=oImgs.offsetTop;
	var oQues_H=oQues.offsetHeight;
	var oImgs_H=oImgs.offsetHeight;
	var oWind_W=document.documentElement.clientWidth||document.body.clientWidth;
	window.onscroll=function(){
		iTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(iTop<oImgs_T+oQues_T){
			oImgs.style.position='absolute';
			oImgs.style.top=0;
			oImgs.style.right='10px';
		}else if(iTop>oImgs_T+oQues_T&&iTop<(oQues_T+oQues_H-oImgs_H-60)){
			oImgs.style.position='fixed';
			oImgs.style.top=0;
			oImgs.style.right=(oWind_W-1000)/2+10+'px';
		}else if(iTop>(oQues_T+oQues_H-oImgs_H-60)){
			oImgs.style.position='absolute';
			oImgs.style.top=oQues_H-oImgs_H-60+'px';
			oImgs.style.right='10px';
		}
	}	
})
function eventBind(obj,ev,fn){obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);}

/*question电话输入*/
$(function(){
	var oBtn=$('.question').find('.tel');
	var oForm=$('.question').find('form');
	var oTel=$('.question').find('.telNum');
	var re=/(^1[3|4|5|8|9][0-9]\d{4,8}$)|(^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$)/;
	oBtn.click(function(){
		oBtn.hide();
		oForm.show();	
	})
	oTel.focus(function(){
		oTel.css('color','')
		if(oTel[0].value=='号码错误,请重新输入'||oTel[0].value=='请输入正确的电话号码'){			
			oTel[0].value='';
		}	
	})
	oTel.blur(function(){
		var oValue=oTel[0].value;
		if(!re.test(oValue)){
			oTel.css('color','red')
			oTel[0].value='号码错误,请重新输入';
		}			
	})
})

/*tabSwitch*/
function tabSwitch(aBtn,aCut){
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';	
				aCut[i].className='';
			}
			this.className='li_active';
			aCut[this.index].className='li_active';			
		}	
	}
}

/*timerSwitch*/
function timerSwitch(aBtn,aCut){
	var now=0;
	var timer=null;
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){	
			now=this.index;	
			tab();	
		}	
	}
	function tab(){	
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';	
			aCut[i].className='';
		}
		aBtn[now].className='li_active';
		aCut[now].className='li_active';	
	}
	function next(){
		now++;
		now%=aBtn.length;
		tab();
	}
	timer=setInterval(next,5000);
	aCut[0].parentNode.onmouseover=function(){clearInterval(timer);}
	aCut[0].parentNode.onmouseout=function(){timer=setInterval(next,5000);}
}