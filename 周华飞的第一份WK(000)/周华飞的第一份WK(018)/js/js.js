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
	
	<!--run_cut-->
	var aStyle_em=document.getElementById('style').getElementsByTagName('em');
	var aStyle_span=document.getElementById('style').getElementsByTagName('span');
	for(var i=0;i<aStyle_em.length;i++)
	{
		aStyle_em[i].index=i;
		aStyle_em[i].onmouseover=function()
		{
			for(var j=0; j<aStyle_em.length;j++)
			{
				aStyle_em[j].className='';
				aStyle_span[j].style.display='none';	
			}
			this.className='run_active';
			aStyle_span[this.index].style.display='block';	
		}
	}


	<!--expert_cut-->
	var aExpert_A=document.getElementById('expert_til').getElementsByTagName('a');
	var aExpert_span=document.getElementById('expert_box').getElementsByTagName('span');
	for(var i=0;i<aExpert_A.length;i++)
	{
		aExpert_A[i].index=i;
		aExpert_A[i].onmouseover=function()
		{
			for(var j=0; j<aExpert_A.length;j++)
			{
				aExpert_A[j].className='';
				aExpert_span[j].style.display='none';	
			}
			this.className='a_active';
			aExpert_span[this.index].style.display='block';	
		}
	}	
		
		
		
		
		





}
