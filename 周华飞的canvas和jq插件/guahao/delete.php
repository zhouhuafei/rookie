<?php
include("conn.php");
if(strpos($_GET['id'],",")===false)
{
	$delsql="delete from yyguahao where id='{$_GET['id']}'";
	mysql_query($delsql);
}
else
{
	$tempArray = array();
	$tempArray = split(",",$_GET['id']);
	$i=0;
	$count=count($tempArray);
	for($i;$i<$count;$i++)
	{
		$delsql="delete from yyguahao where id='$tempArray[$i]'";
		mysql_query($delsql);
	}
}
echo "<script>alert('É¾³ý³É¹¦');history.go(-1);window.parent.JumpFrame('index_menu.php','show_guahao.php');</script>";
?>