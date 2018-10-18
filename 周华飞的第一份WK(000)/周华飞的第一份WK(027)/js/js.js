// JavaScript Document
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
eventBind(window,'load',function()
{
	/*history*/
	var pArr=
	[
		'德国医学专家们发现一奇特现象，将此种过敏原物质放入BICOM设备的信息输入杯中，并将过敏原共振信息逆转输入到人体，则过敏症状明显减轻，但当时不能彻底将过敏治愈。',
		'德国医生Schumacher在实践中发现：遵循一定的生物共振治疗规则，过敏不仅可以被控制而且可以被根治。Schumacher医生仅采用一种过敏原振动信息，让患者在6-8次的治疗过程中避免与过敏原接触，在结束治疗后再与过敏原接触，此后病人无任何过敏反应。',
		'德国医生应用BICOM治疗程序No.999治疗多种过敏症，效果明显，并取得80%~90%的治愈率，但严格避免与过敏原接触使医生及病人在治疗的真实有效性上感到很不利，随后的时间里，科学家们发现患者不仅要隔离过敏原物质，而且还要隔离与这些物质有相同的非物质的共振信息。',
		'Hennecae医生发现了一种无需彻底与过敏原隔离的过敏治疗方法，它通过人体经脉上的穴位点进行共振信息的输入输出，可成功的治愈过敏，所需时间约10~30分钟/次。',
		'Klein医生发现运用BICOM生物共振治疗系统，将过敏原的镜像信息进行高倍放大并回输治疗，可取得立即且持久的疗效。',
	]
	var oHistory=document.getElementById('history');
	var oThree=document.getElementById('three');
	var oH_p=oHistory.getElementsByTagName('p')[0];	
	var aH_li=oHistory.getElementsByTagName('li');
	for(var i=0; i<aH_li.length; i++)
	{
		aH_li[i].index=i;
		aH_li[i].onmouseover=function()
		{
			for(var i=0; i<aH_li.length; i++)
			{
				aH_li[i].className='';
			}
			this.className='li_active';
			oThree.style.left=140+this.index*180+'px'	
			oH_p.innerHTML=pArr[this.index];		
		}	
	}
	
	/*priniple*/
	var oPriniple=document.getElementById('priniple');
	var oOl=oPriniple.getElementsByTagName('ol')[0];
	var aOl_li=oOl.getElementsByTagName('li');
	var oUl=oPriniple.getElementsByTagName('ul')[0];
	var aUl_li=oUl.getElementsByTagName('li');
	var now=0;
	for(var j=1; j<aUl_li.length; j++)
	{
		aUl_li[j].style.left=aUl_li[0].offsetWidth+'px';
	}
	for(var i=0; i<aOl_li.length; i++)
	{
		aOl_li[i].index=i;
		aOl_li[i].onmouseover=function()
		{
			for(var i=0; i<aOl_li.length; i++)
			{
				aOl_li[i].className='';
			}
			this.className='li_active';
			if(now<this.index)
			{
				aUl_li[this.index].style.left=aUl_li[0].offsetWidth+'px';
				startMove(aUl_li[now],{left:-aUl_li[0].offsetWidth});
			}
			else if(now>this.index)
			{
				aUl_li[this.index].style.left=-aUl_li[0].offsetWidth+'px';
				startMove(aUl_li[now],{left:aUl_li[0].offsetWidth});	
			}
			startMove(aUl_li[this.index],{left:0});
			now=this.index;
		}		
	}
	
	/*cure*/
	var oCure=document.getElementById('cure');
	var oOl2=oCure.getElementsByTagName('ol')[0];
	var aOl_li2=oOl2.getElementsByTagName('li');
	var oUl2=oCure.getElementsByTagName('ul')[0];
	var aUl_li2=oUl2.getElementsByTagName('li');
	var aUl_div2=oUl2.getElementsByTagName('div');
	for(var i=0; i<aOl_li2.length; i++)
	{
		aOl_li2[i].index=i;
		aOl_li2[i].onmouseover=function()
		{
			for(var i=0; i<aOl_li2.length; i++)
			{
				aOl_li2[i].className='';
				aOl_li2[i].style.transform='rotate(0deg)';
				aUl_li2[i].className='';
				aUl_div2[i].className='triangle';
			}
			this.className='li_active';
			this.style.transform='rotate(360deg)';
			aUl_li2[this.index].className='li_active';
			aUl_div2[this.index].className='triangle triangle_active';
		}
	}
})	
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
}
function startMove(obj,json,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{
		var bStop=true;   
		for(var attr in json)
		{
			var cur=0;
			if(attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj,attr)*100));
			}
			else
			{
				cur=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-cur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(cur!=json[attr])bStop=false;					
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}			
		}
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd;
		}
	},30);
}
