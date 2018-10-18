<?php
include("../include/common.inc.php");
$conn = @mysql_connect($cfg_dbhost, $cfg_dbuser, $cfg_dbpwd) or die("数据库链接错误");
mysql_select_db($cfg_dbname, $conn);
mysql_query("set names '$cfg_db_language'"); //使用GBK中文编码;
?>

