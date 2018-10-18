eventBind(window,'load',function()
{
	var oCase_ul=document.getElementById('case');
	var aCase_li=document.getElementsByTagName('li');
	var aCase_span=document.getElementsByTagName('span');
	for(var i=0;i<aCase_li.length;i++)
	{
		aCase_span[i].style.top=parseInt(-(aCase_span[i].offsetHeight-aCase_li[0].offsetHeight)/2)+'px';	
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