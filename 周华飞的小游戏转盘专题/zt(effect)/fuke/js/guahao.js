// JavaScript Document
function checkForm(){
	  if($('#username').val()==''){
		alert('请问怎么称呼您？');
		$('#username').focus();
		return false;
	  }
	  if($('#username').val().length<2){
		alert('你的名字不得小于2个字符！');
		$('#username').focus();
		return false;
	  }
	  if($('#username').val().length>20){
		alert('你的名字不得大于20个字符！');
		$('#username').focus();
		return false;
	  }
	  var isMobile=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;   
	  var isPhone=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
	  if($('#phone').val()==''){
		alert('请填写电话号码，以便我们与你取得联系！');
		$('#phone').focus();
		return false;
	  }
	 if(!isMobile.test($('#phone').val()) && !isPhone.test($('#phone').val())){
		alert("请正确填写电话号码，例如:134xxxx1234或021-4815xxx");
		return false;
	 }
	
	  return true;
}