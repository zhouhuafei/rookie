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
	/*what*/
	(function(){
		var pTxt=[
			'在治疗白癜风时白癜风患者最重要的选择就是能够找到一位经验丰富的医生。这个医生最好还是一个好的倾听者，可以给你提供心理上的支持。',
			'患者自己也应该尽可能多的了解有关病情和治疗方法，这样才可以和医生一起讨论，找到更合适的治疗方法。',
			'多和别人聊聊，你的精神会放松很。请相信，你的家人，朋友，还有很多很多的人在关心你，支持你。',
			'最后，心理学家的忠告可以帮助散发型白癜风患者重新审视自己，从而提高你的自信心，让白癜风患者能够更好的投入社会，去生活，去工作。'
		];
		var oDl=$('.what_main dl')[0];
		var oP=$('.what_main dl p')[0];
		var oEm=$('.what_main dl em')[0];
		var oDiv=$('.what_main dl div')[0];	
		var aDt=$('.what_main dl dt');
		var now=0;
		oEm.style.left=aDt[0].offsetLeft+aDt[0].offsetWidth/2-12+'px';
		oP.innerHTML=pTxt[0];
		for(var i=0; i<aDt.length;i++){
			aDt[i].index=i;
			aDt[i].onmouseover=function(){
				now=this.index;
				oEm.style.left='px';
				oP.innerHTML=pTxt[now];
				if(now>1){
					oDiv.style.left=oDl.offsetWidth-oDiv.offsetWidth+'px';
					oEm.style.left=aDt[now].offsetLeft+aDt[0].offsetWidth/2-328+'px';
				}else{	
					oDiv.style.left=0;
					oEm.style.left=aDt[now].offsetLeft+aDt[0].offsetWidth/2-12+'px';						
				}			
			}
				
		}
	})();
	/*trait*/	
	(function(){
		var aImg=$('.trait ul img');
		var now=0;
		for(var i=0; i<aImg.length;i++){
			aImg[i].index=i;
			aImg[i].onmouseover=function(){
				aImg[now].src='images/trait'+(now+1)+'.jpg';
				now=this.index;
				this.src='images/trait'+(now+1)+'_'+(now+1)+'.jpg';	
			}	
		}	
	})();
	/*vedio*/
	(function(){
		var aBtn=$('.vedio_list img');
		var aVedio=$('.vedio_all em');
		var oVedio=$('.vedio span')[0];
		var now=3;
		oVedio.innerHTML=aVedio[3].innerHTML;
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onclick=function(){
				aBtn[now].parentNode.className='';
				now=this.index;	
				this.parentNode.className='li_active';
				oVedio.innerHTML=aVedio[now].innerHTML;
			}	
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
