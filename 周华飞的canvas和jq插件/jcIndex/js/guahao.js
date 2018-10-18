/**
 * Created by Administrator on 2016/1/9.
 */
document.writeln("<style>");
document.writeln("/*clearFix*/");
document.writeln(".clearFix {");
document.writeln("  clear: both;");
document.writeln("  *zoom: 1;");
document.writeln("}");
document.writeln(".clearFix:after {");
document.writeln("  clear: both;");
document.writeln("  display: block;");
document.writeln("  visibility: hidden;");
document.writeln("  height: 0;");
document.writeln("  line-height: 0;");
document.writeln("  content: \"\";");
document.writeln("  font-size: 0;");
document.writeln("}");
document.writeln("/*common*/");
document.writeln(".fl {");
document.writeln("  float: left;");
document.writeln("}");
document.writeln(".fr {");
document.writeln("  float: right;");
document.writeln("}");
document.writeln("/*guahao*/");
document.writeln("#guahao {");
document.writeln("  margin: 0 auto;");
document.writeln("  font-size: 12px;");
document.writeln("  color: #2b2b2b;");
document.writeln("  word-spacing: 30px;");
document.writeln("}");
document.writeln("#guahao em,");
document.writeln("#guahao span {");
document.writeln("  display: inline-block;");
document.writeln("  font-size: 14px;");
document.writeln("}");
document.writeln("#guahao input,");
document.writeln("#guahao textarea {");
document.writeln("  background: #ffffff;");
document.writeln("  border: 1px solid #c9c9c9;");
document.writeln("  width: 144px;");
document.writeln("  height: 14px;");
document.writeln("  padding: 5px 5px;");
document.writeln("  border-radius: 5px;");
document.writeln("}");
document.writeln("#guahao .sex input {");
document.writeln("  width: auto;");
document.writeln("  margin: 0 2px 0 6px;");
document.writeln("  vertical-align: middle;");
document.writeln("}");
document.writeln("#guahao h2 {");
document.writeln("  height: 26px;");
document.writeln("  line-height: 26px;");
document.writeln("  margin-bottom: 10px;");
document.writeln("}");
document.writeln("#guahao .sex-age-tel {");
document.writeln("  margin-left: 40px;");
document.writeln("}");
document.writeln("#guahao .age {");
document.writeln("  margin-left: 30px;");
document.writeln("}");
document.writeln("#guahao .age span {");
document.writeln("  width: auto;");
document.writeln("}");
document.writeln("#guahao .age input {");
document.writeln("  width: 50px;");
document.writeln("}");
document.writeln("#guahao .tel input {");
document.writeln("  width: 192px;");
document.writeln("}");
document.writeln("#guahao span {");
document.writeln("  width: 70px;");
document.writeln("}");
document.writeln("#guahao dl {");
document.writeln("  position: relative;");
document.writeln("}");
document.writeln("#guahao dl dt {");
document.writeln("  padding: 20px 0 40px;");
document.writeln("}");
document.writeln("#guahao dl dd.guahao-title.guahao-red {");
document.writeln("  color: #d10000;");
document.writeln("}");
document.writeln("#guahao dl dd.guahao-title.guahao-green {");
document.writeln("  color: #0067b7;");
document.writeln("}");
document.writeln("#guahao textarea {");
document.writeln("  width: 610px;");
document.writeln("  height: 115px;");
document.writeln("  font-size: 14px;");
document.writeln("}");
document.writeln("#guahao .description {");
document.writeln("  height: auto;");
document.writeln("  margin-bottom: 0;");
document.writeln("}");
document.writeln("#guahao .description span {");
document.writeln("  vertical-align: top;");
document.writeln("}");
document.writeln("#guahao .guahao-main{");
document.writeln("  margin:30px 0 0 15px;");
document.writeln("}");
document.writeln("#guahao .fl img{");
document.writeln("  margin-bottom:26px;");
document.writeln("}");
document.writeln("#guahao .fr {");
document.writeln("  width: 213px;");
document.writeln("  height: 320px;");
document.writeln("  position:relative;");
document.writeln("  padding:30px 10px 0;");
document.writeln("  background:#f3f3f3;");
document.writeln("}");
document.writeln("#guahao .fr:after {");
document.writeln("  content:\'\';");
document.writeln("  display:block;");
document.writeln("  position:absolute;");
document.writeln("  width:0;");
document.writeln("  height:0;");
document.writeln("  left:-20px;");
document.writeln("  top:50%;");
document.writeln("  margin-top:-10px;");
document.writeln("  border:10px solid transparent;");
document.writeln("  border-right-color:#f3f3f3;");
document.writeln("}");
document.writeln("#guahao .fr p{");
document.writeln("  text-align: center;");
document.writeln("  margin: 10px auto 30px;");
document.writeln("}");
document.writeln("#guahao .fr em {");
document.writeln("  color: #6e6e6e;");
document.writeln("  font-size: 14px;");
document.writeln("  line-height: 20px;");
document.writeln("  padding-top: 35px;");
document.writeln("  text-align: justify;");
document.writeln("}");
document.writeln("#guahao .fr input {");
document.writeln("  width: 190px;");
document.writeln("  display: block;");
document.writeln("  margin: 0 auto;");
document.writeln("  height: 60px;");
document.writeln("  background: #ff7800;");
document.writeln("  font-size: 24px;");
document.writeln("  font-weight: bold;");
document.writeln("  color: #ffffff;");
document.writeln("  border: none;");
document.writeln("  cursor: pointer;");
document.writeln("}");
document.writeln("#guahao #time {");
document.writeln("  background: url(\"images/guahao-time.jpg\") 132px center no-repeat;");
document.writeln("}");
document.writeln("</style>");


document.writeln("                <link rel=\"stylesheet\" href=\"/guahao/laydate/need/laydate.css\"/>");
document.writeln("                <div id=\"guahao\">");
document.writeln("                        <dl>");
document.writeln("                                <dd>");
document.writeln("                                        <form name=\"fm\" method=\"post\" action=\"http://swt.gssmart.com/guahao/sockt.php\">");
document.writeln("                                                <div class=\"clearFix\">");
document.writeln("                                                        <div class=\"fl guahao-main\">");
document.writeln("                                                                <img src=\"images/guahao-main.jpg\" />");
document.writeln("                                                                <div class=\"clearFix\">");
document.writeln("                                                                        <div class=\"fl\">");
document.writeln("                                                                                <h2><label><span>姓名：</span><input type=\"text\" name=\"名称\" id=\"username\" placeholder=\"请输入您的姓名\"/></label></h2>");
document.writeln("                                                                                <h2><label><span>就诊时间：</span><input type=\"text\" name=\"time\" id=\"time\" placeholder=\"请选择您的就诊时间\"/></label></h2>");
document.writeln("                                                                        </div>");
document.writeln("                                                                        <div class=\"fl sex-age-tel\">");
document.writeln("                                                                                <div class=\"clearFix\">");
document.writeln("                                                                                        <h2 class=\"fl sex\"><span>性别：</span><label><input type=\"radio\" name=\"sex\"/>男</label><label><input type=\"radio\" name=\"sex\"/>女</label></h2>");
document.writeln("                                                                                        <h2 class=\"fl age\"><label><span>年龄：</span><input type=\"text\" name=\"age\" id=\"age\" placeholder=\"年龄\"/></label></h2>");
document.writeln("                                                                                </div>");
document.writeln("                                                                                <h2 class=\"tel\"><label><span>联系电话：</span><input type=\"text\" name=\"电话\" id=\"phone\" placeholder=\"请输入您的电话号码\"/></label></h2>");
document.writeln("                                                                        </div>");
document.writeln("                                                                </div>");
document.writeln("                                                                <h2 class=\"description\"><label><span>病情描述：</span><textarea cols=\"30\" rows=\"10\" name=\"病情描述\" id=\"content\" placeholder=\"请输入不适症状和治疗经过、既往疾病、想获得什么样的帮助等，方便医生匹配精准对症的专家，如有意向医院或医生，请您补充（请输入10-200个字）\"></textarea></label></h2>");
document.writeln("                                                        </div>");
document.writeln("                                                        <div class=\"fr\">");
document.writeln("                                                                <img src=\"images/guahao-side.png\" />");
document.writeln("                                                                <p>积极响应国家\"网上预约挂号\"政策</p>");
document.writeln("                                                                <input type=\"submit\" name=\"send\" value=\"提交预约\"/>");
document.writeln("                                                                <em>预约成功患者，系统会将专家号和医院地址下发到您的手机，请注意查收</em>");
document.writeln("                                                        </div>");
document.writeln("                                                </div>");
document.writeln("                                        </form>");
document.writeln("                                </dd>");
document.writeln("                        </dl>");
document.writeln("                </div>");
document.writeln("                <script type=\"text/javascript\" src=\"/guahao/laydate/laydate.js\"></script>");
document.writeln("                <script type=\"text/javascript\" src=\"/guahao/js/js.js\"></script>");