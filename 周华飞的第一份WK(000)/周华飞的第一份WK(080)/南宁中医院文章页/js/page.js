var obj=null;
var j=0;
var page=0;
var nowPage=0;//��ǰҳ
var listNum=4;//ÿҳ��ʾ<div>��
var PagesLen=0;//��ҳ��
var PageNum=7;//��ҳ���ӽ���(7��)
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
				comment+='		<p class="p1">�ۺ����ۣ�';
				comment+='			<img width="12" height="10" src="/images/list_dp4.jpg">';
				comment+='			<img width="12" height="10" src="/images/list_dp4.jpg">';
				comment+='			<img width="12" height="10" src="/images/list_dp4.jpg">';
				comment+='			<img width="12" height="10" src="/images/list_dp4.jpg">';
				comment+='			<img width="12" height="10" src="/images/list_dp2.jpg">';
				comment+='			<span>Ч����<i>�ܺ�</i></span>';
				comment+='			<span>����<i>����</i></span>';
				comment+='			<span>������<i>����</i></span>';
				comment+='			<span>������<i>�¿���</i></span>';
				comment+='		</p>';
				comment+='		<p class="des">'+result[key]['content']+'</p>';
				comment+='		<p class="left">2014-01-02 ����<em>�����вο���ֵ��</em></p>';
				comment+='		<p class="right"><a onclick="ajax_num('+result[key]['id']+', '+num+')" style="cursor:pointer;">�Ƽ�</a><span id="ajax_'+num+'">'+result[key]['num']+'</span>��</p>';
				comment+='  </dd>';
				comment+='</dl>';
				num++;
			}
			$('#page').show();
		}else{
		      $('#page').hide();
			  comment='<p style="text-align:center;width:100%;height:20px;margin:0 auto;padding:20px 0;font-size:14px;"><span style="display:inline-block;margin-right:10px;">��û���κ����ۣ�ɳ����ȱ��~</span></p>';
		}
		$(".allComment").html(comment);
		$('#default1').raty();
		$('#default2').raty();
		$('#default3').raty();
		var default1=document.getElementById('default1-score');
		default1.setAttribute('name','srvice');//����
		var default2=document.getElementById('default2-score');
		default2.setAttribute('name','environment');//����
		var default3=document.getElementById('default3-score');
		default3.setAttribute('name','effect');//��Ч
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
	//���ݱ任
	for (var i=0;i<j;i++){
	obj[i].style.display="none"
	}
	for (var i=p*listNum;i<(p+1)*listNum;i++){
	if(obj[i])obj[i].style.display="block"
	}
	if (nowPage < 1) {
		strS='<a href="javascript:void(0);" onclick="upPage('+(nowPage)+')" target="_self"><<��һҳ</a>  '
	} else {	
		strS='<a href="javascript:void(0);" onclick="upPage('+(nowPage-1)+')" target="_self"><<��һҳ</a>  '
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
		strE=' <a href="javascript:void(0);" onclick="upPage('+(nowPage+1)+')">��һҳ>></a>  ';
	} else {
		strE=' <a href="javascript:void(0);" onclick="upPage('+(nowPage)+')">��һҳ>></a>  ';
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
		alert('������ô�ƺ�����');
		fm.user.focus();
		return false;
	  }
	  if(fm.user.value.length>20){
		alert('������ֲ��ô���20���ַ���');
		fm.user.focus();
		return false;
	  }
	  if(fm.info.value==''){
		alert('�������ݲ���Ϊ�գ�');
		fm.info.focus();
		return false;
	  }
	  if(fm.info.value.length>300){
		alert('���ݲ��ô���300���ַ���');
		fm.info.focus();
		return false;
	  }
	  if(fm.srvice.value==0){
		alert('�������ǵ�����Ч������������');
		return false;
	  }
	  if(fm.effect.value==0){
		alert('�������ǵķ���̬����ô����');
		return false;
	  }
	  if(fm.user.value!='' && fm.info.value!='' && fm.srvice.value!=0 && fm.effect.value!=0){
	    alert('���۳ɹ�����л����֧�֣���ȴ�����Ա��ˣ�');
		fm.user.value='';
		fm.info.value='';
        $("#default1").children('img').attr('src','images/star-off.png');
        $("#default2").children('img').attr('src','images/star-off.png');
        $("#default3").children('img').attr('src','images/star-off.png');
	    var blackBg=$(".blackBg");
		$("#mySend").fadeOut('fast',function(){blackBg.fadeOut('fast')});
	  }
}
