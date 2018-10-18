//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
eventBind(window,'load',function(){
	/*banner*/
	(function(){
		var oParent=$('#banner')[0];
		var aBtn=$('#banner ol li');
		var aCut=$('#banner ul li');
		tabSwitch(aBtn,aCut,true,oParent);
	})();
	/*dynamic*/
	(function(){
		var aBtn=$('#dynamic ol li');
		var aCut=$('#dynamic ul li');
		tabSwitch(aBtn,aCut);
	})();
	/*hospital*/
	 $('.box1_1 dl').find('dd').eq(0).addClass('active')
	 $(".box1_2 ul li").each(function(index){
		  $(this).hover(function(){
			$(".box1_2 ul li.select").removeClass('select');
			$(this).addClass('select');
			$('.box1_1 dl').eq(index).show().siblings().hide();
			$('.box1_1 dl').find('dd').removeClass('active');
			$('.box1_1 dl').eq(index).find('dd').addClass('active');
		  });
	  });
	/*hospital2*/
	$('.box3_1 dl').find('dd').eq(0).addClass('active')
	$(".box3_2 ul li").each(function(index){
		$(this).hover(function(){
			$(".box3_2 ul li.select").removeClass('select');
			$(this).addClass('select');
			$('.box3_1 dl').eq(index).show().siblings().hide();
			$('.box3_1 dl').find('dd').removeClass('active');
			$('.box3_1 dl').eq(index).find('dd').addClass('active');
		});
	});
	/*case*/
	(function(){
		var aBtn=$('#case ol li');
		var aCut=$('#case ul li');
		tabSwitch(aBtn,aCut);
	})();
	/*vedio*/
	(function(){
		var aBtn=$('#vedio ol li');
		var oCut=$('#vedio dt span')[0];
		var aData=$('#vedios span');
		oCut.innerHTML=	aData[0].innerHTML;
		for(var i=0,iLen=aBtn.length;i<iLen;i++){
			aBtn[i].index=i;
			aBtn[i].onclick=function(){oCut.innerHTML=	aData[this.index].innerHTML;}	
		}	
	})();
	/*library*/
	(function(){
		var aBtn=$('#library ol li');
		var aCut=$('#library ul li');
		tabSwitch(aBtn,aCut,true);			
	})();
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*eventBind*/
function eventBind(obj,ev,fn){obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);}
/*getClass*/
function getClass(oParent,sClass){
	var aResult=[];
	var re=new RegExp('\\b'+sClass+'\\b','i');
	var aEle=oParent.getElementsByTagName('*');
	for(var i=0,len=aEle.length;i<len;i++){re.test(aEle[i].className)&&aResult.push(aEle[i]);}
	return aResult;
}
/*hasClass*/
function hasClass(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b','ig');
	return obj.className.match(re);
}
/*addClass*/
function addClass(obj,sClass){!hasClass(obj,sClass)&&(obj.className?obj.className+=' '+sClass:obj.className=sClass);}
/*removeClass*/
function removeClass(obj,sClass){
	var re=new RegExp('(\\s)?\\b'+sClass+'\\b','i');
	hasClass(obj,sClass)&&(obj.className=obj.className.replace(re,''));
}
/*tabSwitch*/
function tabSwitch(aBtn,aCut,bFalse,oParent){
	var now=0;
	var timer=null;
	if(aBtn){
		for(var i=0,len=aBtn.length; i<len;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){
				now=this.index;
				tab();
			}			
		}
	}
	function tab(){
		for(var i=0,len=aBtn?aBtn.length:aCut.length; i<len;i++){
			aBtn&&removeClass(aBtn[i],'active');
			aCut&&removeClass(aCut[i],'active');	
		}
		aBtn&&addClass(aBtn[now],'active');
		aCut&&addClass(aCut[now],'active');			
	}
	function next(){
		now++;
		now%=aBtn?aBtn.length:aCut.length;
		tab();
	}	
	function prev(){
		now--;
		(now==-1)&&(now=aBtn?aBtn.length-1:aCut.length-1);
		tab();
	}
	if(bFalse){
		timer=setInterval(next,6000);
		aCut[0].parentNode.onmouseover=function(){clearInterval(timer);}
		aCut[0].parentNode.onmouseout=function(){timer=setInterval(next,6000);}
	}
	if(oParent){
		var oPrev=getClass(oParent,'prev')[0];
		var oNext=getClass(oParent,'next')[0];
		oPrev.onclick=prev;
		oNext.onclick=next;	
	}
}