//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
eventBind(window,'load',function(){
	/*table*/
	(function(){
		var oTab=getClass(document.body,'table_main')[0];
		var aSpan=oTab.getElementsByTagName('span');
		var aStrong=oTab.getElementsByTagName('strong');
		isFit(aSpan,5);
		isFit(aStrong,1);		
	})();
	/*cure*/
	(function(){
		var oCure=getClass(document.body,'cure')[0];
		var oPrev=getClass(oCure,'prev')[0];
		var oNext=getClass(oCure,'next')[0];
		var oUl=oCure.getElementsByTagName('ul')[0];	
		noGapTab(oUl,oNext,oPrev);			
	})();	
	/*expert*/
	(function(){
		var oExpert=getClass(document.body,'expert')[0];
		var oPrev=getClass(oExpert,'prev')[0];
		var oNext=getClass(oExpert,'next')[0];
		var oUl=oExpert.getElementsByTagName('ul')[0];	
		noGapTab(oUl,oNext,oPrev);	
	})();	
	/*perfect_p_mainBtn*/
	(function(){
		var oP_mainBtnBox=getClass(document.body,'p_mainBtn')[0];
		var oP_mainBtn=oP_mainBtnBox.getElementsByTagName('li');
		var aP_mainCut=getClass(document.body,'p_mainCut');
		for(var i=0; i<aP_mainCut.length;i++){
			oP_mainBtn[i].index=i;
			oP_mainBtn[i].onmouseover=function(){
				for(var i=0; i<aP_mainCut.length;i++){
					oP_mainBtn[i].className='';
					aP_mainCut[i].style.display='none';	
				}
				this.className='li_active';	
				aP_mainCut[this.index].style.display='block';
			}
		}				
	})();	
	/*perfect_aPerfect_server_Data*/
	var aPerfect_server={			
			pic:['perfect1_1','perfect1_2','perfect1_3','perfect1_4','perfect1_5','perfect1_6'],		
			txt:[
				'一医一患一诊室：充分保障隐私，一对一就诊。',
				'全程导医跟随：全程导医陪护，为您省去不必要的麻烦。',
				'家属休息室：医院设有专门家属休息室，让您的朋友，亲人有专门休息地方。',
				'全程导医跟随：全程导医陪护，为您省去不必要的麻烦。',
				'专家答疑：您的所有疑问，专家将一一为您解答，消除您的顾虑。',
				'温馨病房：舒适的家园，开心快乐的休息室，微笑式的服务，让您沐浴在关爱的天堂里'
			]
	};
	/*perfect_aPerfect_doctor_Data*/
	var aPerfect_doctor={
			pic:['perfect2_1','perfect2_2','perfect2_3','perfect2_4'],
			txt:[
				'大厅：视觉开扬通透，让您来看的不仅是病，而是一种服务上的享受。',
				'便捷硬件：中药房，西药房，挂号处，收费处在一起，省去奔波时间。',
				'候诊室：微小气候、空气质量、噪声和照度都符合卫生标准。',
				'温馨病房：在温馨的病房里，不会感到无聊和难熬，这里有液晶电视，让您在治疗的同时，可以让时间悠闲的过。',
			]
	};		
	/*perfect_p_mainCut1*/
	(function(){
		var oOl=document.getElementById('p_mainCut1').getElementsByTagName('ol')[0];
		var oBtn=oOl.getElementsByTagName('li');
		var oUl=document.getElementById('p_mainCut1').getElementsByTagName('ul')[0];
		var oImg=oUl.getElementsByTagName('img')[0];
		var oP=oUl.getElementsByTagName('p')[0];
		perfectTab(oBtn,oImg,oP,aPerfect_server);		
	})();	
	/*perfect_p_mainCut2*/
	(function(){
		var oOl2=document.getElementById('p_mainCut2').getElementsByTagName('ol')[0];
		var oBtn2=oOl2.getElementsByTagName('li');
		var oUl2=document.getElementById('p_mainCut2').getElementsByTagName('ul')[0];
		var oImg2=oUl2.getElementsByTagName('img')[0];
		var oP2=oUl2.getElementsByTagName('p')[0];
		perfectTab(oBtn2,oImg2,oP2,aPerfect_doctor);			
	})();
})
/*eventBind*/
function eventBind(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}	
}
/*getClass*/
function getClass(oParent,sClass){
	var aResult=[];
	var re=new RegExp('\\b'+sClass+'\\b','i');
	var aEle=oParent.getElementsByTagName('*');
	for(var i=0;i<aEle.length;i++){
		if(re.test(aEle[i].className)){
			aResult.push(aEle[i]);							
		}	
	}
	return aResult;		
}
/*tabble ==>isFit*/
function isFit(aBtn,num){
	for(var i=num;i<aBtn.length;i++){
		aBtn[i].title='单击选定（单机取消）'
		aBtn[i].onclick=function(){
			if(this.className=='fit'){			
				this.className='';
			}else{			
				this.className='fit';	
			}
		}						
	}
}
/*cure expert ==>noGapTab*/
function move(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed=(iTarget-obj.offsetLeft)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(obj.offsetLeft==iTarget){
			clearInterval(obj.timer);
		}else{
			obj.style.left=obj.offsetLeft+speed+'px'
		}	
	},30);
}
function noGapTab(oParent,oNext,oPrev){
	var now=0;
	var timer=null;
	var aSon=oParent.children;
	oParent.style.width=aSon[0].offsetWidth*aSon.length+'px';
	function next(){
		if(now==aSon.length-1){
			aSon[0].style.position='relative';
			aSon[0].style.left=aSon[0].offsetWidth*aSon.length+'px';
			oParent.style.width=aSon[0].offsetWidth*(aSon.length+1)+'px';
		}
		if(now==aSon.length){
			aSon[0].style.position='static';
			oParent.style.left=0;
			oParent.style.width=aSon[0].offsetWidth*aSon.length+'px';
			now=0;
		}	
		now++;
		move(oParent,-aSon[0].offsetWidth*now)
	}
	function prev(){
		if(now==0){
			aSon[0].style.position='relative';
			aSon[0].style.left=aSon[0].offsetWidth*aSon.length+'px';
			oParent.style.left=-aSon[0].offsetWidth*aSon.length+'px';
			oParent.style.width=aSon[0].offsetWidth*(aSon.length+1)+'px';
			now=aSon.length;
		}			
		if(now==1){
			aSon[0].style.position='static';
			oParent.style.width=aSon[0].offsetWidth*aSon.length+'px';
		}			
		now--;
		move(oParent,-aSon[0].offsetWidth*now)
	}
	timer=setInterval(next,7000);
	oPrev.onmouseover=oNext.onmouseover=oParent.onmouseover=function(){
		clearInterval(timer);	
	}
	oPrev.onmouseout=oNext.onmouseout=oParent.onmouseout=function(){
		timer=setInterval(next,7000);
	}
	oNext.onclick=next;
	oPrev.onclick=prev;	
}
/*perfect_p_mainCut1 perfect_p_mainCut2 ==>perfectTab*/
function perfectTab(oBtn,oImg,oP,aPerfect){
	for(var i=0; i<oBtn.length;i++){
		oBtn[i].index=i;
		oBtn[i].onmouseover=function(){
			for(var i=0; i<oBtn.length;i++){
				oBtn[i].className='';						
			}
			this.className='li_active';
			oImg.src='images/'+aPerfect.pic[this.index]+'.jpg';
			oP.innerHTML=aPerfect.txt[this.index];
		}	
	}				
}