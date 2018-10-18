$(function() {
	  var result = eval('('+dd_array+')');
	  var html = "";
	  var comment='';
	  var num = 0;
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
	//commentClick
	$('#myComment').click(function(){
		
	    $('#mySend').slideToggle("fast",function(){
		    click_scroll();
		});
		
	});
	$('#mySend .close').click(function(){
		$('.blackBg').css("display","none")
		$('#mySend').slideToggle();
			});
	//
//	var href=document.location.href;
//	var Arr=href.split('/');
//	var elseLink=$('#elseLink ul');
//	switch(Arr[4]){
//	    case 'baidianfeng':
//		  elseLink.find('.link1').find('a').text('白癜风真的能治的好吗');
//		  elseLink.find('.link2').find('a').text('白癜风治好后会有疤痕吗');
//		  elseLink.find('.link3').find('a').text('白癜风治疗多少钱');
//		  elseLink.find('.link4').find('a').text('白癜风治疗要住院吗');
//		  elseLink.find('.link5').find('a').text('十几年的白癜风症状能治吗');
//		  elseLink.find('.link6').find('a').text('白癜风会遗传吗');
//		  break;
//	    case 'baidianfeng.html':
//		  elseLink.find('.link1').find('a').text('白癜风真的能治的好吗');
//		  elseLink.find('.link2').find('a').text('白癜风治好后会有疤痕吗');
//		  elseLink.find('.link3').find('a').text('白癜风治疗多少钱');
//		  elseLink.find('.link4').find('a').text('白癜风治疗要住院吗');
//		  elseLink.find('.link5').find('a').text('十几年的白癜风症状能治吗');
//		  elseLink.find('.link6').find('a').text('白癜风会遗传吗');
//		  break; 
//	    case 'niupixuan':
//		  elseLink.find('.link1').find('a').text('得了牛皮癣怎么办');
//		  elseLink.find('.link2').find('a').text('牛皮癣可以治好吗');
//		  elseLink.find('.link3').find('a').text('牛皮癣治疗要多少钱');
//		  elseLink.find('.link4').find('a').text('牛皮癣治疗要多久');
//		  elseLink.find('.link5').find('a').text('牛皮癣会遗传吗');
//		  elseLink.find('.link6').find('a').text('牛皮癣治好后有疤痕吗');
//		  break;
//	    case 'niupixuan.html':
//		  elseLink.find('.link1').find('a').text('得了牛皮癣怎么办');
//		  elseLink.find('.link2').find('a').text('牛皮癣可以治好吗');
//		  elseLink.find('.link3').find('a').text('牛皮癣治疗要多少钱');
//		  elseLink.find('.link4').find('a').text('牛皮癣治疗要多久');
//		  elseLink.find('.link5').find('a').text('牛皮癣会遗传吗');
//		  elseLink.find('.link6').find('a').text('牛皮癣治好后有疤痕吗');
//		  break;
//	    case 'yulinbing':
//		  elseLink.find('.link1').find('a').text('鱼鳞病好治吗');
//		  elseLink.find('.link2').find('a').text('鱼鳞病症状能治好吗');
//		  elseLink.find('.link3').find('a').text('鱼鳞病治疗是不是很贵');
//		  elseLink.find('.link4').find('a').text('鱼鳞病治疗要多久时间');
//		  elseLink.find('.link5').find('a').text('鱼鳞病治好后会有疤痕吗');
//		  elseLink.find('.link6').find('a').text('鱼鳞病会遗传吗');
//		  break;
//	    case 'qianmazhen':
//		  elseLink.find('.link1').find('a').text('荨麻疹好治吗');
//		  elseLink.find('.link2').find('a').text('荨麻疹治好后会有疤痕吗');
//		  elseLink.find('.link3').find('a').text('荨麻疹不能吃什么');
//		  elseLink.find('.link4').find('a').text('荨麻疹治疗贵不贵');
//		  elseLink.find('.link5').find('a').text('荨麻疹会传染吗');
//		  elseLink.find('.link6').find('a').text('荨麻疹反复发作怎么办');
//		  break;
//	    case 'qingchundou':
//		  elseLink.find('.link1').find('a').text('青春痘好治吗');
//		  elseLink.find('.link2').find('a').text('痘痘反复发作怎么办');
//		  elseLink.find('.link3').find('a').text('青春痘治疗多少钱');
//		  elseLink.find('.link4').find('a').text('痘痘治好后会留疤痕吗');
//		  elseLink.find('.link5').find('a').text('治疗痘痘要多长时间');
//		  elseLink.find('.link6').find('a').text('痘痘怎么调理');
//		  break;
//	    case 'qingchundou.html':
//		  elseLink.find('.link1').find('a').text('青春痘好治吗');
//		  elseLink.find('.link2').find('a').text('痘痘反复发作怎么办');
//		  elseLink.find('.link3').find('a').text('青春痘治疗多少钱');
//		  elseLink.find('.link4').find('a').text('痘痘治好后会留疤痕吗');
//		  elseLink.find('.link5').find('a').text('治疗痘痘要多长时间');
//		  elseLink.find('.link6').find('a').text('痘痘怎么调理');
//		  break;
//	    case 'tuofa':
//		  elseLink.find('.link1').find('a').text('脱发好治吗');
//		  elseLink.find('.link2').find('a').text('脱发是季节性的吗');
//		  elseLink.find('.link3').find('a').text('脱发治疗多少钱');
//		  elseLink.find('.link4').find('a').text('脱发会不会遗传');
//		  elseLink.find('.link5').find('a').text('脱发治疗要多久时间');
//		  elseLink.find('.link6').find('a').text('引起脱发的原因');
//		  break;
//	    case 'tuofa.html':
//		  elseLink.find('.link1').find('a').text('脱发好治吗');
//		  elseLink.find('.link2').find('a').text('脱发是季节性的吗');
//		  elseLink.find('.link3').find('a').text('脱发治疗多少钱');
//		  elseLink.find('.link4').find('a').text('脱发会不会遗传');
//		  elseLink.find('.link5').find('a').text('脱发治疗要多久时间');
//		  elseLink.find('.link6').find('a').text('引起脱发的原因');
//		  break;
//	    case 'shizhen':
//		  elseLink.find('.link1').find('a').text('湿疹好治吗');
//		  elseLink.find('.link2').find('a').text('湿疹治好后有没有疤痕');
//		  elseLink.find('.link3').find('a').text('湿疹反复发作怎么办');
//		  elseLink.find('.link4').find('a').text('湿疹治疗要多少钱');
//		  elseLink.find('.link5').find('a').text('湿疹不能吃什么');
//		  elseLink.find('.link6').find('a').text('湿疹会传染吗');
//		  break;
//	    case 'shizhen.html':
//		  elseLink.find('.link1').find('a').text('湿疹好治吗');
//		  elseLink.find('.link2').find('a').text('湿疹治好后有没有疤痕');
//		  elseLink.find('.link3').find('a').text('湿疹反复发作怎么办');
//		  elseLink.find('.link4').find('a').text('湿疹治疗要多少钱');
//		  elseLink.find('.link5').find('a').text('湿疹不能吃什么');
//		  elseLink.find('.link6').find('a').text('湿疹会传染吗');
//		  break;
//	    case 'piyan':
//		  elseLink.find('.link1').find('a').text('皮炎好治吗');
//		  elseLink.find('.link2').find('a').text('皮炎治疗多少钱');
//		  elseLink.find('.link3').find('a').text('引起皮炎的原因');
//		  elseLink.find('.link4').find('a').text('皮炎反复发作怎么办');
//		  elseLink.find('.link5').find('a').text('皮炎治疗要多长时间');
//		  elseLink.find('.link6').find('a').text('皮炎不能吃什么');
//		  break;
//	    case 'piyan.html':
//		  elseLink.find('.link1').find('a').text('皮炎好治吗');
//		  elseLink.find('.link2').find('a').text('皮炎治疗多少钱');
//		  elseLink.find('.link3').find('a').text('引起皮炎的原因');
//		  elseLink.find('.link4').find('a').text('皮炎反复发作怎么办');
//		  elseLink.find('.link5').find('a').text('皮炎治疗要多长时间');
//		  elseLink.find('.link6').find('a').text('皮炎不能吃什么');
//		  break;
//	    case 'bahen':
//		  elseLink.find('.link1').find('a').text('疤痕好治吗');
//		  elseLink.find('.link2').find('a').text('疤痕治疗多少钱');
//		  elseLink.find('.link3').find('a').text('疤痕治疗能一次性消除吗');
//		  elseLink.find('.link4').find('a').text('疤痕治好后真的看不出来吗');
//		  elseLink.find('.link5').find('a').text('疤痕治疗要多长时间');
//		  elseLink.find('.link6').find('a').text('十几年的疤痕可以治好吗');
//		  break;
//	    case 'huizhijia':
//		  elseLink.find('.link1').find('a').text('灰指甲能一次性治的好吗');
//		  elseLink.find('.link2').find('a').text('灰指甲会相互传染吗');
//		  elseLink.find('.link3').find('a').text('灰指甲治疗多少钱');
//		  elseLink.find('.link4').find('a').text('灰指甲治疗需要多长时间');
//		  elseLink.find('.link5').find('a').text('灰指甲会遗传吗');
//		  elseLink.find('.link6').find('a').text('灰指甲不治会怎么样');
//		  break;
//	    case 'maonangyan':
//		  elseLink.find('.link1').find('a').text('毛囊炎怎么治疗');
//		  elseLink.find('.link2').find('a').text('毛囊炎的原因');
//		  elseLink.find('.link3').find('a').text('毛囊炎的症状及治疗');
//		  elseLink.find('.link4').find('a').text('毛囊炎多长时间能好');
//		  elseLink.find('.link5').find('a').text('毛囊炎会不会传染');
//		  elseLink.find('.link6').find('a').text('毛囊炎不治会怎么样');
//		  break;
//	    case 'maonangyan.html':
//		  elseLink.find('.link1').find('a').text('毛囊炎怎么治疗');
//		  elseLink.find('.link2').find('a').text('毛囊炎的原因');
//		  elseLink.find('.link3').find('a').text('毛囊炎的症状及治疗');
//		  elseLink.find('.link4').find('a').text('毛囊炎多长时间能好');
//		  elseLink.find('.link5').find('a').text('毛囊炎会不会传染');
//		  elseLink.find('.link6').find('a').text('毛囊炎不治会怎么样');
//		  break;
//	    case 'huangheban':
//		  elseLink.find('.link1').find('a').text('脸上长了黄褐斑');
//		  elseLink.find('.link2').find('a').text('用什么方法去斑');
//		  elseLink.find('.link3').find('a').text('黄褐斑治疗要多久');
//		  elseLink.find('.link4').find('a').text('黄褐斑治疗要多少钱');
//		  elseLink.find('.link5').find('a').text('黄褐斑去南宁哪个医院治疗');
//		  elseLink.find('.link6').find('a').text('黄褐斑会遗传吗');
//		  break;
//	    case 'huangheban.html':
//		  elseLink.find('.link1').find('a').text('脸上长了黄褐斑');
//		  elseLink.find('.link2').find('a').text('用什么方法去斑');
//		  elseLink.find('.link3').find('a').text('黄褐斑治疗要多久');
//		  elseLink.find('.link4').find('a').text('黄褐斑治疗要多少钱');
//		  elseLink.find('.link5').find('a').text('黄褐斑去南宁哪个医院治疗');
//		  elseLink.find('.link6').find('a').text('黄褐斑会遗传吗');
//		  break;
//	    case 'bianpingyou':
//		  elseLink.find('.link1').find('a').text('激光去扁平疣');
//		  elseLink.find('.link2').find('a').text('哪里治疗扁平疣');
//		  elseLink.find('.link3').find('a').text('治疗扁平疣要多少钱');
//		  elseLink.find('.link4').find('a').text('治疗扁平疣要多久');
//		  elseLink.find('.link5').find('a').text('扁平疣会传染吗');
//		  elseLink.find('.link6').find('a').text('扁平疣是怎么得的');
//		  break;
//	    case 'pifuxuan':
//		  elseLink.find('.link1').find('a').text('手足癣能根治吗');
//		  elseLink.find('.link2').find('a').text('体癣治好后会复发吗');
//		  elseLink.find('.link3').find('a').text('皮肤癣治疗要多长时间');
//		  elseLink.find('.link4').find('a').text('皮肤癣不能吃什么');
//		  elseLink.find('.link5').find('a').text('皮肤癣会传染吗');
//		  elseLink.find('.link6').find('a').text('皮肤癣治疗多少钱');
//		  break;
//	    case 'jiechuang':
//		  elseLink.find('.link1').find('a').text('疥疮发病原因');
//		  elseLink.find('.link2').find('a').text('专业治疥疮医院');
//		  elseLink.find('.link3').find('a').text('疥疮的手术治疗');
//		  elseLink.find('.link4').find('a').text('疥疮多久能好');
//		  elseLink.find('.link5').find('a').text('疥疮治疗多少钱');
//		  elseLink.find('.link6').find('a').text('疥疮传染吗');
//		  break;
//	    case 'jiechuang.html':
//		  elseLink.find('.link1').find('a').text('疥疮发病原因');
//		  elseLink.find('.link2').find('a').text('专业治疥疮医院');
//		  elseLink.find('.link3').find('a').text('疥疮的手术治疗');
//		  elseLink.find('.link4').find('a').text('疥疮多久能好');
//		  elseLink.find('.link5').find('a').text('疥疮治疗多少钱');
//		  elseLink.find('.link6').find('a').text('疥疮传染吗');
//		  break;
//	    case 'queban':
//		  elseLink.find('.link1').find('a').text('去雀斑的方法');
//		  elseLink.find('.link2').find('a').text('脸上长雀斑怎么办');
//		  elseLink.find('.link3').find('a').text('雀斑怎么治疗');
//		  elseLink.find('.link4').find('a').text('哪里可以治疗雀斑');
//		  elseLink.find('.link5').find('a').text('治疗雀斑要多久');
//		  elseLink.find('.link6').find('a').text('雀斑遗传吗');
//		  break;
//	    case 'queban.html':
//		  elseLink.find('.link1').find('a').text('去雀斑的方法');
//		  elseLink.find('.link2').find('a').text('脸上长雀斑怎么办');
//		  elseLink.find('.link3').find('a').text('雀斑怎么治疗');
//		  elseLink.find('.link4').find('a').text('哪里可以治疗雀斑');
//		  elseLink.find('.link5').find('a').text('治疗雀斑要多久');
//		  elseLink.find('.link6').find('a').text('雀斑遗传吗');
//		  break;
//	    case 'jiaoqi':
//		  elseLink.find('.link1').find('a').text('老公脚臭怎么办');
//		  elseLink.find('.link2').find('a').text('女生脚臭怎么办');
//		  elseLink.find('.link3').find('a').text('脚气是什么原因');
//		  elseLink.find('.link4').find('a').text('脚臭是怎么引起的');
//		  elseLink.find('.link5').find('a').text('脚气怎么治疗');
//		  elseLink.find('.link6').find('a').text('脚臭会传染吗');
//		  break;
//	    case 'jiaoqi.html':
//		  elseLink.find('.link1').find('a').text('老公脚臭怎么办');
//		  elseLink.find('.link2').find('a').text('女生脚臭怎么办');
//		  elseLink.find('.link3').find('a').text('脚气是什么原因');
//		  elseLink.find('.link4').find('a').text('脚臭是怎么引起的');
//		  elseLink.find('.link5').find('a').text('脚气怎么治疗');
//		  elseLink.find('.link6').find('a').text('脚臭会传染吗');
//		  break;
//	    case 'pifuguomin':
//		  elseLink.find('.link1').find('a').text('皮肤过敏怎么办');
//		  elseLink.find('.link2').find('a').text('过敏皮肤痒怎么办');
//		  elseLink.find('.link3').find('a').text('治疗皮肤过敏的方法');
//		  elseLink.find('.link4').find('a').text('治疗皮肤过敏多少钱');
//		  elseLink.find('.link5').find('a').text('南宁看过敏医院');
//		  elseLink.find('.link6').find('a').text('过敏性皮肤会遗传吗');
//		  break;
//	    case 'pifuguomin.html':
//		  elseLink.find('.link1').find('a').text('皮肤过敏怎么办');
//		  elseLink.find('.link2').find('a').text('过敏皮肤痒怎么办');
//		  elseLink.find('.link3').find('a').text('治疗皮肤过敏的方法');
//		  elseLink.find('.link4').find('a').text('治疗皮肤过敏多少钱');
//		  elseLink.find('.link5').find('a').text('南宁看过敏医院');
//		  elseLink.find('.link6').find('a').text('过敏性皮肤会遗传吗');
//		  break;
//	    case 'jiuzaobi':
//		  elseLink.find('.link1').find('a').text('如何治疗酒渣鼻');
//		  elseLink.find('.link2').find('a').text('中医如何治疗酒糟鼻');
//		  elseLink.find('.link3').find('a').text('得了酒糟鼻怎么办');
//		  elseLink.find('.link4').find('a').text('治酒糟鼻多少钱');
//		  elseLink.find('.link5').find('a').text('治酒糟鼻要手术吗');
//		  elseLink.find('.link6').find('a').text('酒渣鼻不治会怎么样');
//		  break;
//		default:
//		  elseLink.find('.link1').find('a').text('南宁中山医院怎么样 ');
//		  elseLink.find('.link2').find('a').text('南宁中山医院好不好');
//		  elseLink.find('.link3').find('a').text('南宁中山医院在哪里');
//		  elseLink.find('.link4').find('a').text('中山医院看皮肤科好吗');
//		  elseLink.find('.link5').find('a').text('中山医院是专科医院吗');
//		  elseLink.find('.link6').find('a').text('更多>>');
//		  break;
//	}
});
window.onscroll = scrollTop;
function scrollTop(){
	//gotoTopBottom
	var sTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(sTop>510){
	   $("#returnTopBotton").fadeIn('slow');
	}else{
       $("#returnTopBotton").fadeOut('slow');
	}
} 
/*return top*/
function returnTop(){
    var sTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
	window.scrollBy(0,-200);
	scrolldelay = setTimeout('returnTop()',10);
	if(sTop==0) clearTimeout(scrolldelay);
}
//commentScroll
function click_scroll() {
	$('.blackBg').css("display","block"); 
    var scroll_offset = $("#mySend").offset(); 
	$("body,html").animate({
	   scrollTop:scroll_offset.top 
	},500);
}
//----------------
setInterval('checkS()',1200);
function checkS(){
  if($("#checkS").html()>4){
	 $("#checkS").html(0);
  }
  $("#checkS").html(parseInt($("#checkS").html())+1);
}
function checkComment(){
  if($('#commentUser').val()==''){
	alert('请问怎么称呼您？');
	$('#commentUser').focus();
	return false;
  }
  if($('#commentUser').val().length>20){
	alert('你的名字不得大于20个字符！');
	$('#commentUser').focus();
	return false;
  }
  if($('#commentInfo').val()==''){
	alert('评论内容不得为空！');
	$('#commentInfo').focus();
	return false;
  }
  if($('#commentInfo').val().length>300){
	alert('内容不得大于300个字符！');
	$('#commentInfo').focus();
	return false;
  }
  if($('#default1-score').val()==0){
	alert('请问我们的服务态度怎么样！');
	return false;
  }
  if($('#default3-score').val()==0){
	alert('请问治疗效果对您有帮助吗！');
	return false;
  }
  if($('#commentUser').val()!='' && $('#commentInfo').val()!='' && $('#default1-score').val()!=0 && $('#default3-score').val()!=0){
	alert('评论成功！请等待管理员审核！');
	$('#commentUser').val('');
	$('#commentInfo').val('');
	$('#default1-score').val(0);
	$('#default1-score').val(0);
	$('#default1').find('img').attr('src','/images/star-off.png');
	$('#default2').find('img').attr('src','/images/star-off.png');
	$('#default3').find('img').attr('src','/images/star-off.png');
	$('#mySend').slideToggle();
	$('.blackBg').css("display","none"); 
  }
}