<?php	
   
	header("Content-Type: text/html; charset=gb2312");   
	include("conn.php");
	
	$name = mb_convert_encoding($_POST["name"],'gbk','utf-8');
	$tel = mb_convert_encoding($_POST["tel"],'gbk','utf-8');
	$time = mb_convert_encoding($_POST["time"],'gbk','utf-8');
	$description = mb_convert_encoding($_POST["description"],'gbk','utf-8');
	$ourl=mb_convert_encoding($_POST["ourl"],'gbk','utf-8');
	
	$smsql="INSERT INTO yyguahao(`hzname`,`hztel`,`detail`,`yytime`,`keshi`)
				values ('".$name."','".$tel."','".$description."','".$time."','".$ourl."')";
		
	mysql_query("set names gbk");
	
	$result = mysql_query($smsql) or die("");	
	
	 if($result)
	 {
			echo '1';
	 }else{
			echo '0';
	 } 
	 
	
	

?> 