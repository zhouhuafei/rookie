// JavaScript Document
window.onload=function()
{
	var oEx=document.getElementById('ex');
	var oBigImg=document.getElementById('expert_box');
	var aBigImg=oBigImg.getElementsByTagName('li');
	var oSmallImg=document.getElementById('ex_head');
	var aSmallImg=oSmallImg.getElementsByTagName('li');
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');
	oBigImg.style.width=aBigImg[0].offsetWidth*aBigImg.length+'px';
	oSmallImg.style.width=aSmallImg[0].offsetWidth*aSmallImg.length+'px';
	var now=0;
	for(var i=0;i<aSmallImg.length;i++)
	{
		aSmallImg[i].index=i;
		aSmallImg[i].onclick=function()
		{
			now=this.index;
			tab();
		}
		aSmallImg[i].onmouseover=function()
		{
			this.className='li_active';
		}
		aSmallImg[i].onmouseout=function()
		{
			if(this.index!=now){this.className='';}
		}	
	}
	function tab()
	{
		for(var i=0;i<aSmallImg.length;i++)
		{
			aSmallImg[i].className='';	
		}
		aSmallImg[now].className='li_active';
		oBigImg.style.left=-aBigImg[0].offsetWidth*now+'px';
		if(now<=5){oSmallImg.style.left=0;}
		else if(now==12){oSmallImg.style.left=-aSmallImg[0].offsetWidth*(now-6)+'px';}
		else{oSmallImg.style.left=-aSmallImg[0].offsetWidth*(now-5)+'px';}
	}
	function next()
	{
		now++;
		if(now==aSmallImg.length){now=0;}
		tab();	
	}
	function prev()
	{
		now--;
		if(now==-1){now=aSmallImg.length-1;}
		tab();	
	}
	oNext.onclick=function()
	{
		next();	
	}
	oPrev.onclick=function()
	{
		prev();	
	}
	timer=setInterval(function(){next();},8000)		//=>	timer=setInterval(next,8000)
	oEx.onmouseover=function()
	{
		clearInterval(timer);
	}
	oEx.onmouseout=function()
	{
		timer=setInterval(function(){next();},8000)	//=>	timer=setInterval(next,8000)	
	}
}
