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
			comment+='		 <li class="name">�û���<span>'+result[key]['name']+'</span></li>';
			comment+='		 <li class="score">���֣�<span>5��</span></li>';
			comment+='		 <li class="praise">[<em id="ajax_'+num+'">'+result[key]['num']+'</em>]<span onclick="ajax_num('+result[key]['id']+', '+num+')">[��]</span></li>';
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
	  default1.setAttribute('name','srvice');//����
	  var default2=document.getElementById('default2-score');
	  default2.setAttribute('name','environment');//����
	  var default3=document.getElementById('default3-score');
	  default3.setAttribute('name','effect');//��Ч
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
//		  elseLink.find('.link1').find('a').text('����������εĺ���');
//		  elseLink.find('.link2').find('a').text('�����κú���а̺���');
//		  elseLink.find('.link3').find('a').text('�������ƶ���Ǯ');
//		  elseLink.find('.link4').find('a').text('��������ҪסԺ��');
//		  elseLink.find('.link5').find('a').text('ʮ����İ���֢״������');
//		  elseLink.find('.link6').find('a').text('������Ŵ���');
//		  break;
//	    case 'baidianfeng.html':
//		  elseLink.find('.link1').find('a').text('����������εĺ���');
//		  elseLink.find('.link2').find('a').text('�����κú���а̺���');
//		  elseLink.find('.link3').find('a').text('�������ƶ���Ǯ');
//		  elseLink.find('.link4').find('a').text('��������ҪסԺ��');
//		  elseLink.find('.link5').find('a').text('ʮ����İ���֢״������');
//		  elseLink.find('.link6').find('a').text('������Ŵ���');
//		  break; 
//	    case 'niupixuan':
//		  elseLink.find('.link1').find('a').text('����ţƤѢ��ô��');
//		  elseLink.find('.link2').find('a').text('ţƤѢ�����κ���');
//		  elseLink.find('.link3').find('a').text('ţƤѢ����Ҫ����Ǯ');
//		  elseLink.find('.link4').find('a').text('ţƤѢ����Ҫ���');
//		  elseLink.find('.link5').find('a').text('ţƤѢ���Ŵ���');
//		  elseLink.find('.link6').find('a').text('ţƤѢ�κú��а̺���');
//		  break;
//	    case 'niupixuan.html':
//		  elseLink.find('.link1').find('a').text('����ţƤѢ��ô��');
//		  elseLink.find('.link2').find('a').text('ţƤѢ�����κ���');
//		  elseLink.find('.link3').find('a').text('ţƤѢ����Ҫ����Ǯ');
//		  elseLink.find('.link4').find('a').text('ţƤѢ����Ҫ���');
//		  elseLink.find('.link5').find('a').text('ţƤѢ���Ŵ���');
//		  elseLink.find('.link6').find('a').text('ţƤѢ�κú��а̺���');
//		  break;
//	    case 'yulinbing':
//		  elseLink.find('.link1').find('a').text('���۲�������');
//		  elseLink.find('.link2').find('a').text('���۲�֢״���κ���');
//		  elseLink.find('.link3').find('a').text('���۲������ǲ��Ǻܹ�');
//		  elseLink.find('.link4').find('a').text('���۲�����Ҫ���ʱ��');
//		  elseLink.find('.link5').find('a').text('���۲��κú���а̺���');
//		  elseLink.find('.link6').find('a').text('���۲����Ŵ���');
//		  break;
//	    case 'qianmazhen':
//		  elseLink.find('.link1').find('a').text('ݡ���������');
//		  elseLink.find('.link2').find('a').text('ݡ�����κú���а̺���');
//		  elseLink.find('.link3').find('a').text('ݡ����ܳ�ʲô');
//		  elseLink.find('.link4').find('a').text('ݡ�������ƹ󲻹�');
//		  elseLink.find('.link5').find('a').text('ݡ����ᴫȾ��');
//		  elseLink.find('.link6').find('a').text('ݡ�����������ô��');
//		  break;
//	    case 'qingchundou':
//		  elseLink.find('.link1').find('a').text('�ഺ��������');
//		  elseLink.find('.link2').find('a').text('��������������ô��');
//		  elseLink.find('.link3').find('a').text('�ഺ�����ƶ���Ǯ');
//		  elseLink.find('.link4').find('a').text('�����κú�����̺���');
//		  elseLink.find('.link5').find('a').text('���ƶ���Ҫ�೤ʱ��');
//		  elseLink.find('.link6').find('a').text('������ô����');
//		  break;
//	    case 'qingchundou.html':
//		  elseLink.find('.link1').find('a').text('�ഺ��������');
//		  elseLink.find('.link2').find('a').text('��������������ô��');
//		  elseLink.find('.link3').find('a').text('�ഺ�����ƶ���Ǯ');
//		  elseLink.find('.link4').find('a').text('�����κú�����̺���');
//		  elseLink.find('.link5').find('a').text('���ƶ���Ҫ�೤ʱ��');
//		  elseLink.find('.link6').find('a').text('������ô����');
//		  break;
//	    case 'tuofa':
//		  elseLink.find('.link1').find('a').text('�ѷ�������');
//		  elseLink.find('.link2').find('a').text('�ѷ��Ǽ����Ե���');
//		  elseLink.find('.link3').find('a').text('�ѷ����ƶ���Ǯ');
//		  elseLink.find('.link4').find('a').text('�ѷ��᲻���Ŵ�');
//		  elseLink.find('.link5').find('a').text('�ѷ�����Ҫ���ʱ��');
//		  elseLink.find('.link6').find('a').text('�����ѷ���ԭ��');
//		  break;
//	    case 'tuofa.html':
//		  elseLink.find('.link1').find('a').text('�ѷ�������');
//		  elseLink.find('.link2').find('a').text('�ѷ��Ǽ����Ե���');
//		  elseLink.find('.link3').find('a').text('�ѷ����ƶ���Ǯ');
//		  elseLink.find('.link4').find('a').text('�ѷ��᲻���Ŵ�');
//		  elseLink.find('.link5').find('a').text('�ѷ�����Ҫ���ʱ��');
//		  elseLink.find('.link6').find('a').text('�����ѷ���ԭ��');
//		  break;
//	    case 'shizhen':
//		  elseLink.find('.link1').find('a').text('ʪ�������');
//		  elseLink.find('.link2').find('a').text('ʪ���κú���û�а̺�');
//		  elseLink.find('.link3').find('a').text('ʪ���������ô��');
//		  elseLink.find('.link4').find('a').text('ʪ������Ҫ����Ǯ');
//		  elseLink.find('.link5').find('a').text('ʪ��ܳ�ʲô');
//		  elseLink.find('.link6').find('a').text('ʪ��ᴫȾ��');
//		  break;
//	    case 'shizhen.html':
//		  elseLink.find('.link1').find('a').text('ʪ�������');
//		  elseLink.find('.link2').find('a').text('ʪ���κú���û�а̺�');
//		  elseLink.find('.link3').find('a').text('ʪ���������ô��');
//		  elseLink.find('.link4').find('a').text('ʪ������Ҫ����Ǯ');
//		  elseLink.find('.link5').find('a').text('ʪ��ܳ�ʲô');
//		  elseLink.find('.link6').find('a').text('ʪ��ᴫȾ��');
//		  break;
//	    case 'piyan':
//		  elseLink.find('.link1').find('a').text('Ƥ�׺�����');
//		  elseLink.find('.link2').find('a').text('Ƥ�����ƶ���Ǯ');
//		  elseLink.find('.link3').find('a').text('����Ƥ�׵�ԭ��');
//		  elseLink.find('.link4').find('a').text('Ƥ�׷���������ô��');
//		  elseLink.find('.link5').find('a').text('Ƥ������Ҫ�೤ʱ��');
//		  elseLink.find('.link6').find('a').text('Ƥ�ײ��ܳ�ʲô');
//		  break;
//	    case 'piyan.html':
//		  elseLink.find('.link1').find('a').text('Ƥ�׺�����');
//		  elseLink.find('.link2').find('a').text('Ƥ�����ƶ���Ǯ');
//		  elseLink.find('.link3').find('a').text('����Ƥ�׵�ԭ��');
//		  elseLink.find('.link4').find('a').text('Ƥ�׷���������ô��');
//		  elseLink.find('.link5').find('a').text('Ƥ������Ҫ�೤ʱ��');
//		  elseLink.find('.link6').find('a').text('Ƥ�ײ��ܳ�ʲô');
//		  break;
//	    case 'bahen':
//		  elseLink.find('.link1').find('a').text('�̺ۺ�����');
//		  elseLink.find('.link2').find('a').text('�̺����ƶ���Ǯ');
//		  elseLink.find('.link3').find('a').text('�̺�������һ����������');
//		  elseLink.find('.link4').find('a').text('�̺��κú���Ŀ���������');
//		  elseLink.find('.link5').find('a').text('�̺�����Ҫ�೤ʱ��');
//		  elseLink.find('.link6').find('a').text('ʮ����İ̺ۿ����κ���');
//		  break;
//	    case 'huizhijia':
//		  elseLink.find('.link1').find('a').text('��ָ����һ�����εĺ���');
//		  elseLink.find('.link2').find('a').text('��ָ�׻��໥��Ⱦ��');
//		  elseLink.find('.link3').find('a').text('��ָ�����ƶ���Ǯ');
//		  elseLink.find('.link4').find('a').text('��ָ��������Ҫ�೤ʱ��');
//		  elseLink.find('.link5').find('a').text('��ָ�׻��Ŵ���');
//		  elseLink.find('.link6').find('a').text('��ָ�ײ��λ���ô��');
//		  break;
//	    case 'maonangyan':
//		  elseLink.find('.link1').find('a').text('ë������ô����');
//		  elseLink.find('.link2').find('a').text('ë���׵�ԭ��');
//		  elseLink.find('.link3').find('a').text('ë���׵�֢״������');
//		  elseLink.find('.link4').find('a').text('ë���׶೤ʱ���ܺ�');
//		  elseLink.find('.link5').find('a').text('ë���׻᲻�ᴫȾ');
//		  elseLink.find('.link6').find('a').text('ë���ײ��λ���ô��');
//		  break;
//	    case 'maonangyan.html':
//		  elseLink.find('.link1').find('a').text('ë������ô����');
//		  elseLink.find('.link2').find('a').text('ë���׵�ԭ��');
//		  elseLink.find('.link3').find('a').text('ë���׵�֢״������');
//		  elseLink.find('.link4').find('a').text('ë���׶೤ʱ���ܺ�');
//		  elseLink.find('.link5').find('a').text('ë���׻᲻�ᴫȾ');
//		  elseLink.find('.link6').find('a').text('ë���ײ��λ���ô��');
//		  break;
//	    case 'huangheban':
//		  elseLink.find('.link1').find('a').text('���ϳ��˻ƺְ�');
//		  elseLink.find('.link2').find('a').text('��ʲô����ȥ��');
//		  elseLink.find('.link3').find('a').text('�ƺְ�����Ҫ���');
//		  elseLink.find('.link4').find('a').text('�ƺְ�����Ҫ����Ǯ');
//		  elseLink.find('.link5').find('a').text('�ƺְ�ȥ�����ĸ�ҽԺ����');
//		  elseLink.find('.link6').find('a').text('�ƺְ߻��Ŵ���');
//		  break;
//	    case 'huangheban.html':
//		  elseLink.find('.link1').find('a').text('���ϳ��˻ƺְ�');
//		  elseLink.find('.link2').find('a').text('��ʲô����ȥ��');
//		  elseLink.find('.link3').find('a').text('�ƺְ�����Ҫ���');
//		  elseLink.find('.link4').find('a').text('�ƺְ�����Ҫ����Ǯ');
//		  elseLink.find('.link5').find('a').text('�ƺְ�ȥ�����ĸ�ҽԺ����');
//		  elseLink.find('.link6').find('a').text('�ƺְ߻��Ŵ���');
//		  break;
//	    case 'bianpingyou':
//		  elseLink.find('.link1').find('a').text('����ȥ��ƽ��');
//		  elseLink.find('.link2').find('a').text('�������Ʊ�ƽ��');
//		  elseLink.find('.link3').find('a').text('���Ʊ�ƽ��Ҫ����Ǯ');
//		  elseLink.find('.link4').find('a').text('���Ʊ�ƽ��Ҫ���');
//		  elseLink.find('.link5').find('a').text('��ƽ��ᴫȾ��');
//		  elseLink.find('.link6').find('a').text('��ƽ������ô�õ�');
//		  break;
//	    case 'pifuxuan':
//		  elseLink.find('.link1').find('a').text('����Ѣ�ܸ�����');
//		  elseLink.find('.link2').find('a').text('��Ѣ�κú�Ḵ����');
//		  elseLink.find('.link3').find('a').text('Ƥ��Ѣ����Ҫ�೤ʱ��');
//		  elseLink.find('.link4').find('a').text('Ƥ��Ѣ���ܳ�ʲô');
//		  elseLink.find('.link5').find('a').text('Ƥ��Ѣ�ᴫȾ��');
//		  elseLink.find('.link6').find('a').text('Ƥ��Ѣ���ƶ���Ǯ');
//		  break;
//	    case 'jiechuang':
//		  elseLink.find('.link1').find('a').text('�괯����ԭ��');
//		  elseLink.find('.link2').find('a').text('רҵ�ν괯ҽԺ');
//		  elseLink.find('.link3').find('a').text('�괯����������');
//		  elseLink.find('.link4').find('a').text('�괯����ܺ�');
//		  elseLink.find('.link5').find('a').text('�괯���ƶ���Ǯ');
//		  elseLink.find('.link6').find('a').text('�괯��Ⱦ��');
//		  break;
//	    case 'jiechuang.html':
//		  elseLink.find('.link1').find('a').text('�괯����ԭ��');
//		  elseLink.find('.link2').find('a').text('רҵ�ν괯ҽԺ');
//		  elseLink.find('.link3').find('a').text('�괯����������');
//		  elseLink.find('.link4').find('a').text('�괯����ܺ�');
//		  elseLink.find('.link5').find('a').text('�괯���ƶ���Ǯ');
//		  elseLink.find('.link6').find('a').text('�괯��Ⱦ��');
//		  break;
//	    case 'queban':
//		  elseLink.find('.link1').find('a').text('ȥȸ�ߵķ���');
//		  elseLink.find('.link2').find('a').text('���ϳ�ȸ����ô��');
//		  elseLink.find('.link3').find('a').text('ȸ����ô����');
//		  elseLink.find('.link4').find('a').text('�����������ȸ��');
//		  elseLink.find('.link5').find('a').text('����ȸ��Ҫ���');
//		  elseLink.find('.link6').find('a').text('ȸ���Ŵ���');
//		  break;
//	    case 'queban.html':
//		  elseLink.find('.link1').find('a').text('ȥȸ�ߵķ���');
//		  elseLink.find('.link2').find('a').text('���ϳ�ȸ����ô��');
//		  elseLink.find('.link3').find('a').text('ȸ����ô����');
//		  elseLink.find('.link4').find('a').text('�����������ȸ��');
//		  elseLink.find('.link5').find('a').text('����ȸ��Ҫ���');
//		  elseLink.find('.link6').find('a').text('ȸ���Ŵ���');
//		  break;
//	    case 'jiaoqi':
//		  elseLink.find('.link1').find('a').text('�Ϲ��ų���ô��');
//		  elseLink.find('.link2').find('a').text('Ů���ų���ô��');
//		  elseLink.find('.link3').find('a').text('������ʲôԭ��');
//		  elseLink.find('.link4').find('a').text('�ų�����ô�����');
//		  elseLink.find('.link5').find('a').text('������ô����');
//		  elseLink.find('.link6').find('a').text('�ų��ᴫȾ��');
//		  break;
//	    case 'jiaoqi.html':
//		  elseLink.find('.link1').find('a').text('�Ϲ��ų���ô��');
//		  elseLink.find('.link2').find('a').text('Ů���ų���ô��');
//		  elseLink.find('.link3').find('a').text('������ʲôԭ��');
//		  elseLink.find('.link4').find('a').text('�ų�����ô�����');
//		  elseLink.find('.link5').find('a').text('������ô����');
//		  elseLink.find('.link6').find('a').text('�ų��ᴫȾ��');
//		  break;
//	    case 'pifuguomin':
//		  elseLink.find('.link1').find('a').text('Ƥ��������ô��');
//		  elseLink.find('.link2').find('a').text('����Ƥ������ô��');
//		  elseLink.find('.link3').find('a').text('����Ƥ�������ķ���');
//		  elseLink.find('.link4').find('a').text('����Ƥ����������Ǯ');
//		  elseLink.find('.link5').find('a').text('����������ҽԺ');
//		  elseLink.find('.link6').find('a').text('������Ƥ�����Ŵ���');
//		  break;
//	    case 'pifuguomin.html':
//		  elseLink.find('.link1').find('a').text('Ƥ��������ô��');
//		  elseLink.find('.link2').find('a').text('����Ƥ������ô��');
//		  elseLink.find('.link3').find('a').text('����Ƥ�������ķ���');
//		  elseLink.find('.link4').find('a').text('����Ƥ����������Ǯ');
//		  elseLink.find('.link5').find('a').text('����������ҽԺ');
//		  elseLink.find('.link6').find('a').text('������Ƥ�����Ŵ���');
//		  break;
//	    case 'jiuzaobi':
//		  elseLink.find('.link1').find('a').text('������ƾ�����');
//		  elseLink.find('.link2').find('a').text('��ҽ������ƾ����');
//		  elseLink.find('.link3').find('a').text('���˾������ô��');
//		  elseLink.find('.link4').find('a').text('�ξ���Ƕ���Ǯ');
//		  elseLink.find('.link5').find('a').text('�ξ����Ҫ������');
//		  elseLink.find('.link6').find('a').text('�����ǲ��λ���ô��');
//		  break;
//		default:
//		  elseLink.find('.link1').find('a').text('������ɽҽԺ��ô�� ');
//		  elseLink.find('.link2').find('a').text('������ɽҽԺ�ò���');
//		  elseLink.find('.link3').find('a').text('������ɽҽԺ������');
//		  elseLink.find('.link4').find('a').text('��ɽҽԺ��Ƥ���ƺ���');
//		  elseLink.find('.link5').find('a').text('��ɽҽԺ��ר��ҽԺ��');
//		  elseLink.find('.link6').find('a').text('����>>');
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
	alert('������ô�ƺ�����');
	$('#commentUser').focus();
	return false;
  }
  if($('#commentUser').val().length>20){
	alert('������ֲ��ô���20���ַ���');
	$('#commentUser').focus();
	return false;
  }
  if($('#commentInfo').val()==''){
	alert('�������ݲ���Ϊ�գ�');
	$('#commentInfo').focus();
	return false;
  }
  if($('#commentInfo').val().length>300){
	alert('���ݲ��ô���300���ַ���');
	$('#commentInfo').focus();
	return false;
  }
  if($('#default1-score').val()==0){
	alert('�������ǵķ���̬����ô����');
	return false;
  }
  if($('#default3-score').val()==0){
	alert('��������Ч�������а�����');
	return false;
  }
  if($('#commentUser').val()!='' && $('#commentInfo').val()!='' && $('#default1-score').val()!=0 && $('#default3-score').val()!=0){
	alert('���۳ɹ�����ȴ�����Ա��ˣ�');
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