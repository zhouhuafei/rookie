// JavaScript Document
//周华飞制作 QQ:1123486116
//rookie making	
//倾心之作,必属佳品

eventBind(window,'load',function()
{	
	/*til*/
	(function(){
		var aTil_span=getClass(document.body,'til_span');
		var aTil_em=getClass(document.body,'til_em');
		for(var i=0;i<aTil_em.length;i++){
			aTil_em[i].style.left=Math.round((aTil_span[i].offsetWidth-aTil_em[i].offsetWidth)/2)+'px';
		}			
	})();
	
	/*type*/
	(function(){		
		var oType=getClass(document.body,'type_content clearFix')[0];
		var oOl=getTag(oType,'ol')[0];
		var aBtn=getTag(oOl,'li');
		var oUl=getTag(oType,'ul')[0];
		var aCut=getTag(oUl,'li');
		var oTri=getId('triangle');
		var now=0;
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;;
			aBtn[i].onmouseover=function(){
				aBtn[now].className='';
				aCut[now].className='';
				now=this.index;
				this.className='li_active';
				aCut[now].className='li_active';
				oTri.style.top=(aBtn[0].offsetHeight+7)*now+'px';
			}				
		}		
	})();	
				
	/*recovery*/
	(function(){
		var oRecovery=getId('recovery');
		var oO=getTag(oRecovery,'ol')[0];
		var aBtn=getTag(oO,'li');
		var oU=getTag(oRecovery,'ul')[0];
		var aCut=getTag(oU,'li');
		showHide2(aBtn,'li_active',aCut,'li_active');
		var oRecovery=getId('recovery');
		var oO2=getTag(oRecovery,'ol')[1];
		var aBtn2=getTag(oO2,'li');
		var oU2=getTag(oRecovery,'ul')[1];
		var aCut2=getTag(oU2,'li');
		showHide2(aBtn2,'li_active',aCut2,'li_active');
	})();

	/*contrast*/
	(function(){
		var oContrast=getId('contrast');
		var oO=getTag(oContrast,'ol')[0];
		var aBtn=getTag(oO,'img');
		var oDiv=getTag(oO,'div')[0];
		var oU=getTag(oContrast,'ul')[0];
		var aCut=getTag(oU,'li');
		showHide(aBtn,'img_active',aCut,'li_active',oDiv);
			
	})();
	
	/*the_hospital*/
	(function(){
		var aBriefing_li=document.getElementById('briefing_ul').getElementsByTagName('li');
		var aBriefing_a=document.getElementById('briefing_ul').getElementsByTagName('a');
		var aBriefing_span=document.getElementById('briefing').getElementsByTagName('span');
		var aBriefing_em=document.getElementById('briefing_ul').getElementsByTagName('em');
		var aTriangle=document.getElementById('briefing_ul').getElementsByTagName('div');
		for(var i=0;i<aBriefing_li.length;i++)
		{
			aBriefing_li[i].index=i;
			aBriefing_li[i].onmouseover=function()
			{
				for(var j=0; j<aBriefing_li.length;j++)
				{
					aBriefing_li[j].className='';
					aBriefing_span[j].style.display='none';
					aTriangle[j].style.display='none';
					aBriefing_a[j].style.color='#000';
					aBriefing_em[j].className='briefing_em'+(j+1);
				}
				this.className='li_active';
				aBriefing_span[this.index].style.display='block';
				aTriangle[this.index].style.display='block';
				aBriefing_a[this.index].style.color='#fff';
				aBriefing_em[this.index].className='briefing_em'+(this.index+1+'1')+'';
			}
		}		
	})();
	
	
})
function eventBind(obj,ev,fn){return obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);}
function getId(id){return document.getElementById(id);}
function getTag(oParent,tag){return oParent.getElementsByTagName(tag);}
function getClass(oParent,sClass){var aResult=[];var aEle=oParent.getElementsByTagName('*');for(var i=0;i<aEle.length;i++){aEle[i].className==sClass&&aResult.push(aEle[i]);}return aResult;}
function showHide2(aBtn,btnClass,aCut,cutClass){
	var now=0;
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			aBtn[now].className='';
			aCut[now].className='';
			now=this.index;
			this.className=btnClass;
			aCut[now].className=cutClass;
		}	
	}	
}
function showHide(aBtn,btnClass,aCut,cutClass,other){
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
		for(var i=0; i<aBtn.length;i++){
			aBtn[i].className='';
			aCut[i].className='';				
		}
		aBtn[now].className=btnClass;
		aCut[now].className=cutClass;
		other&&(other.style.left=aBtn[now].offsetLeft+84+'px');
	}
	function next(){
		now++;
		now%=aBtn.length;
		tab();
	}
	timer=setInterval(next,7000);
	aCut[0].parentNode.onmouseover=function(){
		clearInterval(timer)
	}
	aCut[0].parentNode.onmouseout=function(){
		timer=setInterval(next,7000);
	}
}