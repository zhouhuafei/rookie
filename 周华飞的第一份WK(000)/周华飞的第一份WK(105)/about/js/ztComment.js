
document.writeln('<link rel="stylesheet" type="text/css" href="/zt/ztComment/style/pfZtComment.css"/>');
document.writeln('<script type="text/javascript" src="/zt/ztComment/js/jquery.raty.min.js"></script>');
document.writeln('<script type="text/javascript" src="/zt/ztComment/js/pfZtComment.js"></script>');
document.writeln('<div id="fkShow">');
document.writeln('  <p><span>总评：</span><img src="/zt/ztComment/images/wujx.png"/></p>');
document.writeln('  <p><span>服务满意度：</span><em>4.9</em></p>');
document.writeln('  <p><span>环境满意度：</span><em>4.9</em></p>');
document.writeln('  <p><span>疗效满意度：</span><em>5.0</em></p>');
document.writeln('  <p><a href="javascript:void(0);" id="clickBtn" onClick="mySendShow();">我要评论</a></p>');
document.writeln('</div>');
document.writeln('<div class="clear"></div>');
document.writeln('<div id="ztContent"></div>');
document.writeln('<div id="page"></div>');
document.writeln('<div id="pp_num" style="display:none"></div>');
document.writeln('<div id="mySend">');
document.writeln('   <div class="close">X</div>');
document.writeln('   <form method="post" name="comment">');
document.writeln('	   <table cellspacing="0">');
document.writeln('		 <tr><th>我要评论</th></tr>');
document.writeln('		 <tr><td>姓名：<input type="text" name="user" class="text"/></td></tr>');
document.writeln('		 <tr><td><div class="middle">内容：</div><textarea name="info"></textarea></td></tr>');
document.writeln('		 <tr><td><div class="sc">服务：</div><div id="default1" class="default"></div></td></tr>');
document.writeln('		 <tr><td><div class="sc">疗效：</div><div id="default3" class="default"></div></td></tr>');
document.writeln('		 <tr><td><div class="sc">环境：</div><div id="default2" class="default"></div></td></tr>');
document.writeln('		 <tr><td><input type="button" onClick="checkComment();"  name="send" class="btn" value="提交评论"/><input type="button" class="btn btnClose" value="取消"/></td></tr>');
document.writeln('	   </table>');
document.writeln('   </form>');
document.writeln('</div>');
document.writeln('<div class="blackBg"></div>');