// JavaScript Document

setTimeout(function()
{
	
	<!--equipment-->
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');
	var oEq=document.getElementById('eq');
	var aEq=oEq.getElementsByTagName('li');	
	var now=0;
	oNext.onclick=function()
	{
		now++;
		if(now=aEq.length){now=aEq.length-3}
		oEq.style.left=-(aEq[0].offsetWidth+12)*now+'px';
	}
	oPrev.onclick=function()
	{
		now--;
		if(now=-1){now=0}
		oEq.style.left=-(aEq[0].offsetWidth+12)*now+'px';
	}

	
	<!--symptom-->
	var oPrevv=document.getElementById('prevv');
	var oNextt=document.getElementById('nextt');
	var oSy_btn=document.getElementById('sy_btn');	
	var aSy_btn=oSy_btn.getElementsByTagName('li');
	var oSy_cut=document.getElementById('sy_cut');
	var aSy_cut=oSy_cut.getElementsByTagName('li');	
	var nows=0;
	for(var i=0;i<aSy_btn.length;i++)
	{
		aSy_btn[i].index=i;
		aSy_btn[i].onmouseover=function()
		{
			nows=this.index;
			tab();	
		}
			
	}
	function tab()
	{
		for(var i=0;i<aSy_btn.length;i++)
		{
			aSy_btn[i].className='';
			aSy_cut[i].style.display='none';	
		}
		aSy_btn[nows].className='li_active';
		aSy_cut[nows].style.display='block';	
	}
	oNextt.onclick=function()
	{
		nows++;
		if(nows==aSy_btn.length){nows=0;}
		tab();	
	}	
	
	oPrevv.onclick=function()
	{
		nows--;
		if(nows==-1){nows=aSy_btn.length-1;}
		tab();	
	}
	
	
	<!--expert-->
	var oPv=document.getElementById('pv');
	var oNt=document.getElementById('nt');
	var oXo=document.getElementById('xxoo');
	var oExpert=document.getElementById('expert');
	var aExpert=oExpert.getElementsByTagName('li');
	var nowss=0;
	oExpert.style.width=aExpert[0].offsetWidth*aExpert.length+'px';
	function nt()
	{
		nowss++;
		nowss%=aExpert.length;
		oExpert.style.left=-aExpert[0].offsetWidth*nowss+'px';	
	}
	function pv()
	{
		nowss--;
		if(nowss==-1){nowss=aExpert.length-1}
		oExpert.style.left=-aExpert[0].offsetWidth*nowss+'px';	
	}
	oNt.onclick=nt;
	oPv.onclick=pv;
	timer=setInterval(nt,3000);
	oXo.onmouseover=function(){clearInterval(timer);}
	oXo.onmouseout=function(){timer=setInterval(nt,3000);}
	
},1000)
