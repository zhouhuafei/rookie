// JavaScript Document
eventBind(window,'load',function()
{
	/*explain*/
	(function()
	{
		var oVedio=getId('e_vedio');
		var aSpan=oVedio.getElementsByTagName('span');
		var aLi=oVedio.getElementsByTagName('li');
		show_hide(aLi,aSpan,'span_active');			
	})()	
})
function show_hide(btn,cut,cutClass)
{
	var now=0;
	for(var i=0; i<btn.length;i++)
	{
		btn[i].index=i;
		btn[i].onclick=function()
		{
			cut[now].className='';
			now=this.index;
			cut[now].className=cutClass;		
		}	
	}
}
function getId(id){return document.getElementById(id);}
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