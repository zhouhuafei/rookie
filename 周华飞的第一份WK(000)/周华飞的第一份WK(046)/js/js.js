// JavaScript Document
/*创建HTML5元素*/
eventBind(window,'load',function()
{	
	/*new_case*/
	(function()
	{
		var oCase_Img=document.getElementById('case_photo').getElementsByTagName('img')[0];
		var aCase_btn=document.getElementById('case_btn').getElementsByTagName('li');
		var aImg=['images/case1_03.jpg','images/case2_03.jpg','images/case3_03.jpg','images/case4_03.jpg',];
		for(var i=0; i<aCase_btn.length;i++)
		{
			aCase_btn[i].index=i;
			aCase_btn[i].onmouseover=function()
			{
				for(var i=0; i<aCase_btn.length;i++)
				{
					aCase_btn[i].className='';
				}
				this.className='li_active';
				oCase_Img.src=aImg[this.index];			
			}	
		}
	})();

	/*expert*/	
	(function()
	{
		var oPrev=document.getElementById('prev');
		var oNext=document.getElementById('next');
		var oExpert_ul=document.getElementById('expert_main').getElementsByTagName('ul')[0];
		var aExpert_li=document.getElementById('expert_main').getElementsByTagName('li');
		oExpert_ul.style.width=aExpert_li[0].offsetWidth*aExpert_li.length+'px';
		var now=0;
		oNext.onclick=function()
		{
			now++;
			now%=aExpert_li.length;
			oExpert_ul.style.left=-aExpert_li[0].offsetWidth*now+'px';
		}
		oPrev.onclick=function()
		{
			now--;
			if(now==-1){now=aExpert_li.length-1;}
			oExpert_ul.style.left=-aExpert_li[0].offsetWidth*now+'px';
		}
	})();			
})
eventBind(window,'scroll',function()
{
	/*side_bar*/
	(function()
	{
		var oPosition=$('.position');
		var oSide_bar=$('#side_bar')[0];
		var aSide_dd=$('#side_bar dd');
		var aSide_em=$('#side_bar em');
		var aSide_div=$('#side_bar div');
		var oSide_dt=$('#side_bar dt')[0];		
		var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		oSide_dt.onclick=function(){ scrollTo(0,0);}
		if(oScrollTop>=800){oSide_bar.style.cssText='position:fixed;top:0px;';}
		else{oSide_bar.style.cssText='position:absolute;';}
		for(var i=0; i<aSide_dd.length;i++)
		{
			aSide_dd[i].index=i;
			aSide_dd[i].onclick=function(){scrollTo(0,oPosition[this.index].offsetTop);}
			if(oScrollTop>=oPosition[i].offsetTop)
			{
				for(var j=0; j<aSide_dd.length;j++)
				{
					aSide_dd[j].className='';
					aSide_em[j].className='';
					aSide_div[j].className='triangle';	
				}
				aSide_dd[i].className='dd_active';
				aSide_em[i].className='em_active';
				aSide_div[i].className='triangle triangle_active';		
			}
		}				
	})();		
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