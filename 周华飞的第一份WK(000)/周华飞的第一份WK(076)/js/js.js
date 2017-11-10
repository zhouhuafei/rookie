//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/

/*eight*/
$(function(){
	var aBtn=$('.eight ol li');
	var oPrev=$('.eight ol em')[0];
	var oNext=$('.eight ol em')[1];
	var aCut=$('.eight ul li');
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
	function prev(){
		now--;
		(now==-1)&&(now=aBtn.length-1);
		tab();	
	}
	oPrev.onclick=prev;
	oNext.onclick=next;
	timer=setInterval(next,7000);
	aCut[0].parentNode.onmouseover=function(){clearInterval(timer);}
	aCut[0].parentNode.onmouseout=function(){timer=setInterval(next,7000);}	
})
				
/*work*/
$(function(){
	var oImg=$('.work img')[0];
	var oP=$('.work p')[0];
	var aBtn=$('.work ol li');
	var aTxt=[
		'忙碌的一天从这通电话开始了',
		'她笑着说：检查病历，不亚于熟读四书五经，简单重复却能看出她的认真',
		'细心的她总是详细检查后，才分类装入档案袋',
		'每天她的桌面总是堆满一本本病历',
		'分类好的病历本分类存储在这里——新科医院病历库'
	];	
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			now=this.index;
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';
			}
			this.className='li_active';
			oP.innerHTML=aTxt[this.index];
			oImg.src='images/work'+(this.index+1)+'.jpg';
		}	
	}	
})();