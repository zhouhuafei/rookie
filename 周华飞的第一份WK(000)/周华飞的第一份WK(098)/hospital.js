// JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
document.writeln("<style>");
document.writeln("/*hospitalMain*/");
document.writeln("#hospitalMain ul{ width:810px; height:385px;}");
document.writeln("#hospitalMain ul li{ width:810px; height:100%; display:none;}");
document.writeln("#hospitalMain ul .active{ display:block;}");
document.writeln("#hospitalMain ul .word{ height:100%; width:345px; padding:0 20px; position:relative; color:#444444; background:#f4f4f4;}");
document.writeln("#hospitalMain ul .img{ width:425px; height:385px; overflow:hidden; background:#ccc;}");
document.writeln("#hospitalMain ul h2{ margin:35px 0; font-size:26px;}");
document.writeln("#hospitalMain ul p{ text-indent:30px; font-size:14px;}");
document.writeln("#hospitalMain ul .hospitalBtn{ position:absolute; right:20px; bottom:20px;}");
document.writeln("#hospitalMain ul .hospitalBtn a{ display:inline-block; width:38px; height:38px; margin-right:10px;}");
document.writeln("#hospitalMain ul .hospitalBtn .detail{ background:url(images/hospitalIcon.png) -36px -455px no-repeat;}");
document.writeln("#hospitalMain ul .hospitalBtn .detail:hover{ background:url(images/hospitalIcon.png) -36px -508px no-repeat;}");
document.writeln("#hospitalMain ul .hospitalBtn .consult{ background:url(images/hospitalIcon.png) -36px -562px no-repeat; margin-right:0px;}");
document.writeln("#hospitalMain ul .hospitalBtn .consult:hover{ background:url(images/hospitalIcon.png) -36px -617px no-repeat;}");
document.writeln("#hospitalMain ol{ width:170px;}");
document.writeln("#hospitalMain ol li{ text-align:center; height:60px; line-height:60px; background:#ebebeb; font-size:18px; color:#6a6a6a; position:relative; margin-bottom:5px; cursor:pointer;}");
document.writeln("#hospitalMain ol .active{ background:#006db8; color:#fff;}");
document.writeln("#hospitalMain ol em{ display:inline-block; vertical-align:middle; width:35px; height:35px; margin-right:10px; background:url(images/hospitalIcon.png) -36px -36px no-repeat; transition:0.4s;}");
document.writeln("#hospitalMain ol div{ width:10px; height:20px; background:url(images/three.png); opacity:0; filter:alpha(opacity:0); position:absolute; left:-10px; top:20px; transition:0.4s;}");
document.writeln("#hospitalMain ol .active div{ opacity:1; filter:alpha(opacity:100);}");
document.writeln("#hospitalMain ol .hospitalEm1{ background-position: -36px 0px;}");
document.writeln("#hospitalMain ol .hospitalEm2{ background-position: -36px -72px;}");
document.writeln("#hospitalMain ol .hospitalEm3{ background-position: -36px -145px;}");
document.writeln("#hospitalMain ol .hospitalEm4{ background-position: -36px -217px;}");
document.writeln("#hospitalMain ol .hospitalEm5{ background-position: -36px -290px;}");
document.writeln("#hospitalMain ol .hospitalEm6{ background-position: -36px -363px;}");
document.writeln("#hospitalMain ol .active .hospitalEm1{ background-position: -36px -36px;}");
document.writeln("#hospitalMain ol .active .hospitalEm2{ background-position: -36px -108px;}");
document.writeln("#hospitalMain ol .active .hospitalEm3{ background-position: -36px -181px;}");
document.writeln("#hospitalMain ol .active .hospitalEm4{ background-position: -36px -254px;}");
document.writeln("#hospitalMain ol .active .hospitalEm5{ background-position: -36px -326px;}");
document.writeln("#hospitalMain ol .active .hospitalEm6{ background-position: -36px -399px;}");
document.writeln("</style>");
document.writeln("<div id=\"hospitalMain\" class=\"clearFix w1000\">");
document.writeln("        <ul class=\"fl\">");
document.writeln("                <li class=\"active\">");
document.writeln("                        <div class=\"fl word\">");
document.writeln("                                <h2>提前预约 无需等待</h2>");
document.writeln("                                <p>上海江城皮肤病医院积极贯彻卫生部《在网上施行预约诊疗服务工作的意见》，率先推出网上预约挂号服务，切实解决百姓看病难问题。全国男性患者可通过网络，与上海江城皮肤病医院在线专家一对一对话咨询，在线免费预约上海江城皮肤病医院专家号，凭预约号到院可优先就诊，平均排队时间不超过30分钟。</p>");
document.writeln("                                <div class=\"hospitalBtn\"><a class=\"detail\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a><a class=\"consult\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a></div>");
document.writeln("                        </div>");
document.writeln("                        <div class=\"img fr\"><img src=\"images/hospital1.jpg\" alt=\"提前预约 无需等待\"></div>");
document.writeln("                </li>");
document.writeln("                <li>");
document.writeln("                        <div class=\"fl word\">");
document.writeln("                                <h2>医院概况</h2>");
document.writeln("                                <p>上海江城皮肤病医院是按国家三级医院设置的大型皮肤病专科医院。医院面积10000余平方米，开设病床104张。设有皮肤内科、皮肤外科、中医科、中西医结合科、银屑病门诊、白癜风门诊、性病科、激光美容科、医学美容科、康复理疗科、预防保健科等专业化特色诊疗科室及皮肤病理实验室、性病实验室等多个精微化科研实验室。是集临床、科研、教学、预防为一体的国际化、现代化皮肤病专业医院</p>");
document.writeln("                                <div class=\"hospitalBtn\"><a class=\"detail\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a><a class=\"consult\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a></div>");
document.writeln("                        </div>");
document.writeln("                        <div class=\"img fr\"><img src=\"images/hospital2.jpg\" alt=\"医院概况\"></div>");
document.writeln("                </li>");
document.writeln("                <li>");
document.writeln("                        <div class=\"fl word\">");
document.writeln("                                <h2>专家团队</h2>");
document.writeln("                                <p>上海江城皮肤病医院一直拥有着强大的医师团队，这是一支由国务院特殊津贴专家、教授及硕士研究生及高级职称医师组成的疑难病症攻关型队伍。全院500余名职工之中，医疗专业技术人员占80％，其中主任医师、教授、博士生导师和享受国务院政府特殊津贴的专家等副高职以上专家50多人，许多专家教授在国内外享有较高知名度。</p>");
document.writeln("                                <div class=\"hospitalBtn\"><a class=\"detail\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a><a class=\"consult\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a></div>");
document.writeln("                        </div>");
document.writeln("                        <div class=\"img fr\"><img src=\"images/hospital3.jpg\" alt=\"专家团队\"></div>");
document.writeln("                </li>");
document.writeln("                <li>");
document.writeln("                        <div class=\"fl word\">");
document.writeln("                                <h2> 服务理念</h2>");
document.writeln("                                <p>上海江城皮肤病医院倡导优质的服务理念，疗效与医患关系作为首要工作。始终把爱心、耐心、细心和责任心奉献给病人，以其全新的创意，独特的风格，为前来就诊的患者提供\"享受就诊\"服务。医院良好的医德医风得到了就诊病人的广泛赞誉，病人满意率始终保持在98％以上</p>");
document.writeln("                                <div class=\"hospitalBtn\"><a class=\"detail\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a><a class=\"consult\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a></div>");
document.writeln("                        </div>");
document.writeln("                        <div class=\"img fr\"><img src=\"images/hospital4.jpg\" alt=\"服务理念\"></div>");
document.writeln("                </li>");
document.writeln("                <li>");
document.writeln("                        <div class=\"fl word\">");
document.writeln("                                <h2>医疗设备</h2>");
document.writeln("                                <p>上海江城皮肤病医院积极贯彻卫生部《在网上施行预约诊疗服务工作的意见》，率先推出网上预约挂号服务，切实解决百姓看病难问题。全国男性患者可通过网络，与上海江城皮肤病医院在线专家一对一对话咨询，在线免费预约上海江城皮肤病医院专家号，并凭预约号到院直接就诊，无需排队。</p>");
document.writeln("                                <div class=\"hospitalBtn\"><a class=\"detail\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a><a class=\"consult\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a></div>");
document.writeln("                        </div>");
document.writeln("                        <div class=\"img fr\"><img src=\"images/hospital5.jpg\" alt=\"医疗设备\"></div>");
document.writeln("                </li>");
document.writeln("                <li>");
document.writeln("                        <div class=\"fl word\">");
document.writeln("                                <h2>收费规范</h2>");
document.writeln("                                <p>上海江城皮肤病医院各项收费认真贯彻国家物价管理部门和医保政策规定，严格执行上海市物价局收费标准，建立了完善的监察、督察制度，杜绝不合理收费，于医院直接设立价格公示牌，真正做到让患者明明白白看病、清清楚楚花钱。以鲜明严格的制度严把医疗质量和收费关，实质性地帮助百姓节省医疗开支，切实解决老百姓\"看病贵\"难题，给患者一个安定放心的就医环境。</p>");
document.writeln("                                <div class=\"hospitalBtn\"><a class=\"detail\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a><a class=\"consult\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\"></a></div>");
document.writeln("                        </div>");
document.writeln("                        <div class=\"img fr\"><img src=\"images/hospital6.jpg\" alt=\"收费规范\"></div>");
document.writeln("                </li>");
document.writeln("        </ul>");
document.writeln("        <ol class=\"fr\">");
document.writeln("                <li class=\"active\"><em class=\"hospitalEm1\"></em>网络预约<div class=\"div_active\"></div></li>");
document.writeln("                <li><em class=\"hospitalEm2\"></em>医院概括<div></div></li>");
document.writeln("                <li><em class=\"hospitalEm3\"></em>专家团队<div></div></li>");
document.writeln("                <li><em class=\"hospitalEm4\"></em>服务理念<div></div></li>");
document.writeln("                <li><em class=\"hospitalEm5\"></em>医疗设备<div></div></li>");
document.writeln("                <li style=\"margin-bottom:0;\"><em class=\"hospitalEm6\"></em>收费规范<div></div></li>");
document.writeln("        </ol>	");
document.writeln("</div>");
document.writeln("<script>");
document.writeln("/*hospital*/");
document.writeln("$(function(){");
document.writeln("	var aBtn=$(\'#hospital ol li\');");
document.writeln("	var aCut=$(\'#hospital ul li\');");
document.writeln("	tabSwitch(aBtn,aCut);	");
document.writeln("})");
document.writeln("</script>");