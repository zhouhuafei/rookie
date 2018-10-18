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
 	var oBtn_box_1=document.getElementById('btn_box_1');
	var oBtn=oBtn_box_1 .getElementsByTagName('input');
	var oWork_ul_1=document.getElementById('work_ul_1');
	var oUl=oWork_ul_1.getElementsByTagName('ul');
	for(var i=0; i<oBtn.length; i++)
	{
		oBtn[i].index=i;
		oBtn[i].onmousemove=function()
		{	
			for(var j=0; j<oBtn.length;j++)
			{
				oBtn[j].className='';
				oUl[j].style.display='none'				
			}
			this.className='input_show';
			oUl[this.index].style.display='block'
		}
	}
	
	
	
	var oBtn_box_2=document.getElementById('btn_box_2');
	var oBtn2=oBtn_box_2 .getElementsByTagName('input');
	var oWork_ul_2=document.getElementById('work_ul_2');
	var oUl2=oWork_ul_2.getElementsByTagName('ul');
	for(var i=0; i<oBtn2.length; i++)
	{
		oBtn2[i].index=i;
		oBtn2[i].onmousemove=function()
		{	
			for(var j=0; j<oBtn2.length;j++)
			{
				oBtn2[j].className='';
				oUl2[j].style.display='none'				
			}
			this.className='input_show';
			oUl2[this.index].style.display='block'
		}
	}
	
	
	var oBtn_box_3=document.getElementById('btn_box_3');
	var oBtn3=oBtn_box_3 .getElementsByTagName('input');
	var oWork_ul_3=document.getElementById('work_ul_3');
	var oUl3=oWork_ul_3.getElementsByTagName('ul');
	for(var i=0; i<oBtn3.length; i++)
	{
		oBtn3[i].index=i;
		oBtn3[i].onmousemove=function()
		{	
			for(var j=0; j<oBtn3.length;j++)
			{
				oBtn3[j].className='';
				oUl3[j].style.display='none'				
			}
			this.className='input_show';
			oUl3[this.index].style.display='block'
		}
	}
	
	
	
	
	var oBtn_box_4=document.getElementById('btn_box_4');
	var oBtn4=oBtn_box_4 .getElementsByTagName('input');
	var oWork_ul_4=document.getElementById('work_ul_4');
	var oUl4=oWork_ul_4.getElementsByTagName('ul');
	for(var i=0; i<oBtn4.length; i++)
	{
		oBtn4[i].index=i;
		oBtn4[i].onmousemove=function()
		{	
			for(var j=0; j<oBtn4.length;j++)
			{
				oBtn4[j].className='';
				oUl4[j].style.display='none'				
			}
			this.className='input_show';
			oUl4[this.index].style.display='block'
		}
	}
	
	
	
	
	
	
	
	
	
	
		
}