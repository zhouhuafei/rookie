// JavaScript Document
eventBind(window,'load',function()
{
	/*technology*/
	function showActive(btn,btnClass,cut,cutClass)
	{
		for(var i=1;i<btn.length;i++)
		{
			btn[i].index=i;
			btn[i].onmouseover=function()
			{
				for(var i=1;i<btn.length;i++)	
				{
					btn[i].className='';
					cut[i-1].className='';	
				}
				this.className=btnClass;
				cut[this.index-1].className=cutClass;	
			}	
		}
	}
	var oTechnology=document.getElementById('technology');
	var oTechnology_firstUl=oTechnology.getElementsByTagName('ul')[0];
	var aTechnology_firstAllLi=oTechnology_firstUl.getElementsByTagName('li');
	var aTechnology_firstAllP=oTechnology_firstUl.getElementsByTagName('p');
	var oTechnology_LastUl=oTechnology.getElementsByTagName('ul')[1];
	var aTechnology_LastAllLi=oTechnology_LastUl.getElementsByTagName('li');
	var aTechnology_LastAllp=oTechnology_LastUl.getElementsByTagName('P');
	showActive(aTechnology_firstAllLi,'li_active',aTechnology_firstAllP,'p_active');
	showActive(aTechnology_LastAllLi,'li_active',aTechnology_LastAllp,'p_active');
	
	/*tab*/
	var oTab=document.getElementById('tab');
	var aTab_dl=oTab.getElementsByTagName('dl');
	for(var i=1;i<aTab_dl.length;i++)
	{
		aTab_dl[i].index=i;		
		aTab_dl[i].onmouseover=function()
		{
			for(var i=1;i<aTab_dl.length;i++)
			{				
				for(var j=1;j<aTab_dl[i].children.length;j++)
				{
					aTab_dl[i].children[j].className='';
				}				
				for(var j=1;j<aTab_dl[i].children.length;j++)
				{
					this.children[j].className='dd_active';	
				}
			}
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
	var oNumArr=[o0.offsetTop,o1.offsetTop,o2.offsetTop,o3.offsetTop,o4.offsetTop];
	if(oScrollTop>=750)
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
			for(var i=0; i<aSide_bar_img.length;i++)
			{
				aSide_bar_img[i].src=aSide_oldArr[i];
			}
			this.src=aSide_newArr[this.index];
			window.scrollTo(0,oNumArr[this.index]);			
		}
		if(oScrollTop>=oNumArr[i])
		{
			for(var j=0; j<aSide_bar_img.length;j++)
			{
				aSide_bar_img[j].src=aSide_oldArr[j];	
			}
			aSide_bar_img[i].src=aSide_newArr[i];
		}
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