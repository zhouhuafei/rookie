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
	function getStyle(obj,name)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[name];
		}
		else
		{
			return getComputedStyle(obj,false)[name];
		}
	}
	function startMove(obj,json,fnEnd)
	{
		clearInterval(obj.timer);
		obj.timer=setInterval(function()
		{
			var bStop=true;   //假设所有的值都已经到了
			for(var attr in json)
			{
				var cur=0;
				if(attr=='opacity')
				{
					cur=Math.round(parseFloat(getStyle(obj,attr)*100));
				}
				else
				{
					cur=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-cur)/10;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(cur!=json[attr])bStop=false;					
				if(attr=='opacity')
				{
					obj.style.filter='alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity=(cur+speed)/100;
				}
				else
				{
					obj.style[attr]=cur+speed+'px';
				}			
			}
			if(bStop)
			{
				clearInterval(obj.timer);
				if(fnEnd)fnEnd;
			}
		},30);
	}
	
/*----------------------------------------------view4切换----------------------------------------------------------*/
	var aView4_span=document.getElementById('view4').getElementsByTagName('span');
	var aView4_li=document.getElementById('view4_cut').getElementsByTagName('li');
	var oView4_cut=document.getElementById('view4_cut');
	oView4_cut.style.width='37000px';
	var now=0;
	for(var i=0;i<aView4_span.length;i++)
	{
		aView4_span[i].index=i;
		aView4_span[i].onmouseover=function()
		{
			now=this.index;
			tab();	
		}
	}
	function tab()
	{
		for(var j=0; j<aView4_span.length;j++)
			{
				aView4_span[j].className='';	
			}
			aView4_span[now].className='span_active';
			startMove(oView4_cut,{left:-1423*now});	
	}
		
		
/*------------------------------------------exchange切换-----------------------------------------------*/
	var oExchange_ul=document.getElementById('exchange_ul');
	var oExchange_ol=document.getElementById('exchange_ol');	
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');	
	var aExUl_li=oExchange_ul.getElementsByTagName('li');
	var aExOl_li=oExchange_ol.getElementsByTagName('li');
	oExchange_ul.style.width='37000px';
	oExchange_ol.style.width=(aExOl_li[0].offsetWidth+15)*aExOl_li.length+'px';
	for(var k=0;k<aExOl_li.length;k++)
	{	
		aExOl_li[k].index=k;
		aExOl_li[k].onmouseover=function()
		{			
			for(var n=0;n<aExOl_li.length; n++)
			{
				//aExOl_li[n].style.opacity='0.8';
				aExUl_li[n].style.display='none';
			}
			//this.style.opacity='1';
			aExUl_li[this.index].style.display='block';
		}
	}
	oPrev.style.display='none';
	startNext=oNext.onclick=function()
	{
		startMove(oExchange_ol,{left:oExchange_ol.offsetLeft-(aExOl_li[0].offsetWidth+15)});
		if(-oExchange_ol.offsetLeft<=aExOl_li[0].offsetWidth+15)
		{
			oNext.onclick=null;
			oPrev.onclick=startPrev;
			oNext.style.right='-26px';
			oPrev.style.display='block';
			oPrev.style.left='0px';
		}	
	}
	startPrev=oPrev.onclick=function()
	{
		startMove(oExchange_ol,{left:oExchange_ol.offsetLeft+(aExOl_li[0].offsetWidth+15)});
		if(-oExchange_ol.offsetLeft<=aExOl_li[0].offsetWidth+15)
		{
			oNext.onclick=startNext;
			oPrev.onclick=null;
			oPrev.style.left='-26px';
			oNext.style.right='0px';
		}
	}
	
	
	
}
