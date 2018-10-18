﻿// JavaScript Document
/*创建HTML5元素*/
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('aside');
document.createElement('video');
document.createElement('audio');
eventBind(window,'load',function()
{
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
function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}
function startMove(obj, json, fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function ()
	{
		var bStop=true;  //这一次运动就结束了——所有的值都到达了
		for(var attr in json)
		{
			//1.取当前的值
			var iCur=0;   
			if(attr=='opacity')
			{
			 iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
			 iCur=parseInt(getStyle(obj, attr));
			}
			//2.算速度
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			//3.检测停止
			if(iCur!=json[attr])
			{
				bStop=false;
			}
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		if(bStop)
		{
			clearInterval(obj.timer);	
			if(fn)
			{
				fn();
			}
		}
	},30)
}