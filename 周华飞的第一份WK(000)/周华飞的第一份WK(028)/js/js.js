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
	/*bg*/
	var oImgs=document.getElementById('imgs');
	var aLi=oImgs.getElementsByTagName('li');
	var oImg=oImgs.getElementsByTagName('img')[0];
	var arr1=['images/love1_03.jpg','images/love2_03.jpg','images/love3_03.jpg','images/love4_03.jpg','images/love5_03.jpg']
	for(var i=0; i<aLi.length;i++)
	{
		aLi[i].index=i;
		aLi[i].onmouseover=function()
		{
			for(var i=0; i<aLi.length;i++)
			{
				aLi[i].className="";	
			}
			this.className='li_active';
			oImg.src=arr1[this.index]
		}	
	}
	
	/*box1*/
	var oVedio=document.getElementById('vedio');
	var aSpan=oVedio.getElementsByTagName('span');
	var oBtnv=document.getElementById('vedio_btn');
	var aV_li=oBtnv.getElementsByTagName('li');
	for(var i=0; i<aV_li.length; i++)
	{
		aV_li[i].index=i;
		aV_li[i].onclick=function()
		{
			for(var i=0; i<aV_li.length; i++)
			{
				aSpan[i].style.display='none';	
			}
				aSpan[this.index].style.display='block';
		}	
	}
	
	
	/*box2*/
	var oC=document.getElementById('change');
	var oBox2=document.getElementById('box2');
	var aLis=oBox2.getElementsByTagName('li');
	var arrImg=['images/b1.jpg','images/b2.jpg','images/b3.jpg','images/b4.jpg','images/b5.jpg','images/b6.jpg','images/b7.jpg','images/b8.jpg','images/b9.jpg','images/b10.jpg','images/b11.jpg','images/b12.jpg','images/b13.jpg','images/b14.jpg','images/b15.jpg','images/b16.jpg','images/b17.jpg','images/b18.jpg','images/b19.jpg','images/b20.jpg','images/b21.jpg','images/b22.jpg','images/b23.jpg','images/b24.jpg'];
	for(var i=0; i<aLis.length; i++)
	{
		aLis[i].index=i;
		aLis[i].onmouseover=function()
		{			
			oC.style.display='block';
			oC.src=arrImg[this.index];
			if(this.index<12)
			{
				oC.style.top=this.offsetTop+this.offsetHeight+'px';
			}
			else
			{
				oC.style.top='inherit';
				oC.style.bottom=oBox2.offsetHeight-this.offsetTop+'px';	
			}
		}
		oC.onmouseout=aLis[i].onmouseout=function()
		{		
			oC.style.display='none';
		}
		oC.onmouseover=function()
		{
			oC.style.display='block';	
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