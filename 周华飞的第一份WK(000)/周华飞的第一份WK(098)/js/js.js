//JavaScript Document
/*therapy*/
$(function(){
	var aBtn=$('#therapy ol li');
	var aCut=$('#therapy ul li');
	tabSwitch(aBtn,aCut);	
})
/*recovery*/
$(function(){
	var aBtn=$('#recovery li');
	tabSwitch(aBtn);	
})
/*team*/
$(function(){
	var aBtn=$('#team ol li');
	var aCut=$('#team ul li');
	tabSwitch(aBtn,aCut);	
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