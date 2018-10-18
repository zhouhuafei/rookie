<form action=''>
<INPUT TYPE="submit" value="点击开始创建数据表" name="btn" >
</form>
<?php
include("conn.php");
if(isset($_GET['btn'])){
creattable();
}
function creattable(){
$creatsql2="CREATE TABLE `yyguahao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hzname` varchar(8) NOT NULL,
  `hztel` varchar(20) NOT NULL,
  `hzemail` varchar(50) NOT NULL,
  `sex` varchar(2) NOT NULL,
  `keshi` varchar(25) NOT NULL,
  `theme` varchar(50) NOT NULL,
  `yytime` varchar(25) NOT NULL,
  `doctor` varchar(8) NOT NULL,
  `detail` text NOT NULL,
  `addtime` date NOT NULL,
  `beizhu` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=gbk
";
if(mysql_query($creatsql2)){	
echo "数据表创建成功";
}else
echo "数据表已存在!";
}
?>