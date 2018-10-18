$(document).ready(function(){

	var Sys = {};

	var ua = navigator.userAgent.toLowerCase();

	var s;

	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :

	(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :

	(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :

	(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :

	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

	//菜单效果

	if(Sys.ie){

		if(Sys.ie!='6.0' && Sys.ie!='7.0' && Sys.ie!='8.0'){

			navMove();

		}else{

		    $('#top .topNav ul li a').each(function(){

			   $(this).hover(function(){

			      $('#top .topNav ul li a').css('background','#D33C60');

				  $(this).css('background','#c92f4e');

			   });

			});

		}

	}else{

			navMove();

	}

    //I_HospitalNews

	/*$('.IHN_center .top .nav li').each(function(index){

	   $(this).hover(function(){

	      $('.IHN_center .top .nav li').removeClass('select');

		  $(this).addClass('select');

		  $('.IHN_center .top .content .list').eq(index).show().siblings().hide()

	   });

	});*/

    //I_DiseaseSection

	$('#I_Disease1 li:first').addClass('select');

	$('#I_Disease2 li:first').addClass('select');

	$('.I_Disease').each(function(i){

	    $('.I_Disease').eq(i).find('.list').eq(0).css('display','block');

		$('#I_Disease'+(i+1)+' li').each(function(index){

		   $(this).hover(function(){

			  $('#I_Disease'+(i+1)+' li').removeClass('select');

			  $(this).addClass('select');

			  $('.I_Disease'+(i+1)+' .content .list').eq(index).show().siblings().hide()

		   });

		});

	});

    //footer

	$('#footer .nav li').each(function(index){

	   $(this).hover(function(){

	      $('#footer .nav li').removeClass('select');

		  $(this).addClass('select');

		  $('#footer .content .list').eq(index).show().siblings().hide();

	   });

	});	

	//list page

	var pattenLeft='[';

	var pattenRight=']';

	var myArrStart=new Array();

	var myArrEnd=new Array();

	$('#pagelink .page_num').each(function(i){

	   myArrStart.push($('#pagelink .page_num').eq(i).html());

	});

    for(var i=0;i<myArrStart.length;i++){

	   myArrEnd.push(myArrStart[i].replace('[',''));

	}

    for(var i=0;i<myArrEnd.length;i++){

	   $('#pagelink .page_num').eq(i).html(myArrEnd[i].replace(']',''));

	}

	$('#list .list dt a').each(function(i){

		$(this).hover(function(){

		    $('#list .list dt span').css('background-position','-5px 0px');

			$(this).prev('span').css('background-position','0px 0px');

		},function(){

		    $('#list .list dt span').css('background-position','-5px 0px');

		});

	});

	//class

	$('#C_Main .Disease').each(function(i){

	   if(i%3==0){

	      $(this).addClass('left');

	   }else if(i%3==1){

	      $(this).addClass('center');

	   }else if(i%3==2){

	      $(this).addClass('right');

	   }

	});

	//banner

	$(".banner").hover(function(){

		$(this).find(".prev,.next").fadeTo("fast",0.1);

	},function(){

		$(this).find(".prev,.next").hide();

	})

	$(".prev,.next").hover(function(){

		$(this).fadeTo("fast",1);

	},function(){

		$(this).fadeTo("fast",0);

	})

	$(".banner").slide({ titCell:".num ul" , mainCell:".show" , effect:"fold", autoPlay:true, delayTime:1500 ,interTime:5000, autoPage:true });

});

//searchCheck

function checkIpt(){

  var fm=document.search;

  if(fm.keyword.value==''){

		alert('搜索内容不得为空！');

		fm.keyword.focus();

		return false;

  }

  if(fm.keyword.value.length<2){

		alert('搜索内容不得小于两个字符！');

		fm.keyword.focus();

		return false;

  }

  return true;

}

//navMove

function navMove(){

    $('#top .topNav ul li a').css('position','absolute');

	$('.topNav ul li').each(function() {

		$(this).hover(function(){

			$('.topNav .move_bg').remove();

			var oDiv=$("<div class='move_bg'></div>");

			oDiv.insertBefore($(this).children('a'));

			var oMove=$(this).find('.move_bg');

			oMove.animate({'left':20},250,function(){

				oMove.animate({'left':0},250);

			})

		},function(){

			$('.topNav .move_bg').remove();

		});

	});

}

/*

window.onscroll = scrollTop;

function scrollTop(){

	//gotoTopBottom

	var sTop = document.documentElement.scrollTop || document.body.scrollTop || 0;

    if(sTop>510){

	   $(".returnTopBotton").fadeIn('fast');

	}else{

       $(".returnTopBotton").fadeOut('fast');

	}

}

function returnTop(){

    var sTop = document.documentElement.scrollTop || document.body.scrollTop || 0;

	window.scrollBy(0,-100);

	scrolldelay = setTimeout('returnTop()',10);

	if(sTop==0) clearTimeout(scrolldelay);

}

*/

/*banner*/
$(function(){
	var aBtn=$('#banner li');
	var aCut=$('#banner div');
	timerSwitch(aBtn,aCut)	
	function timerSwitch(aBtn,aCut){
		var now=0;
		var timer=null;
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){	
				now=this.index;	
				tab();	
			}	
		}
		function tab(){	
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';	
				aCut[i].className='';
			}
			aBtn[now].className='li_active';
			aCut[now].className='div_select';
		}
		function next(){
			now++;
			now%=aBtn.length;
			tab();
		}
		timer=setInterval(next,5000);
		aCut[0].parentNode.onmouseover=function(){clearInterval(timer);}
		aCut[0].parentNode.onmouseout=function(){timer=setInterval(next,5000);}
	}
})

/*评论*/
$(function(){
	var aBtn=$('#banner li');
	var aCut=$('#banner div');
	timerSwitch(aBtn,aCut)	
	function timerSwitch(aBtn,aCut){
		var now=0;
		var timer=null;
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){	
				now=this.index;	
				tab();	
			}	
		}
		function tab(){	
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';	
				aCut[i].className='';
			}
			aBtn[now].className='li_active';
			aCut[now].className='div_select';
		}
		function next(){
			now++;
			now%=aBtn.length;
			tab();
		}
		timer=setInterval(next,5000);
		aCut[0].parentNode.onmouseover=function(){clearInterval(timer);}
		aCut[0].parentNode.onmouseout=function(){timer=setInterval(next,5000);}
	}
})