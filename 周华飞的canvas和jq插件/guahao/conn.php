<?php
include("../include/common.inc.php");
$conn = @mysql_connect($cfg_dbhost, $cfg_dbuser, $cfg_dbpwd) or die("���ݿ����Ӵ���");
mysql_select_db($cfg_dbname, $conn);
mysql_query("set names '$cfg_db_language'"); //ʹ��GBK���ı���;
?>

