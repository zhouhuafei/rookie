<?php	
	include("conn.php");
	$name = $_REQUEST["name"];
	$tel = $_REQUEST["tel"];
	$description = $_REQUEST["description"];
	
	
	$smsql="REPLACE INTO yyguahao(`hzname`,`hztel`,`detail`)
				values ('".$name."','".$tel."','".$description."')";
				
	mysql_query("set names gbk");
	if(!isset($_POST['send'])||$_POST['send']!='�ύԤԼ'){
		header('Location:/guahao/');
		exit;
		}
	
	$result = mysql_query($smsql) or die("");
	if($result)
	{
		echo "<script>alert('ԤԼ�ɹ�');location.href='/'</script>";
	}else{
		echo "<script>alert('���緱æ�����Ժ�����');location.href='/guahao/'</script>";
		}
?> 