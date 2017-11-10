//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
/*careful*/
$(function(){	
	var aTxt=[
		'一个细腻亲切,健谈风趣的朋友,一个有耐心,有责任心的朴素老中医',
		'一个"身经百战",收益无穷的老师,一个严肃认真,一丝不苟的领导',
		'一个早起晚归的工作狂,一个节俭朴素,细心有爱的"老管家"'
	]
	var aBtn=$('.careful ol li');
	var aImg=$('.careful ol img');
	var oImg=$('.careful .img img')[0];
	var oH3=$('.careful h3')[0];
	var now=0;
	for(var i=0; i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			aBtn[now].className='';
			aImg[now].src='images/c'+(now+1)+'.jpg';
			now=this.index;
			aImg[now].src='images/c'+(now+1)+'_'+(now+1)+'.jpg';
			this.className='li_active';
			oH3.innerHTML=aTxt[now];
			oImg.src='images/c_b'+(now+1)+'.jpg';
		}	
	}
})
/*friut*/
$(function(){
	var aBtn=$('.friut ol li');
	var oLine=$('.friut .line')[0];
	var aCut=$('.friut ul');
	var now=0;
	for(var i=0; i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			aBtn[now].className='';
			aCut[now].className='';
			now=this.index;
			this.className='li_active';
			aCut[now].className='ul_active';
			oLine.style.left=aBtn[0].offsetWidth*now+'px';
				
		}	
	}
})
