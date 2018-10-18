// JavaScript Document
eventBind(window,'load',function()
{
	/*header_top*/
	var oSearch_word=document.getElementById('search_word');
	var oSearch=document.getElementById('search');
	oSearch.onfocus=function()
	{
		if(oSearch.value=='')
		oSearch_word.innerHTML='';	
	}
	oSearch.onblur=function()
	{
		if(oSearch.value=='')
		oSearch_word.innerHTML='请输入搜索内容';	
	}
	
	/*list_left_date*/
	var oDate=document.getElementById('date');
	oDate.innerHTML=nowTime();
	setInterval(function()
	{
		oDate.innerHTML=nowTime();
	},1000);
	
	
	/*footer_nav*/
	var oFooter_nav=document.getElementById('footer_nav');
	var aFooter_a=oFooter_nav.getElementsByTagName('a');
	show_hide(aFooter_a,'a_active');
})
function nowTime()
{
	var myDate=new Date();
	var nowYear=fillZero(myDate.getFullYear());
	var nowMont=fillZero((myDate.getMonth()+1));
	var nowDate=fillZero(myDate.getDate());
	var nowHour=fillZero(myDate.getHours());
	var nowMinu=fillZero(myDate.getMinutes());
	var nowSeco=fillZero(myDate.getSeconds());
	return nowYear+'-'+nowMont+'-'+nowDate+' '+nowHour+':'+nowMinu+':'+nowSeco;
}
function fillZero(n)
{
	if(n<10)
	{
		return '0'+n;	
	}
	else
	{
		return ''+n;	
	}
}
function show_hide(obj_btn,btn_class,obj_cut,cut_class)
{
	for(var i=0;i<obj_btn.length;i++)
	{
		obj_btn[i].index=i;
		obj_btn[i].onmouseover=function()
		{
			for(var i=0;i<obj_btn.length;i++)
			{
				if(!obj_cut)
				{
				}
				else
				{
					
					obj_cut[i].className='';
				}
				obj_btn[i].className='';
			}	
			this.className=btn_class;
			if(!obj_cut)
			{
			}
			else
			{
				obj_cut[this.index].className=cut_class;
			}
		}	
	}
}
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