// JavaScript Document
window.onload=function()
{
	
	/*滑动动画*/
	var oDiv=document.getElementById('move');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var oA=document.getElementById('a_box');
	var aAl=oA.getElementsByTagName('a')[0];
	var aAr=oA.getElementsByTagName('a')[1];
	var speed=1;
	var timer=null;
	oUl.innerHTML+=oUl.innerHTML;	
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	function startmove(){
							if(oUl.offsetLeft<-oUl.offsetWidth/2){oUl.style.left='0';}
							if(oUl.offsetLeft>0){oUl.style.left=-oUl.offsetWidth/2+'px';}
							oUl.style.left=oUl.offsetLeft+speed+'px';
						}
	timer=setInterval(startmove,30);
	oDiv.onmousemove=function(){clearInterval(timer);};
	oDiv.onmouseout=function(){timer=setInterval(startmove,30);};
	aAl.onclick=function(){speed=-1;};
	aAr.onclick=function(){speed=1;};
	
	/*导航动画*/
	var nav_Ul=document.getElementById('ul');
	var nav_Li=nav_Ul.getElementsByTagName('li');
	var nav_Dl=nav_Ul.getElementsByTagName('dl');
	for(var i=0; i<nav_Li.length; i++ )
	{	
		nav_Li[i].index=i;
		nav_Li[i].onmouseover=function()
		{			
				nav_Dl[this.index].style.display='block'			                                                     
		}
		nav_Li[i].onmouseout=function()
		{		
				nav_Dl[this.index].style.display='none'							                                                     
		}
	}							
}







