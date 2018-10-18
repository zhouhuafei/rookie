// JavaScript Document
eventBind(window,'load',function()
{
	function show_hide(obj_btn,btn_class,obj_cut,cut_class)
	{
		for(var i=0;i<obj_btn.length;i++)
		{
			obj_btn[i].index=i;
			obj_btn[i].onmouseover=function()
			{
				for(var i=0;i<obj_btn.length;i++)
				{
					if(!obj_cut)
					{
					}
					else
					{
						
						obj_cut[i].className='';
					}
					obj_btn[i].className='';
				}	
				this.className=btn_class;
				if(!obj_cut)
				{
				}
				else
				{
					obj_cut[this.index].className=cut_class;
				}
			}	
		}
	}
	
	/*need*/
	var oNeed=document.getElementById('need');
	var aNeed_li=oNeed.getElementsByTagName('li');
	var aNeed_a=oNeed.getElementsByTagName('a');
	show_hide(aNeed_li,'li_active',aNeed_a,'a_active')
					
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
})
eventBind(window,'scroll',function()
{
	/*side_bar*/
	var oSide_bar=document.getElementById('side_bar');
	var aSide_bar_img=oSide_bar.getElementsByTagName('img');
	var aSide_oldArr=['images/side_bar1.png','images/side_bar2.png','images/side_bar3.png','images/side_bar4.png','images/side_bar5.png','images/side_bar6.png','images/side_bar7.png'];
	var aSide_newArr=['images/side_bar1_1.png','images/side_bar2_2.png','images/side_bar3_3.png','images/side_bar4_4.png','images/side_bar5_5.png','images/side_bar6_6.png','images/side_bar7_7.png'];
	var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;var o0=document.getElementById('0');
	var o0=document.getElementById('0');
	var o1=document.getElementById('1');
	var o2=document.getElementById('2');
	var o3=document.getElementById('3');
	var o4=document.getElementById('4');
	var o5=document.getElementById('5');
	var o6=document.getElementById('6');
	var oNumArr=[o0.offsetTop,o1.offsetTop,o2.offsetTop,o3.offsetTop,o4.offsetTop,o5.offsetTop,o6.offsetTop];
	if(oScrollTop>=900)
	{
		oSide_bar.style.cssText='position:fixed;right:20px;top:0px;';			
	}
	else
	{
		oSide_bar.style.cssText='';	
	}	
	for(var i=0; i<aSide_bar_img.length;i++)
	{
		aSide_bar_img[i].index=i;
		aSide_bar_img[i].onclick=function()
		{
			/*
			for(var i=0; i<aSide_bar_img.length;i++)	//这一段for循环纯属画蛇点足,多余了,因为下面的if语句里面已经包括了图片切换效果
			{
				aSide_bar_img[i].src=aSide_oldArr[i];
			}
			this.src=aSide_newArr[this.index];		//这一段for循环纯属画蛇点足,多余了,因为下面的if语句里面已经包括了图片切换效果
			*/
			window.scrollTo(0,oNumArr[this.index]);						
		}
		if(oScrollTop>=oNumArr[i])
		{
			for(var j=0; j<aSide_bar_img.length;j++)
			{
				aSide_bar_img[j].src=aSide_oldArr[j];	
			}
			aSide_bar_img[i].src=aSide_newArr[i];
		}
		//如果去除下述else以及else囊括的代码,那么当oScrollTop<oNumArr[0]时会默认选中第一个
		else					
		{
			aSide_bar_img[i].src=aSide_oldArr[i];	
		}	
	}	
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

