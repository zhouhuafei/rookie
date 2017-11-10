<?php	
	include("conn.php");
	$name = $_REQUEST["name"];
	$tel = $_REQUEST["tel"];
	$description = $_REQUEST["description"];
	
	
	$smsql="REPLACE INTO yyguahao(`hzname`,`hztel`,`detail`)
				values ('".$name."','".$tel."','".$description."')";
				
	mysql_query("set names gbk");
	if(!isset($_POST['send'])||$_POST['send']!='提交预约'){
		header('Location:/guahao/');
		exit;
		}
	
	$result = mysql_query($smsql) or die("");
	if($result)
	{
		echo "<script>alert('预约成功');location.href='/'</script>";
	}else{
		echo "<script>alert('网络繁忙，请稍后重试');location.href='/guahao/'</script>";
		}
?> 