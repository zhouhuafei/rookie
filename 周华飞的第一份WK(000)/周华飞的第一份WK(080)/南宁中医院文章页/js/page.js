var obj=null;
var j=0;
var page=0;
var nowPage=0;//当前页
var listNum=4;//每页显示<div>数
var PagesLen=0;//总页数
var PageNum=7;//分页链接接数(7个)
$(function(){
		var result = eval('('+dd_array+')');
		var html = "";
		var comment='';
		var num = 0;
		if(result.length!=0){
			for (var key in result)
			{
				comment+='<dl>';
				comment+='  <dt>';
				comment+='	<img src="/images/list_dp6.jpg"/>';
				comment+='	<p>'+result[key]['name']+'</p>';
				comment+='  </dt>';
				comment+='  <dd>';
				comment+='		<p class="p1">综合评价：';
				comment+='			<img width="12" height="10" src="/images/list_dp4.jpg">';
				comment+='			<img width="12" height="10" src="/images/list_dp4.jpg">';
				comment+='			<img width="12" height="10" src="/images/list_dp4.jpg">';
				comment+='			<img width="12" height="10" src="/images/list_dp4.jpg">';
				comment+='			<img width="12" height="10" src="/images/list_dp2.jpg">';
				comment+='			<span>效果：<i>很好</i></span>';
				comment+='			<span>服务：<i>满意</i></span>';
				comment+='			<span>环境：<i>满意</i></span>';
				comment+='			<span>就诊大夫：<i>陈开亮</i></span>';
				comment+='		</p>';
				comment+='		<p class="des">'+result[key]['content']+'</p>';
				comment+='		<p class="left">2014-01-02 评价<em>这条有参考价值吗？</em></p>';
				comment+='		<p class="right"><a onclick="ajax_num('+result[key]['id']+', '+num+')" style="cursor:pointer;">推荐</a><span id="ajax_'+num+'">'+result[key]['num']+'</span>人</p>';
				comment+='  </dd>';
				comment+='</dl>';
				num++;
			}
			$('#page').show();
		}else{
		      $('#page').hide();
			  comment='<p style="text-align:center;width:100%;height:20px;margin:0 auto;padding:20px 0;font-size:14px;"><span style="display:inline-block;margin-right:10px;">还没有任何评论！沙发空缺中~</span></p>';
		}
		$(".allComment").html(comment);
		$('#default1').raty();
		$('#default2').raty();
		$('#default3').raty();
		var default1=document.getElementById('default1-score');
		default1.setAttribute('name','srvice');//服务
		var default2=document.getElementById('default2-score');
		default2.setAttribute('name','environment');//环境
		var default3=document.getElementById('default3-score');
		default3.setAttribute('name','effect');//疗效
		//page
		obj=$(".allComment dl");
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
		strS='<a href="javascript:void(0);" onclick="upPage('+(nowPage)+')" target="_self"><<上一页</a>  '
	} else {	
		strS='<a href="javascript:void(0);" onclick="upPage('+(nowPage-1)+')" target="_self"><<上一页</a>  '
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
		    strC+='<a href="javascript:void(0);" class="select" onclick="upPage('+i+')">'+(i+1)+'</a> ';
		 }else{
		    strC+='<a href="javascript:void(0);" onclick="upPage('+i+')">'+(i+1)+'</a> ';
		 }
	}
	if (nowPage < PagesLen-1) {
		strE=' <a href="javascript:void(0);" onclick="upPage('+(nowPage+1)+')">下一页>></a>  ';
	} else {
		strE=' <a href="javascript:void(0);" onclick="upPage('+(nowPage)+')">下一页>></a>  ';
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
		alert('请问我们的治疗效果您还满意吗？');
		return false;
	  }
	  if(fm.effect.value==0){
		alert('请问我们的服务态度怎么样？');
		return false;
	  }
	  if(fm.user.value!='' && fm.info.value!='' && fm.srvice.value!=0 && fm.effect.value!=0){
	    alert('评论成功！感谢您的支持，请等待管理员审核！');
		fm.user.value='';
		fm.info.value='';
        $("#default1").children('img').attr('src','images/star-off.png');
        $("#default2").children('img').attr('src','images/star-off.png');
        $("#default3").children('img').attr('src','images/star-off.png');
	    var blackBg=$(".blackBg");
		$("#mySend").fadeOut('fast',function(){blackBg.fadeOut('fast')});
	  }
}
