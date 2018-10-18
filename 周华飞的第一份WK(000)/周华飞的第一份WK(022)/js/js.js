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


window.onscroll=function()
{
	
	/*box1*/
	var oPrevs=document.getElementById('prevs');
	var oNexts=document.getElementById('nexts');
	var oBox_img=document.getElementById('box_img');
	var num=0;
	var arrImg=['images/iconn1.jpg','images/iconn2.jpg','images/iconn3.jpg','images/iconn4.jpg','images/iconn5.jpg','images/iconn6.jpg'];
	oBox_img.src=arrImg[num];
	oPrevs.onclick=function()
	{
		num--;
		if(num==-1){num=5;}
		oBox_img.src=arrImg[num];	
	}
	oNexts.onclick=function()
	{
		num++;
		if(num==6){num=0;}
		oBox_img.src=arrImg[num];	
	}
	
	/*box5*/
	var aAn_li=document.getElementById('anli').getElementsByTagName('li');
	var aAn_box=document.getElementById('anli_con').getElementsByTagName('div');
	for(var i=0;i<aAn_li.length;i++)
	{
		aAn_li[i].index=i;
		aAn_li[i].onmouseover=function()
		{
			for(var j=0; j<aAn_li.length;j++)
			{
				aAn_li[j].className='';
				aAn_box[j].className='';	
			}
			this.className='li_active';	
			aAn_box[this.index].className='div_active';
		}
	}

	/*box6*/
	var aCutLi=document.getElementById('cut4').getElementsByTagName('li');
	var aCutSpan=document.getElementById('cutBox4').getElementsByTagName('span');
	for(var i=0;i<aCutLi.length;i++)
	{
		aCutLi[i].index=i;
		aCutLi[i].onmouseover=function()
		{
			for(var j=0; j<aCutLi.length;j++)
			{
				aCutLi[j].className='';
				aCutSpan[j].style.display='none';	
			}
			this.className='li_active2';	
			aCutSpan[this.index].style.display='block';
		}
	}	
		
		
		
	/*box8*/
	var oPrevv=document.getElementById('prevv');
	var oNextt=document.getElementById('nextt');
	var aEn_btn=document.getElementById('en_btn').getElementsByTagName('li');
	var oEn_cut=document.getElementById('en_cut');
	var aEn_cut=oEn_cut.getElementsByTagName('li');
	oEn_cut.style.width=aEn_cut.length*(aEn_cut[0].offsetWidth+10)+'px';
	var now=null;
	for(var i=0; i<aEn_btn.length; i++)
	{	
		aEn_btn[i].index=i;
		aEn_btn[i].onmouseover=function()
		{
			now=this.index;	
			tab();
		}	
	}	
	function tab()
	{
	
		for(var i=0; i<aEn_btn.length; i++)
		{
			aEn_btn[i].className='';	
		}
		aEn_btn[now].className='li_active3';
		oEn_cut.style.left=-(aEn_cut[0].offsetWidth)*now+'px';		
	}
	oPrevv.onclick=function()
	{
		now--;
		if(now==-1){now=aEn_btn.length-1;}
		tab();	
	}
	
	oNextt.onclick=function()
	{
		now++;
		if(now==aEn_btn.length){now=0;}	
		tab();
	}	
		
		
		
		
				



}
