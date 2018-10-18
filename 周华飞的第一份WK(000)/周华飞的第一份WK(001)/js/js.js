// JavaScript Document
window.onload=function()
{	

	/*悬浮顶部的nav*/
	/*var oNav=document.getElementById('nav');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	if(document.documentElement.clientY==760){oNav.className='nav nav_show';}*/
	
	/*适应疾病*/
	var oNavUl=document.getElementById('navBoxUl');
	var aNavLi=oNavUl.getElementsByTagName('a');
	var oSailBox=document.getElementById('sailBox');
	var aSailSpan=oSailBox.getElementsByTagName('span');
	for(var i=0;i<aNavLi.length;i++)
	{
		aNavLi[i].index=i;
		aNavLi[i].onmouseover=function()
		{
			for(var j=0;j<aNavLi.length;j++)
			{
					aNavLi[j].className='';
					aSailSpan[j].className='sail';
			}	
			this.className='active';
			aSailSpan[this.index].className='sail sail_show';
		}
	}	
	
	/*自体细胞净化治疗优势大*/
	var oA1=document.getElementById('a1')
	var oA2=document.getElementById('a2')
	var oA3=document.getElementById('a3')
	var oA4=document.getElementById('a4')
	var oRun_a=document.getElementById('run_a');
	var aRun_a=oRun_a.getElementsByTagName('a');
	var oRun_span=document.getElementById('run_span');
	var oRun_up_word=document.getElementById('run_up_word');
	var aRun_up_word_p=oRun_up_word.getElementsByTagName('p');
	oA1.onmouseover=function()
	{
			oRun_span.style.left='75px';
			for(var j=0; j<aRun_a.length;j++)
			{
				
				aRun_a[j].index=j;
				aRun_up_word_p[j].className='';	
			}
			aRun_up_word_p[this.index].className='p_show';			
	}
	oA2.onmouseover=function()
	{
			oRun_span.style.left='335px';
			for(var j=0; j<aRun_a.length;j++)
			{
				
				aRun_a[j].index=j;
				aRun_up_word_p[j].className='';	
			}
			aRun_up_word_p[this.index].className='p_show';			
	}
	oA3.onmouseover=function()
	{
			oRun_span.style.left='585px';
			for(var j=0; j<aRun_a.length;j++)
			{
				
				aRun_a[j].index=j;
				aRun_up_word_p[j].className='';	
			}
			aRun_up_word_p[this.index].className='p_show';			
	}
	oA4.onmouseover=function()
	{
			oRun_span.style.left='835px';
			for(var j=0; j<aRun_a.length;j++)
			{
				
				aRun_a[j].index=j;
				aRun_up_word_p[j].className='';	
			}
			aRun_up_word_p[this.index].className='p_show';			
	}





}
