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


window.onscroll=function()
{
		var aNav_a=document.getElementById('nav').getElementsByTagName('a');
		for(var i=0;i<aNav_a.length;i++)
		{	
			aNav_a[i].onmouseover=function()
			{	
				for(var j=0; j<aNav_a.length;j++)
				{
					aNav_a[j].style.backgroundColor="#881ca7";
				}	
					this.style.backgroundColor="#611477";
			}
		}  








	
		var aBox_a=document.getElementById('box9').getElementsByTagName('a');
		var aSpan=document.getElementById('box9').getElementsByTagName('span');
		for(var i=0;i<aBox_a.length;i++)
		{	
			aBox_a[i].index=i;
			aBox_a[i].onmouseover=function()
			{	
				for(var j=0; j<aBox_a.length;j++)
				{
					aSpan[j].style.display='none';
				}	
				aSpan[this.index].style.display='block';
			}
		}  
		
}
		
		   

