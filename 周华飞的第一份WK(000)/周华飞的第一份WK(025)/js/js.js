// JavaScript Document
$(function()
{
	/*box1*/
	var vedioArr=['1','2','3'];
	var oVedioBox=document.getElementById('vedioBox');
	var aVedioArr=document.getElementById('vedioArr').getElementsByTagName('li');
	for(var i=0;i<aVedioArr.length;i++)
	{
		aVedioArr[i].index=i;
		aVedioArr[i].onmouseover=function()
		{
			oVedioBox.innerHTML=vedioArr[this.index];		
		}	
	}
	
	/*box2*/
	var aBox2_a=document.getElementById('box2_show').getElementsByTagName('a');
	var aBox2_li=document.getElementById('box2_show').getElementsByTagName('li');
	for(var j=0;j<aBox2_a.length;j++)
	{
		aBox2_a[j].index=j;
		aBox2_li[j].onmouseover=function()
		{
				this.style.display='block';
		}
		aBox2_li[j].onmouseout=function()
		{
				this.style.display='none';
		}
		aBox2_a[j].onmouseout=function()
		{
				aBox2_li[this.index].style.display='none';	
		}
		aBox2_a[j].onmouseover=function()
		{
			for(var j=0;j<aBox2_a.length;j++)
			{
				aBox2_li[j].style.display='none';		
			}
			aBox2_li[this.index].style.display='block';
			aBox2_li[this.index].show('slow')
		}	
	}


	/*box5*/
	var aBox5_li=document.getElementById('box5_cut').getElementsByTagName('li');
	var aBox5_span=document.getElementById('box5_cut').getElementsByTagName('span');
	for(var k=0; k<aBox5_li.length;k++)
	{
		aBox5_li[k].index=k;
		aBox5_li[k].onmouseover=function()
		{
			for(var k=0; k<aBox5_li.length;k++)
			{
				aBox5_li[k].className='fl';
				aBox5_span[k].className='';	
			}	
			this.className='li_active5';
			aBox5_span[this.index].className='fl span_active5';
		}	
	}
	

	/*box6*/	
	myTab('box6_content','li_active6');	

	/*box7*/
	myTab('expert','li_active7');
	
	/*talk*/
	var talkArr=['images/talk1.jpg','images/talk2.jpg'];
	var oTalkImg=document.getElementById('talk').getElementsByTagName('img')[0];
	var oNext=document.getElementById('next');
	var oPrev=document.getElementById('prev');
	var num=0;
	oNext.onclick=function()
	{
		num++;
		num%=2;
		oTalkImg.src=talkArr[num];
	}
	oPrev.onclick=function()
	{
		num--;
		var nums=Math.abs(num);
		nums%=2;
		oTalkImg.src=talkArr[nums];
	}
	
	
/*-------------------------------------------周华飞第一次尝试封装函数----------------------------------------------*/	
	function myTab(id,attr)
	{
		var aCut=document.getElementById(id).getElementsByTagName('ul')[0].getElementsByTagName('li');
		var aBtn=document.getElementById(id).getElementsByTagName('ol')[0].getElementsByTagName('li');
		for(var i=0; i<aBtn.length;i++)
		{
			aBtn[i].index=i;
			aBtn[i].onmouseover=function()
			{
				for(var i=0; i<aBtn.length;i++)
				{
					aBtn[i].className='';
					aCut[i].style.display='none';	
				}
				this.className=attr;
				aCut[this.index].style.display='block';
			}	
		}	
	}

})

