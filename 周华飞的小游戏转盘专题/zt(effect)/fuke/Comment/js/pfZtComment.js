// JavaScript Document
var obj=null;
var j=0;
var page=0;
var nowPage=0;//当前页
var listNum=4;//每页显示<div>数
var PagesLen=0;//总页数
var PageNum=7;//分页链接接数(7个)
$(document).ready(function(){
		var result = eval('('+dd_array+')');
		var html = "";
		var comment='';
		var num = 0;
		if(result.length!=0){
			for (var key in result)
			{
				comment+='<dl>';
				comment+='	 <dt>';
				comment+='	   <ul>';
				comment+='		 <li class="name">用户：<span>'+result[key]['name']+'</span></li>';
				comment+='		 <li class="score">评分：<span>5分</span></li>';
				comment+='		 <li class="praise">[<em id="ajax_'+num+'">'+result[key]['num']+'</em>]<span onclick="ajax_num('+result[key]['id']+', '+num+')">[赞]</span></li>';
				comment+='	   </ul>';
				comment+='	 </dt>';
				comment+='	 <dd>'+result[key]['content']+'</dd>';
				comment+='  </dl>';
				num = num + 1;
			}
		}else{
		  $("#fkShow").remove();
		  $("#page").remove();
		  comment='<p style="text-align:center;width:280px;height:20px;margin:0 auto;"><span style="float:left;padding-right:10px;">还没有任何评论！沙发空缺中~</span><a href="javascript:void(0);" id="clickBtn" onClick="mySendShow();" style="float:left;">我要评论</a></p>';
		}
		$("#ztContent").html(comment);
		$('#default1').raty();
		$('#default2').raty();
		$('#default3').raty();
		var default1=document.getElementById('default1-score');
		default1.setAttribute('name','srvice');//服务
		var default2=document.getElementById('default2-score');
		default2.setAttribute('name','environment');//环境
		var default3=document.getElementById('default3-score');
		default3.setAttribute('name','effect');//疗效

		var mySend=$("#mySend");
		var blackBg=$(".blackBg");
		mySend.css('left','50%');
		mySend.css('top','50%');
		blackBg.click(function(){
		    mySend.fadeOut('fast',function(){blackBg.fadeOut('fast');});
            var fm=document.comment;
			fm.user.value='';
			fm.info.value='';
			$("#default1").children('img').attr('src','/Comment/images/star-off.png');
			$("#default2").children('img').attr('src','/Comment/images/star-off.png');
			$("#default3").children('img').attr('src','/Comment/images/star-off.png');
		});
		mySend.children('.close').click(function(){
		    mySend.fadeOut('fast',function(){blackBg.fadeOut('fast');});
			var fm=document.comment;
			fm.user.value='';
			fm.info.value='';
			$("#default1").children('img').attr('src','/Comment/images/star-off.png');
			$("#default2").children('img').attr('src','/Comment/images/star-off.png');
			$("#default3").children('img').attr('src','/Comment/images/star-off.png');
		});	
		$('.btnClose').click(function(){
		    mySend.fadeOut('fast',function(){blackBg.fadeOut('fast');});
			var fm=document.comment;
			fm.user.value='';
			fm.info.value='';
			$("#default1").children('img').attr('src','/Comment/images/star-off.png');
			$("#default2").children('img').attr('src','/Comment/images/star-off.png');
			$("#default3").children('img').attr('src','/Comment/images/star-off.png');
		});	
		//color
        var href=document.location.href;
		var Arr=href.split('/');
		switch(Arr[4]){
		  case 'jzb0325':
		      var color='#0F95EE';
		      $('#clickBtn').css({'background':color});
			  $('#mySend table th').css({'color':color});
			  $('#mySend table input.btn').css({'background-color':color,'border-color':color});
			  break;
		}
		//page
		obj=$("#ztContent dl");
		j=obj.length;
		PagesLen=Math.ceil(j/listNum);
		upPage(0);
		$('.square_ul a').click(function(){
			$('.square_ul a').removeClass("active-square");
			$(this).addClass('active-square');
			$(this).parents('.box_163css').find('.s_result_square').css('color','#c00').html($(this).attr('title'));
			}
		);
		$('.square_ul1 a').click(function(){
			$('.square_ul1 a').removeClass("active-square");
			$(this).addClass('active-square');
			$(this).parents('.box_163css').find('.s_result_square').css('color','#c00').html($(this).attr('title'))
			}
		);
		$('.square_ul2 a').click(function(){
			$('.square_ul2 a').removeClass("active-square");
			$(this).addClass('active-square');
			$(this).parents('.box_163css').find('.s_result_square').css('color','#c00').html($(this).attr('title'))
			}
		);
});
//mySendShow
function mySendShow(){
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
	(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
	(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
	(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
	if(Sys.ie == '6.0'){
		location.href="/guahao/?ref="+document.referrer;
	}else{
		$("#mySend").fadeIn('slow');
		$(".blackBg").css("display","block");
	}
}
function upPage(p){
	nowPage=p
	//内容变换
	for (var i=0;i<j;i++){
	obj[i].style.display="none"
	}
	for (var i=p*listNum;i<(p+1)*listNum;i++){
	if(obj[i])obj[i].style.display="block"
	}
	if (nowPage < 1) {
		strS='<a href="javascript:void(0);" onclick="upPage('+(nowPage)+')" target="_self">上一页</a>  '
	} else {	
		strS='<a href="javascript:void(0);" onclick="upPage('+(nowPage-1)+')" target="_self">上一页</a>  '
	}
	var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2);
	var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1;
	var strC="";
	var startPage=0;
	var endPage=0;
	if (PageNum>=PagesLen){
	  startPage=0;endPage=PagesLen-1
	}else if(nowPage<PageNum_2){
	  startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1
	}else {
	  startPage=nowPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: nowPage-PageNum_2+1;var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t;
	}
	for (var i=startPage;i<=endPage;i++){
		 if (i==nowPage){
		    strC+='<a href="javascript:void(0);" style="color:#fff;font-weight:700;background:#02caa7;" onclick="upPage('+i+')">'+(i+1)+'</a> ';
		 }else{
		    strC+='<a href="javascript:void(0);" onclick="upPage('+i+')">'+(i+1)+'</a> ';
		 }
	}
	if (nowPage < PagesLen-1) {
		strE=' <a href="javascript:void(0);" onclick="upPage('+(nowPage+1)+')">下一页</a>  ';
	} else {
		strE=' <a href="javascript:void(0);" onclick="upPage('+(nowPage)+')">下一页</a>  ';
	}

	$("#page").html(strS+strC+strE);
}
function ajax_num(id, num){
	$("#pp_num").html('<script type="text/javascript" src="http://pj.skinjc.com/socket.php?id='+id+'&action=2"><\/script>');
	var n_num = $("#ajax_"+num).html();
	$("#ajax_"+num).html(parseInt(n_num)+1);
	$("#imgs_"+num).attr("onclick","");
}
function checkComment(){
	  var fm=document.comment;
	  if(fm.user.value==''){
		alert('请问怎么称呼您？');
		fm.user.focus();
		return false;
	  }
	  if(fm.user.value.length>20){
		alert('你的名字不得大于20个字符！');
		fm.user.focus();
		return false;
	  }
	  if(fm.info.value==''){
		alert('评论内容不得为空！');
		fm.info.focus();
		return false;
	  }
	  if(fm.info.value.length>300){
		alert('内容不得大于300个字符！');
		fm.info.focus();
		return false;
	  }
	  if(fm.srvice.value==0){
		alert('请问我们的服务态度怎么样！');
		return false;
	  }
	  if(fm.effect.value==0){
		alert('请问治疗效果对您有帮助吗！');
		return false;
	  }
	  if(fm.user.value!='' && fm.info.value!='' && fm.srvice.value!=0 && fm.effect.value!=0){
	    alert('评论成功！请等待管理员审核！');
		fm.user.value='';
		fm.info.value='';
        $("#default1").children('img').attr('src','/Comment/images/star-off.png');
        $("#default2").children('img').attr('src','/Comment/images/star-off.png');
        $("#default3").children('img').attr('src','/Comment/images/star-off.png');
	    var blackBg=$(".blackBg");
		$("#mySend").fadeOut('fast',function(){blackBg.fadeOut('fast')});
	  }
}
