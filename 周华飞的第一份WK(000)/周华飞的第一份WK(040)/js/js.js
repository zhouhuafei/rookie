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
eventBind(window,'load',function()
{
	/*the_hospital*/
	var oThe_hospital=document.getElementById('the_hospital');
	var oThe_ol=oThe_hospital.getElementsByTagName('ol')[0];
	var aThe_ol_li=oThe_ol.getElementsByTagName('li');
	var aThe_ol_div=oThe_ol.getElementsByTagName('div');
	var aThe_ol_em=oThe_ol.getElementsByTagName('em');
	var oThe_ul=oThe_hospital.getElementsByTagName('ul')[0];
	var aThe_ul_li=oThe_ul.getElementsByTagName('li');
	for(var i=0; i<aThe_ol_li.length;i++)
	{
		aThe_ol_li[i].index=i;
		aThe_ol_li[i].onmouseover=function()
		{
			for(var i=0; i<aThe_ol_li.length;i++)
			{
				aThe_ol_li[i].className='';
				aThe_ol_div[i].className='';
				aThe_ul_li[i].className=''	
				aThe_ol_em[i].className='the_hospital_icon'+(i+1)+''
			}
			this.className='li_active';
			aThe_ol_div[this.index].className='div_active';
			aThe_ol_em[this.index].className='the_hospital_icon'+(this.index+1+'1')+'';
			aThe_ul_li[this.index].className='li_active'
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