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


window.onscroll=function()
{
	
	<!--box4-->
	var aShare_li=document.getElementById('share_ul').getElementsByTagName('a');
	var aShare_span=document.getElementById('share_word_box').getElementsByTagName('span');
	for(var i=0;i<aShare_li.length;i++)
	{
		aShare_li[i].index=i;
		aShare_li[i].onmouseover=function()
		{
			for(var j=0; j<aShare_li.length;j++)
			{
				aShare_li[j].className='';
				aShare_span[j].style.display='none';	
			}
			this.className='a_active';
			aShare_span[this.index].style.display='block';	
		}
	}

		

	<!--box7-->
	var aBriefing_li=document.getElementById('briefing_ul').getElementsByTagName('li');
	var aBriefing_span=document.getElementById('briefing').getElementsByTagName('span');
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
			}
			this.className='li_active';
			aBriefing_span[this.index].style.display='block';
			aTriangle[this.index].style.display='block';	
		}
	}

}
