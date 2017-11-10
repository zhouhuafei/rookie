//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
eventBind(window,'load',function(){
	/*common_til*/	
	(function(){
		aTil=getClass(document.body,'common_til');
		aTils=getClass(document.body,'common_tils');
		for(var i=0; i<aTil.length;i++){
			aTils[i].style.left=(aTil[i].offsetWidth-aTils[i].offsetWidth)/2+'px';
		}
	})();
	/*note*/
	(function(){
		var oLi=$('.note ol')[0];
		var aLi=$('.note li');
		var aBtn=$('.note .ol_btn')
		var now=0;
		oLi.style.width=aLi[0].offsetWidth*aLi.length+'px';
		for(var i=1;i<aLi.length;i++){
			aLi[i].style.left=(i-1)*50+aLi[i].offsetWidth+'px';
		}
		for(var i=0;i<aLi.length;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){
				now=this.index;
				for(var i=0;i<aLi.length;i++){
					if(now>=i){
						aBtn[i].parentNode.style.left=i*50+'px';								
					}else{
						
						aBtn[i].parentNode.style.left=(i-1)*50+aLi[i].offsetWidth+'px';
					}	
				}
			}	
		}
	})();
})
function eventBind(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}	
}
function getClass(oParent,sClass){
	var aResult=[];
	var re=new RegExp('\\b'+sClass+'\\b','i');
	var aEle=oParent.getElementsByTagName('*');
	for(var i=0;i<aEle.length;i++)	{
		if(re.test(aEle[i].className)){
			aResult.push(aEle[i]);							
		}	
	}
	return aResult;		
}
/*cure*/
$(function(){
	$('.box2_left p').hover(function(){
		var index=$('.box2_left p').index(this);
		$('.box2_left p').removeClass('cur').eq(index).addClass('cur');
		$('.box2_right li').hide().eq(index).show();
	})
	$('.box2_right li').hover(function(){
		var index=$('.box2_right li').index(this);
		$('.box2_right li div').hide().eq(index).show();
	})	
});
/*five*/
$(function(){
	$('.box3 li').hover(function(){
		var index=$('.box3 li').index(this);
		$('.box3 li div').show().eq(index).hide();
		$('.box3 li span').hide().eq(index).show();
	})
});
/*seven*/	
$(function(){
	$('.box4 dl').hover(function(){
		var index=$('.box4 dl').index(this);
		$('.box4 dl').removeClass('cur').eq(index).addClass('cur');
	})
});
