// JavaScript Document
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('aside');

window.onload=function()
{
	var oPoint_box=document.getElementById('point_box');
	var oSlide_1=document.getElementById('slide_1');
	var oSlide_2=document.getElementById('slide_2');
	var oSlide_3=document.getElementById('slide_3');
	oSlide_1.onmousemove=function(){oSlide_1.className='show'}
	oSlide_1.onmouseout=function(){oSlide_1.className=''}
	oSlide_2.onmousemove=function(){oSlide_2.className='show'}
	oSlide_2.onmouseout=function(){oSlide_2.className=''}
	oSlide_3.onmousemove=function(){oSlide_3.className='show'}
	oSlide_3.onmouseout=function(){oSlide_3.className=''}
	
	
	
	
	var oNav_x1=document.getElementById('nav_x1');
	var oNav_x2=document.getElementById('nav_x2');
	var oNav_x3=document.getElementById('nav_x3');
	var oNav_x4=document.getElementById('nav_x4');
	var oNav_x5=document.getElementById('nav_x5');
	var oNav_y1=document.getElementById('nav_y1');
	var oNav_y2=document.getElementById('nav_y2');
	var oNav_y3=document.getElementById('nav_y3');
	var oNav_y4=document.getElementById('nav_y4');
	var oNav_y5=document.getElementById('nav_y5');
	oNav_x1.onmouseover=function()
	{
		oNav_y1.className="show1 nav_block clearfix "
		oNav_y2.className="nav_block clearfix "
		oNav_y3.className="nav_block clearfix "
		oNav_y4.className="nav_block clearfix "
		oNav_y5.className="nav_block clearfix "	
	}
	oNav_x2.onmouseover=function()
	{	
		oNav_y1.className="nav_block clearfix "
		oNav_y2.className="show1 nav_block clearfix "
		oNav_y3.className="nav_block clearfix "
		oNav_y4.className="nav_block clearfix "
		oNav_y5.className="nav_block clearfix "	
	}
	oNav_x3.onmouseover=function()
	{	
		oNav_y1.className=" nav_block clearfix "
		oNav_y2.className="nav_block clearfix "
		oNav_y3.className="nav_block clearfix "
		oNav_y4.className="show1 nav_block clearfix "
		oNav_y5.className="nav_block clearfix "	
	}
	oNav_x4.onmouseover=function()
	{	
		oNav_y1.className="nav_block clearfix "
		oNav_y2.className="nav_block clearfix "
		oNav_y3.className="nav_block clearfix "
		oNav_y4.className="show1 nav_block clearfix "
		oNav_y5.className="nav_block clearfix "	
	}
	oNav_x5.onmouseover=function()
	{	
		oNav_y1.className="nav_block clearfix "
		oNav_y2.className="nav_block clearfix "
		oNav_y3.className="nav_block clearfix "
		oNav_y4.className="nav_block clearfix "
		oNav_y5.className="show1 nav_block clearfix "	
	}	
}
