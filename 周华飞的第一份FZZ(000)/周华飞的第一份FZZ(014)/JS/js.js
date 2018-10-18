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

window.onload=function()
{
	/*nav*/
	var oUl=document.getElementById('nav_ul');
	var oA=oUl.getElementsByTagName('a');
	for(var i=0;i<oA.length;i++)
	{	
		oA[i].onclick=function()
		{	
			for(var j=0;j<oA.length;j++)
			{
				oA[j].style.color='';
			}
			this.style.color='red';
		}
	}
}