//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
function checkForm(){
	  if($('#username').val()==''){
		alert('������ô�ƺ�����');
		$('#username').focus();
		return false;
	  }
	  if($('#username').val().length<2){
		alert('������ֲ���С��2���ַ���');
		$('#username').focus();
		return false;
	  }
	  if($('#username').val().length>20){
		alert('������ֲ��ô���20���ַ���');
		$('#username').focus();
		return false;
	  }
	  var isMobile=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;   
	  var isPhone=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
	  if($('#phone').val()==''){
		alert('����д�绰���룬�Ա���������ȡ����ϵ��');
		$('#phone').focus();
		return false;
	  }
	 if(!isMobile.test($('#phone').val()) && !isPhone.test($('#phone').val())){
		alert("����ȷ��д�绰���룬����:134xxxx1234��021-4815xxx");
		return false;
	 }
	  if($('#content').val()==''){
		alert('�������ݲ���Ϊ�գ�');
		$('#content').focus();
		return false;
	  }
	  if($('#content').val().length>200){
		alert('���ݲ��ô���200���ַ���');
		$('#content').focus();
		return false;
	  }
	  return true;
}

