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


$(document).ready(function()
{
	/*登陆框*/
	$('#login_li').click(function()
	{
		$('#login_box_box').slideToggle('slow');
	});	
	$('#login_box_close').click(function()
	{
		$('#login_box_box').hide('slow');	
	});
	/*意见框*/
	$('.other_box').click(function()
	{
	    $('.suggest_box').show('slow');
	});
	$('.suggest_box_close').click(function()
	{
	    $('.suggest_box').hide('slow');
	});
	/*分享框*/
	$('.share_box').click(function()
	{
		$('.share').fadeToggle('fast');
	});
	/*开关框左*/
	var aBtn = $('#on_off').find('input');
	aBtn.click(function()
					 {
                    	aBtn.css('background-color','#fff');
                    	//aDiv.css('display','none');
                    	$(this).css('background-color','#c96');
                    	//aDiv.eq($(this).index()).css('display','block');
                	});
	/*开关框右*/				
	var aBtnn = $('#on_offf').find('input');
	aBtnn.click(function()
					 {
                    	aBtnn.css('background-color','#fff');
                    	//aDiv.css('display','none');
                    	$(this).css('background-color','#c96');
                    	//aDiv.eq($(this).index()).css('display','block');
                	});
	/*语言开关框*/
	$('.search_after').click(function()
	{
		$('#language1').slideToggle('slow');
		$('#language2').css('display','none')
	});
	$('.search_before').click(function()
	{
		$('#language2').slideToggle('slow');
		$('#language1').css('display','none')
	});
	
	/*广告关闭*/
	$('.close').click(function()
	{
		$('.ad').hide('slow');
	});
	/*在线翻译，英语作文帮*/
	var aA = $('.btn_box').find('a');
	aA.click(function()
					 {
                    	aA.css('background-color','#fff');
                    	//aDiv.css('display','none');
                    	$(this).css('background-color','#EEE');
                    	//aDiv.eq($(this).index()).css('display','block');
                	});
	/*清空*/
	$('.clc').click(function()
	{
		$('#txt1').val('');
	});
	
	/*two_code*/
	var aTwo= $('.more').find('#icon');
	aTwo.click(function()
					 {
                    	aTwo.css('background-color','#fff');
                    	$('.two_co').addClass('display','none');
						$('.two_code').addClass('display','none');
                    	$(this).css('background-color','#fff');
                    	$('.two_co').eq($(this).index()).css('display','block');
						$('.two_code').eq($(this).index()).css('display','block');
                	});	
	


	
		
		
		//event.stopPropagation();	////阻止冒泡事件      			无效,原因不明
		//event.preventDefault();  //阻止默认行为 ( 表单提交 )			无效,原因不明
});


window.onload=function()
{
	/*翻译*/
	var oTxt1=document.getElementById('txt1');
	var oTranslate=document.getElementById('translate');
	var oSearch=document.getElementById('search');
	oSearch.onclick=oTxt1.onblur=function()
	{
		oTranslate.innerHTML=oTxt1.value;
	}
	/*二维码*/
	var oIcon1=document.getElementById('icon1');
	var oTwo_code1=document.getElementById('two_code1');
	var oTwo_co1=document.getElementById('two_co1');
	oIcon1.onmouseover=function()
	{
		oTwo_code1.style.display='block';
		oTwo_co1.style.display='block';
	}
	oIcon1.onmouseout=function()
	{
		oTwo_code1.style.display='none';
		oTwo_co1.style.display='none';
	}
	var oIcon2=document.getElementById('icon2');
	var oTwo_code2=document.getElementById('two_code2');
	var oTwo_co2=document.getElementById('two_co2');
	oIcon2.onmouseover=function()
	{
		oTwo_code2.style.display='block';
		oTwo_co2.style.display='block';
	}
	oIcon2.onmouseout=function()
	{
		oTwo_code2.style.display='none';
		oTwo_co2.style.display='none';
	}
	var oIcon3=document.getElementById('icon3');
	var oTwo_code3=document.getElementById('two_code3');
	var oTwo_co3=document.getElementById('two_co3');
	oIcon3.onmouseover=function()
	{
		oTwo_code3.style.display='block';
		oTwo_co3.style.display='block';
	}
	oIcon3.onmouseout=function()
	{
		oTwo_code3.style.display='none';
		oTwo_co3.style.display='none';
	}
	
	
	/*登陆框移动*/
	var oLogin_box_box=document.getElementById('login_box_box');
	var oMove_box=document.getElementById('move_box');
	oMove_box.onmousedown=function(ev)
	 {	
	 	var oEvent=ev||event;
	 	disX=oEvent.clientX-oLogin_box_box.offsetLeft;
		disY=oEvent.clientY-oLogin_box_box.offsetTop;
		oMove_box.onmousemove=function(ev)
		{
		 	var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;
			if(l<0){l=0;}else if(l>document.documentElement.clientWidth-oLogin_box_box.offsetWidth){l=document.documentElement.clientWidth-oLogin_box_box.offsetWidth;}
			if(t<0){t=0;}else if(t>document.documentElement.clientHeight-oLogin_box_box.offsetHeight){t=document.documentElement.clientHeight-oLogin_box_box.offsetHeight;}
			oLogin_box_box.style.left=l+'px';
			oLogin_box_box.style.top=t+'px';
		}
		oMove_box.onmouseup=function()
		{
		 	oMove_box.onmousemove=null;
			oMove_box.onmouseup=null;
			oMove_box.releaseCapture();
		}
		oMove_box.setCapture();
		return false;
	 }	
}