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
	
	<!--导航栏切换-->
	var oNav=document.getElementById('nav');
	var aLi=oNav.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover=function()
		{
			for(var j=0; j<aLi.length;j++)
			{
				aLi[j].className='';	
			}
			this.className='a_active';	
		}
	}

		
		
/*--------------------------------------------------------------------------------------------------------*/		



}
