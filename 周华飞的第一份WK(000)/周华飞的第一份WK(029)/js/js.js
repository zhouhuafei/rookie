// JavaScript Document
eventBind(window,'load',function()
{
	/*top_nav*/
	var oTop_nav=document.getElementById('top_nav'); 
	var aTop_li=oTop_nav.getElementsByTagName('a');
	navTab(aTop_li,'a_active')
	function navTab(obj,attr)
	{
		for(var i=0; i<obj.length; i++)
		{
			obj[i].onmouseover=function()
			{
				for(var i=0; i<obj.length; i++)
				{
					obj[i].className='';	
				}
				this.className=attr;
			}	
		}
		
	}
	
	/*style_nav*/
	var oStyle_nav=document.getElementById('style_nav');
	var aStyle_li=oStyle_nav.getElementsByTagName('li');
	var oStyle_move=document.getElementById('move');
	var oStyle_move_a=oStyle_move.getElementsByTagName('a')[0];
	var oStyle_move_img=oStyle_move.getElementsByTagName('img')[0];
	var arrStyleOldImg=['images/style1.png','images/style2.png','images/style3.png','images/style4.png','images/style5.png','images/style6.png','images/style7.png','images/style8.png']
	var arrStyleNewImg=['images/style1_1.png','images/style2_2.png','images/style3_3.png','images/style4_4.png','images/style5_5.png','images/style6_6.png','images/style7_7.png','images/style8_8.png']
	var roll=0;
	for(var i=0; i<aStyle_li.length; i++)
	{
		aStyle_li[i].index=i;
		aStyle_li[i].onmouseover=function()
		{
			for(var i=0; i<aStyle_li.length; i++)
			{
				aStyle_li[i].src=arrStyleOldImg[i];	
			}
			oStyle_move_img.src=arrStyleNewImg[this.index];
			oStyle_move_a.href=aStyle_li[this.index].title;
			oStyle_move.style.left=aStyle_li[this.index].offsetLeft+'px';
			roll=360*this.index;
			oStyle_move.style.transform='rotate('+roll+'deg)';
		}	
	}
	
	/*important*/
	var oScroll_box=document.getElementById('scroll_box');
	var oScroll_ul=oScroll_box.getElementsByTagName('ul')[0];
	var oScroll_bar=document.getElementById('scrollBar');
	oScroll_bar.onmousedown=function(ev)
	{
		var oEvent=ev||event;
		var disY=oEvent.clientY-oScroll_bar.offsetTop;
		document.onmousemove=function(ev)
		{
			var oEvent=ev||event;
			var t=oEvent.clientY-disY;
			if(t<0){t=0;}
			if(t>oScroll_box.offsetHeight-oScroll_bar.offsetHeight){t=oScroll_box.offsetHeight-oScroll_bar.offsetHeight;}
			oScroll_bar.style.top=t+'px';
			var scale=oScroll_bar.offsetTop/(oScroll_box.offsetHeight-oScroll_bar.offsetHeight);
			oScroll_ul.style.top=-scale*(oScroll_ul.offsetHeight-oScroll_box.offsetHeight)+'px';				
		}
		document.onmouseup=function()
		{
			document.onmousemove=null;
			document.onmouseup=null;
			if(oScroll_bar.releaseCapture){oScroll_bar.releaseCapture();}
		}
		if(oScroll_bar.setCapture){oScroll_bar.setCapture();}
		return false;
	}
	/*im_left*/
	var oIm_left=document.getElementById('im_left');
	var oVedio_case=oIm_left.getElementsByTagName('em')[0];
	var oVedio_li=oIm_left.getElementsByTagName('li');
	for(var i=0; i<oVedio_li.length; i++)
	{
		oVedio_li[i].index=i;
		oVedio_case.style.color='#fff';
		oVedio_case.style.textAlign='center';
		oVedio_case.style.lineHeight=oVedio_case.offsetHeight+'px';
		oVedio_li[i].onclick=function()
		{
			for(var i=0; i<oVedio_li.length; i++)
			{
				oVedio_li[i].className='';
			}
			this.className='li_active';
			oVedio_case.innerHTML=this.innerHTML;
		}
	}
	
	/*process*/	
	var oProcess=document.getElementById('process');
	var aProcess_li=oProcess.getElementsByTagName('li');
	var aProcess_p=oProcess.getElementsByTagName('p');
	var aProcess_h2=oProcess.getElementsByTagName('h2');
	for(var i=0; i<aProcess_li.length; i++)
	{
		aProcess_li[i].index=i;
		aProcess_li[i].onmouseover=function()
		{
			for(var i=0; i<aProcess_li.length; i++)
			{
				aProcess_li[i].className='';
				aProcess_h2[i].className='';
				aProcess_p[i].className='';	
			}
			this.className='li_active';
			aProcess_h2[this.index].className='h2_active';
			aProcess_p[this.index].className='p_active';
		}	
	}

	/*advantage*/
	var oAdvantage=document.getElementById('advantage');
	var aAdvantage_li=oAdvantage.getElementsByTagName('li');
	var aAdvantage_div=oAdvantage.getElementsByTagName('div');
	var aAdvantage_span=oAdvantage.getElementsByTagName('span');
	for(var i=0;i<aAdvantage_li.length;i++)
	{
		aAdvantage_li[i].index=i;
		aAdvantage_li[i].onmouseover=function()
		{
			for(var i=0;i<aAdvantage_li.length;i++)
			{
				aAdvantage_div[i].style.display='block';
				aAdvantage_span[i].style.display='none';
			}
			aAdvantage_div[this.index].style.display='none';
			aAdvantage_span[this.index].style.display='block';
		}
	}
	
	/*replay*/
	var oReplay=document.getElementById('replay');
	var aReplay_li=oReplay.getElementsByTagName('li');
	var aReplay_p=oReplay.getElementsByTagName('p');
	var aReplay_span=oReplay.getElementsByTagName('span');
	var aReplay_div=oReplay.getElementsByTagName('div');
	for(var i=0;i<aAdvantage_li.length;i++)
	{
		aReplay_li[i].index=i;
		aReplay_li[i].onmouseover=function()
		{
			for(var i=0;i<aAdvantage_li.length;i++)	
			{
				aReplay_p[i].className='';
				aReplay_span[i].className='';
				if(i%2)
				{
					aReplay_div[i].style.borderBottomColor='#d2d2d2'
				}	
				else
				{
					aReplay_div[i].style.borderTopColor='#d2d2d2'	
				}	
					
			}
			aReplay_p[this.index].className='p_active';
			aReplay_span[this.index].className='span_active';
			if(this.index%2)
			{
				aReplay_div[this.index].style.borderBottomColor='#0064b4'
			}	
			else
			{
				aReplay_div[this.index].style.borderTopColor='#0064b4'	
			}
		}
	}
	
	/*footer_nav*/
	var oFooter_nav=document.getElementById('footer_nav');
	var aFooter_a=oFooter_nav.getElementsByTagName('a');
	navTab(aFooter_a,'a_active');
})
function eventBind(obj,ev,fn)
{
	if(obj.attachEvent)
	{
		obj.attachEvent('on'+ev,fn);
	}
	else
	{
		obj.addEventListener(ev,fn,false);
	}	
}