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
	/*ad*/
	var oAd=document.getElementById('ad');
	var oClose_ad=document.getElementById('close_ad');
	oClose_ad.onclick=function()
	{
			oAd.style.display='none';
	}
	
	/*scroll*/
	var oScroll_box=document.getElementById('scroll_box');
	var oScroll=document.getElementById('scroll');
	var oUp=document.getElementById('up');
	var oDown=document.getElementById('down');
	document.onkeydown=function(ev)
	{	
		var oEvent=ev||event;
		if(oEvent.keyCode==38){oScroll.style.top=oScroll.offsetTop-10+'px';if(oScroll.offsetTop<0){oScroll.style.top=0+'px';}}
		if(oEvent.keyCode==40){oScroll.style.top=oScroll.offsetTop+10+'px';if(oScroll.offsetTop>oScroll_box.offsetHeight-oScroll.offsetHeight){oScroll.style.top=oScroll_box.offsetHeight-oScroll.offsetHeight+'px';}}
	}
	oUp.onclick=function(){oScroll.style.top=oScroll.offsetTop-10+'px';if(oScroll.offsetTop<0){oScroll.style.top=0+'px';}}
	oDown.onclick=function(){oScroll.style.top=oScroll.offsetTop+10+'px';if(oScroll.offsetTop>oScroll_box.offsetHeight-oScroll.offsetHeight){oScroll.style.top=oScroll_box.offsetHeight-oScroll.offsetHeight+'px';}}
	oScroll.onmousedown=function(ev)
	{
		var oEvent=ev||event
		disY=oEvent.clientY-oScroll.offsetTop;
		oScroll.onmousemove=function(ev)
		{
			var oEvent=ev||event;
			t=oEvent.clientY-disY;
			if(t<0){t=0;}
			else if(t>oScroll_box.offsetHeight-oScroll.offsetHeight){t=oScroll_box.offsetHeight-oScroll.offsetHeight;}
			oScroll.style.top=t+'px';
			var oScale=t/(oScroll_box.offsetHeight-oScroll.offsetHeight);
			document.title=oScale;
		}
		oScroll.onmouseup=function(ev)
		{
			var oEvent=ev||event;
			oScroll.onmousemove=null;
			oScroll.onmouseup=null;
			oScroll.releaseCapture();
		}
		oScroll.setCapture();
		return false;
	}
	
	/*btn*/
	var oBtn=document.getElementById('btn');
	var oCode=document.getElementById('code');
	var oTranslate=document.getElementById('translate');
	oBtn.onclick=function(){oTranslate.innerHTML=oCode.value;}
}