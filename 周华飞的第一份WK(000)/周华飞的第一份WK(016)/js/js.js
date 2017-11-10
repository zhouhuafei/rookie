// JavaScript Document

/*创建HTML5元素*/
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('aside');
document.createElement('video');
document.createElement('audio');


window.onload=function()
{
	
	<!--box5-->
	var oContrast=document.getElementById('contrast');
	var aTriangle1=oContrast.getElementsByTagName('div');	
	var oContrast_aA=oContrast.getElementsByTagName('a');
	var oContrast_aSpan=oContrast.getElementsByTagName('span');
	for(var i=0;i<oContrast_aA.length;i++)
	{
		oContrast_aA[i].index=i;
		oContrast_aA[i].onmouseover=function()
		{
			for(var j=0; j<oContrast_aA.length;j++)
			{
				oContrast_aA[j].className='';
				oContrast_aSpan[j].className='';
				aTriangle1[j].className='triangle';	
			}
			this.className='a_active';
			aTriangle1[this.index].className='triangle triangle_active';
			oContrast_aSpan[this.index].className='span_active';	
		}
	}



	<!--box7-->	
	var oShowInfo=document.getElementById('showInfo');
	var oShowBox_a=document.getElementById('showBox').getElementsByTagName('a');
	
	
	
		
	var aCase_li=document.getElementById('case_cut_box').getElementsByTagName('li');
	var aCase_img=document.getElementById('case_img').getElementsByTagName('img');
	for(var i=0;i<aCase_li.length;i++)
	{
		aCase_li[i].index=i;
		aCase_li[i].onmouseover=function()
		{
			for(var j=0; j<aCase_li.length;j++)
			{
				aCase_li[j].className='';
				aCase_img[j].className='';	
			}
			this.className='li_active';
			aCase_img[this.index].className='img_active';
		}
	}	
	
	
	
			
	var aCase3_li=document.getElementById('case_cut_box3').getElementsByTagName('li');
	var aCase3_img=document.getElementById('case_img3').getElementsByTagName('img');
	for(var i=0;i<aCase3_li.length;i++)
	{
		aCase3_li[i].index=i;
		aCase3_li[i].onmouseover=function()
		{
			for(var j=0; j<aCase3_li.length;j++)
			{
				aCase3_li[j].className='';
				aCase3_img[j].className='';	
			}
			this.className='li_active';
			aCase3_img[this.index].className='img_active';
		}
	}
	
	
	
	var aCase2_li=document.getElementById('case_cut_box2').getElementsByTagName('li');
	var aCase2_img=document.getElementById('case_img2').getElementsByTagName('img');
	for(var i=0;i<aCase2_li.length;i++)
	{
		aCase2_li[i].index=i;
		aCase2_li[i].onmouseover=function()
		{
			for(var j=0; j<aCase2_li.length;j++)
			{
				aCase2_li[j].className='';
				aCase2_img[j].className='';	
			}
			this.className='li_active';
			aCase2_img[this.index].className='img_active';
		}
	}
	
	<!--box8-->
	var aWarn_li=document.getElementById('warn').getElementsByTagName('li');
	var aWarn_i=document.getElementById('warn').getElementsByTagName('i');
	for(var i=0;i<aWarn_li.length;i++)
	{
		aWarn_li[i].index=i;
		aWarn_li[i].onmouseover=function()
		{
			for(var j=0; j<aWarn_li.length;j++)
			{
				aWarn_li[j].className='';
				aWarn_i[j].className='warn';	
			}
			this.className='li_active';
			aWarn_i[this.index].className='warn warn_active';
		}
	}
	
	<!--box9-->
	var aBriefing_li=document.getElementById('briefing_ul').getElementsByTagName('li');
	var aBriefing_a=document.getElementById('briefing_ul').getElementsByTagName('a');
	var aBriefing_span=document.getElementById('briefing').getElementsByTagName('span');
	var aTriangle2=document.getElementById('briefing_ul').getElementsByTagName('div');
	for(var i=0;i<aBriefing_li.length;i++)
	{
		aBriefing_li[i].index=i;
		aBriefing_li[i].onmouseover=function()
		{
			for(var j=0; j<aBriefing_li.length;j++)
			{
				aBriefing_li[j].className='';
				aBriefing_span[j].style.display='none';
				aTriangle2[j].style.display='none';
				aBriefing_a[j].style.color='#000';
			}
			this.className='li_active';
			aBriefing_span[this.index].style.display='block';
			aTriangle2[this.index].style.display='block';
			aBriefing_a[this.index].style.color='#fff';	
		}
	}
	
	
}
