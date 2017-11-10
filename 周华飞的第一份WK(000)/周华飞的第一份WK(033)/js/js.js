// JavaScript Document
eventBind(window,'load',function()
{
	/*project*/
	var oProject=document.getElementById('project');
	var aProject_img=oProject.getElementsByTagName('img');
	var OldImgArr=['images/project1.jpg','images/project2.jpg','images/project3.jpg','images/project4.jpg','images/project5.jpg','images/project6.jpg','images/project7.jpg','images/project8.jpg',];
	var NewImgArr=['images/project1_1.jpg','images/project2_2.jpg','images/project3_3.jpg','images/project4_4.jpg','images/project5_5.jpg','images/project6_6.jpg','images/project7_7.jpg','images/project8_8.jpg'];
	for(var i=0; i<aProject_img.length; i++)
	{
		aProject_img[i].index=i;
		aProject_img[i].onmouseover=function()
		{
			for(var i=0; i<aProject_img.length; i++)
			{
				aProject_img[i].src=OldImgArr[i];
			}
			this.src=NewImgArr[this.index];	
		}	
	}
	
	/*case*/
	var oCase=document.getElementById('case');
	var oCase_ol=oCase.getElementsByTagName('ol')[0];
	var aCase_ul=oCase.getElementsByTagName('ul');
	var aCase_ol_li=oCase_ol.getElementsByTagName('li');
	var oLine_three=document.getElementById('line_three');
	for(var i=0; i<aCase_ol_li.length; i++)
	{
		aCase_ol_li[i].index=i;
		aCase_ol_li[i].onmouseover=function()
		{
			for(var i=0; i<aCase_ol_li.length; i++)
			{
				aCase_ol_li[i].className='';
				aCase_ul[i].className='';	
			}
			this.className='li_active';
			aCase_ul[this.index].className='ul_active';
			oLine_three.style.left=aCase_ol_li[0].offsetWidth*this.index+'px';	
		}	
	}
	
	/*environment*/	
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
	function nextt()
	{
		now++;
		if(now==aEn_btn.length){now=0;}	
		tab();	
	}
	timerr=setInterval(function(){nextt();},3000);
	oEn_cut.onmouseover=function(){clearInterval(timerr);}
	oEn_cut.onmouseout=function(){timerr=setInterval(function(){nextt();},3000)}
})
eventBind(window,'scroll',function()
{
	/*side_bar*/
	var oSide_bar=document.getElementById('side_bar');
	var aSide_bar_img=oSide_bar.getElementsByTagName('img');
	var aSide_oldArr=['images/side_bar1.png','images/side_bar2.png','images/side_bar3.png','images/side_bar4.png','images/side_bar5.png','images/side_bar6.png','images/side_bar7.png'];
	var aSide_newArr=['images/side_bar1_1.png','images/side_bar2_2.png','images/side_bar3_3.png','images/side_bar4_4.png','images/side_bar5_5.png','images/side_bar6_6.png','images/side_bar7_7.png'];
	var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;var o0=document.getElementById('0');
	var o0=document.getElementById('0');
	var o1=document.getElementById('1');
	var o2=document.getElementById('2');
	var o3=document.getElementById('3');
	var o4=document.getElementById('4');
	var o5=document.getElementById('5');
	var o6=document.getElementById('6');
	var oNumArr=[o0.offsetTop,o1.offsetTop,o2.offsetTop,o3.offsetTop,o4.offsetTop,o5.offsetTop,o6.offsetTop];
	if(oScrollTop>=900)
	{
		oSide_bar.style.cssText='position:fixed;right:20px;top:0px;';			
	}
	else
	{
		oSide_bar.style.cssText='';	
	}
	for(var i=0; i<aSide_bar_img.length;i++)
	{
		aSide_bar_img[i].index=i;
		aSide_bar_img[i].onclick=function()
		{
			/*
			for(var i=0; i<aSide_bar_img.length;i++)	//这一段for循环纯属画蛇点足,多余了,因为下面的if语句里面已经包括了图片切换效果
			{
				aSide_bar_img[i].src=aSide_oldArr[i];
			}
			this.src=aSide_newArr[this.index];		//这一段for循环纯属画蛇点足,多余了,因为下面的if语句里面已经包括了图片切换效果
			*/
			window.scrollTo(0,oNumArr[this.index]);			
		}
		if(oScrollTop>=oNumArr[i])
		{
			aSide_bar_img[i].src=aSide_newArr[i];
		}
		//如果去除下述else以及else囊括的代码,那么当oScrollTop<oNumArr[0]时会默认选中第一个
		else
		{
			aSide_bar_img[i].src=aSide_oldArr[i];	
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