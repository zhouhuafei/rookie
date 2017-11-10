//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
$(window).load(function(){
	var video={
		//初始化
		init:function(id){
			this.fnEle();//调用获取元素
			this.fnImgList(true);//调用创建图片列表
			this.fnAbtnEvent();//调用给按钮添加事件	
			this.fnFlow(this.oFlowNav,0);//调用粘性导航
			this.fnFlow(this.oSide,this.oFlowNav.offsetHeight,this.oFlowNav.offsetHeight,true);//调用粘性导航
		},
		//所有的图片数据,文字数据,视频数据
		data:{
			npx:{
				img:['images/npx1.jpg','images/npx2.jpg','images/npx3.jpg','images/npx4.jpg','images/npx5.jpg','images/npx6.jpg','images/npx7.jpg','images/npx8.jpg','images/npx9.jpg','images/npx10.jpg','images/npx11.jpg','images/npx12.jpg','images/npx13.jpg','images/npx14.jpg','images/npx15.jpg','images/npx16.jpg','images/npx17.jpg','images/npx18.jpg','images/npx19.jpg','images/npx20.jpg','images/npx0.jpg'],
				txt:['老病号带领新病号求健康','“蒙古人”出院送锦旗,“国宝教授”题赠顾昌林','12天从“行走靠挪”到“大步流星”的惊喜','治好顽病牛皮癣','杨先生牛皮癣治愈后喜笑颜开','牛皮癣患者：痒得要把肉拉开','治好后专家告诫如何预防复发','广东患者愈后致谢江城皮肤病医院','顾教授关心“老患者”,跟踪服务防复发','十八年治癣山穷水尽，顾教授除病柳暗花明','牛皮癣患者治愈后，顾教授交代防复发秘籍','患顽癣噩运缠身，治好后赠锦旗诉心声','患者夫妇愈后感叹找顾教授治病花多少钱也值','三十年牛皮癣,顾教授四个月一扫光','病友口碑相传阿甘慕名投医见奇效','牛皮癣患者亲历恐怖的“激素治疗”','她感慨自己得知江城皮肤病医院太晚了','吴女士治疗两个星期后见证的效果','吴女士初诊实拍','云南小患者父亲送锦旗-采访视频','牛皮癣患者愈后接受采访'],
				video:[124863292,119605312,106909993,78349825,78332626,78327712,74177839,89312959,74168011,67008313,66509542,60799474,57752794,57735595,139089322,141534037,127546336,127543879,127541422,164438191,57455497]
			},
			qcd:{
				img:['images/qcd0.jpg','images/qcd1.jpg','images/qcd2.jpg','images/qcd3.jpg','images/qcd4.jpg','images/qcd5.jpg','images/qcd6.jpg','images/qcd7.jpg','images/qcd8.jpg','images/qcd9.jpg'],
				txt:['上海患者英子江城治疗痤疮经历','中西医结合治痤疮，帅哥告别青春痘','上海痤疮患者小叶在江城治疗经历','中医内调外治祛痤疮，事业爱情见阳光','中医内外调理，白领痤疮两周见效','恼人的青春痘','黑龙江姑娘遇痤疮千里求医','“桔皮脸”变“鸡蛋青”，中药石膏倒膜治痤疮','青春痘治疗病例 千里求医','实拍青春痘'],
				video:[119983690,119978776,107362081,74254006,66511999,121578283,121396465,57738052,128241667,127610218]
			},
			hzj:{
				img:['images/hzj0.jpg','images/hzj1.jpg','images/hzj2.jpg','images/hzj3.jpg','images/hzj4.jpg','images/hzj5.jpg','images/hzj6.jpg','images/hzj7.jpg'],
				txt:['上海江城D-W技术简介','灰指甲科普视频','患病阿姨无拔甲痛苦就治愈','阿姨无拔甲痛苦就治愈','嘉定区王经理灰指甲康复记之康复篇','嘉定区王经理灰指甲康复记之赠锦旗篇','十年丑陋灰指甲，二十天后亮而新','67岁老太街头扦脚感染灰指甲，传染双手'],
				video:[121691305,121696219,121698676,121863295,121855924,121853467,121851010,121848553]
			},
			sf:{
				img:['images/sf0.jpg','images/sf1.jpg','images/sf2.jpg','images/sf4.jpg','images/sf5.jpg','images/sf6.jpg','images/sf7.jpg','images/sf8.jpg','images/sf9.jpg','images/sf10.jpg','images/sf11.jpg'],
				txt:['《科技密码》脱发','幸亏到江城来，我不想戴帽子了！','科技密码专访江城植发','复旦学子治疗脱发，信赖江城专家','配合专家 我院专家让脱发患者满意','脱发治疗 半年见效喜临门','患者希望国内也有江城医院','小周植发记','一台植发手术的诞生','植眉治疗 用美丽留住未来','移植胸毛'],
				video:[109983700,106934563,131971393,95543911,74251549,66499714,119946835,162479962,153391519,127597933,127600390]
			},
			bdf:{
				img:['images/bdf1.jpg','images/bdf2.jpg','images/bdf3.jpg','images/bdf4.jpg','images/bdf5.jpg'],
				txt:['实实在在有效，真真正正放心','20年来陈先生一直无法释怀','变“插秧”为“播种”大面积白癜风','日本患者手臂像带了白手套','十年顽疾，烦！一周见效，快！'],
				video:[74155726,106905079,57740509,77865796,85666771]
			},
			ylb:{
				img:['images/sf3.jpg','images/ylb0.jpg','images/ylb1.jpg','images/ylb2.jpg','images/ylb3.jpg','images/ylb4.jpg','images/ylb5.jpg'],
				txt:['鱼鳞病的尴尬“天气再热也穿着衣服”','全身长“蛇皮“，妙招患处“光溜溜”','顽固鱼鳞病，在江城快速被治愈','鱼鳞病治好真开心，“小少林”给看滑溜的肚皮','鱼鳞病患者，不远千里来求医','三个月摆脱“蛇皮”烦恼','治好恐怖鱼鳞病 小伙皮肤细又嫩'],
				video:[78855967,78858424,78853510,78851053,74190124,58091860,57733138]
			},
			pfwk:{
				img:['images/pfwk2.jpg','images/pfwk3.jpg','images/pfwk4.jpg','images/pfwk5.jpg','images/pfwk6.jpg','images/pfwk7.jpg','images/pfwk8.jpg','images/pfwk9.jpg','images/pfwk10.jpg','images/pfwk11.jpg','images/pfwk12.jpg','images/pfwk13.jpg','images/pfwk1.jpg'],
				txt:['17年前血管瘤治疗过程','启东血管瘤患者回访之旅1','启东血管瘤患者回访之旅2','启东血管瘤患者回访之旅3','红鼻子Bye-bye！不被人家“注意”的感觉真好！','朋友提醒才知臭，术后一周味全无','幸好听劝来江城 不然身边同学跑光了','性病综合专题DC细胞视频','这块匾就是专程送给江城医院李医生的','血管瘤美容修复改善','腋臭的危害','腋臭介绍','【疤痕-微电影】小敏的瑜伽练习记'],
				video:[148077028,149565970,149568427,149570884,127612675,120868210,133072129,142462783,148081942,148079485,120875581,122497201,155529109]
			},
			pfmr:{
				img:['images/pfmr1.jpg','images/pfmr2.jpg','images/pfmr3.jpg','images/pfmr4.jpg','images/pfmr5.jpg','images/pfmr6.jpg','images/pfmr7.jpg','images/pfmr8.jpg'],
				txt:['患者的呐喊：我要快点“下斑”！','冰点脱毛过程实拍','祛除黄褐斑＂地图脸＂再现娇好面庞','江城医疗美容祛斑','飞顿大Q祛斑过程','一次去掉雀斑患者笑开颜','雀斑治愈患者感谢江城','太田痣治疗全过程'],
				video:[165895192,157212154,57521836,162855883,158327632,66507085,66502171,74195038]
			},
			qt:{
				img:['images/qt1.jpg','images/qt2.jpg','images/qt3.jpg','images/qt4.jpg','images/qt5.jpg','images/qt6.jpg','images/qt7.jpg','images/qt8.jpg','images/qt9.jpg','images/qt10.jpg','images/qt11.jpg','images/qt12.jpg'],
				txt:['跨国求医只为解除皮肤烦恼','网上购药吃得“人发胖”,病愈江城敬送“红纸头”','多年湿疹今康复，笑颜相拥谢医生！','遭罪十三年，湿疹痒得抓出血','一周治好湿疹沉疴，康复一身轻松','七天治愈湿疹，老人好似“中大彩”','六年不愈湿疹病，江城专家是“贵人”','湿疹求医7年不治，我院八月治好','治疗荨麻疹求医无门,江城专家三月除疾','患者在江城治疗荨麻疹的经历','来到江城解决多汗尴尬','一次决定，解除七年荨麻疹烦恼'],
				video:[58106602,119762560,123831352,85300678,74249092,74182753,74175382,57747880,119944378,119929636,85349818,127607761]
			},
			shgy:{
				img:['images/shgy4.jpg','images/shgy5.jpg','images/shgy8.jpg','images/shgy9.jpg','images/shgy10.jpg','images/shgy11.jpg','images/shgy12.jpg','images/shgy13.jpg','images/shgy14.jpg','images/shgy15.jpg','images/shgy16.jpg','images/shgy17.jpg','images/shgy18.jpg','images/shgy19.jpg','images/shgy20.jpg','images/shgy21.jpg','images/shgy22.jpg','images/shgy23.jpg','images/shgy24.jpg','images/shgy25.jpg','images/shgy26.jpg','images/shgy27.jpg','images/shgy28.jpg','images/shgy29.jpg','images/shgy30.jpg','images/shgy31.jpg','images/shgy32.jpg','images/shgy33.jpg','images/shgy34.jpg','images/shgy35.jpg','images/shgy36.jpg','images/shgy1.jpg','images/shgy2.jpg','images/shgy3.jpg','images/shgy6.jpg','images/shgy7.jpg'],
				txt:['【上海电视台】穿山甲宝宝','【新闻坊】关爱重症皮肤病患者活动','10月29日世界银屑病日','帮困助医穿山甲宝宝','穿山甲宝宝邦女郎报道','穿山甲宝宝初诊篇','穿山甲宝宝治疗篇','第二届东方明珠患者采访1','第二届东方明珠患者采访2','第二届东方明珠患者采访3','第二届东方明珠患者采访4','第二届东方明珠患者采访5','第二届东方明珠患者采访6','患者发言2 第二届东方明珠治疗成果展','患者发言2 第一届东方明珠治疗成果展','患者发言3 第二届东方明珠治疗成果展','患者发言4 第二届东方明珠治疗成果展','江城白癜风活动患者1','江城白癜风活动患者2','江城白癜风活动患者3','江城白癜风活动患者4','欧尚健康普查活动新闻坊报道','世界白癜风活动王会民采访','世界白癜风日石玉成采访','世界白癜风日新闻坊','世界白癜风日优酷报导','余姚义诊','重症皮肤病能治愈[看东方]-无线','第二届东方明珠皮肤病成果展','患者发言1 第二届东方明珠治疗成果展','患者发言1 第一届东方明珠治疗成果展','【记者再报告】“熊猫宝宝”的眼泪','【江城新闻】会诊“熊猫女婴”','【上海电视台】“熊猫女婴”得怪病','【央视后续专访】“熊猫宝宝”的眼泪','【央视专访】“熊猫宝宝”的眼泪'],
				video:[145816588,155123704,134330113,147010690,146995948,146224450,146221993,164499616,164502073,164511901,164514358,164516815,164519272,157354660,74305603,157359574,157362031,164686348,164688805,164691262,164693719,162929593,165396421,164718289,165740401,164534014,133666723,155740411,156804292,157352203,74271205,138735514,132123727,132615127,144425926,134964019]
			},
			zljs:{
				img:['images/zljs1.jpg','images/zljs2.jpg','images/zljs3.jpg','images/zljs4.jpg','images/zljs5.jpg','images/zljs6.jpg','images/zljs7.jpg','images/zljs8.jpg','images/zljs9.jpg'],
				txt:['“龙卷风”生物光生发仪','308准分子激光治疗仪','韩国人脸检测','黄金微针射频无创除腋臭','激光脱毛','美容科诊室实拍调Q激光','植发技术','植发手术之毛囊分离','自体净血疗法'],
				video:[128531593,128534050,164288314,163823941,164389051,127602847,133728148,131973850,147096685]
			},
			zjjz:{
				img:['images/zjjz1.jpg','images/zjjz2.jpg','images/zjjz3.jpg','images/zjjz4.jpg','images/zjjz5.jpg','images/zjjz6.jpg','images/zjjz7.jpg','images/zjjz8.jpg','images/zjjz9.jpg','images/zjjz10.jpg','images/zjjz11.jpg','images/zjjz12.jpg','images/zjjz13.jpg','images/zjjz14.jpg','images/zjjz15.jpg','images/zjjz16.jpg','images/zjjz17.jpg','images/zjjz18.jpg','images/zjjz19.jpg','images/zjjz20.jpg','images/zjjz21.jpg','images/zjjz22.jpg','images/zjjz23.jpg','images/zjjz24.jpg','images/zjjz25.jpg','images/zjjz26.jpg','images/zjjz27.jpg','images/zjjz28.jpg','images/zjjz29.jpg','images/zjjz30.jpg','images/zjjz31.jpg','images/zjjz32.jpg'],
				txt:['疤痕图片介绍','白癜风的治疗方法','白癜风类型','白癜风问答','瘢痕治疗时间和方法','顾教授白癜风公开课','尖锐湿疣专题视频','酒糟鼻鼻赘手术运用','酒糟鼻概述','酒糟鼻划痕手术运用','酒糟鼻手术案例介绍','老专家奉命而来','美容介绍','上海江城皮肤病医院植发培训1','上海江城皮肤病医院植发培训2','上海江城皮肤病医院植发培训3','上海江城皮肤病医院植发培训4','上海江城皮肤病医院植发培训5','上海江城皮肤病医院专家讲解除皱','上海江城皮肤病医院专家讲解祛斑','上海江城皮肤病医院专家讲解脱毛','什么是白癜风','什么是瘢痕，瘢痕的分类','什么是核医学','什么是鲜红斑痣','什么是血管瘤','锶90敷贴器介绍','锶90敷贴器治疗仪解析','锶90治疗血管瘤的机理','锶90治疗血管瘤的注意事项','血管瘤案例介绍','血管瘤的治疗方法'],
				video:[133575814,134327656,134325199,134322742,133573357,134285887,141330106,150376780,150379237,150381694,150384151,132755176,133578271,132887854,132890311,132892768,132895225,132897682,132905053,132902596,132900139,134310457,133570900,132757633,132765004,132760090,132941908,132961564,132769918,132772375,132752719,132762547]
			},
			mtcf:{
				img:['images/mtcf1.jpg','images/mtcf2.jpg','images/mtcf3.jpg','images/mtcf4.jpg','images/mtcf5.jpg','images/mtcf6.jpg','images/mtcf7.jpg','images/mtcf8.jpg','images/mtcf9.jpg','images/mtcf10.jpg','images/mtcf11.jpg','images/mtcf12.jpg','images/mtcf13.jpg','images/mtcf14.jpg','images/mtcf15.jpg','images/mtcf16.jpg'], 
				txt:['东方卫视采访我院医生','东方卫视专访吴玉琴','患者治愈后听吴主任讲皮肤病知识','健康访谈-顾昌林','健康访谈-夏风','健康访谈-杨林','江城皮肤顾教授','上海电视台科技密码专访吴玉琴','上海电视台新闻坊采访我院专家','腾讯大申网采访我院植发专家李衡华','腾讯网采访我院白癜风医生','腾讯网采访我院牛皮癣专家','腾讯网采访吴玉琴','我院白癜风医生杨林接受采访','吴玉琴主任做客大申网','吴玉琴做客家庭医生栏目'],
				video:[85777336,154713385,133676551,57285964,58118887,137661805,133180237,154710928,127752724,153531568,77868253,78322798,133543873,106278544,153300610,159978736]
			}				
		},
		//获取元素
		fnEle:function(){
			this.oSide=document.getElementById('side');
			this.oMain=document.getElementById('main');
			this.oVideo=document.getElementById('video');
			this.aBtn=this.oSide.getElementsByTagName('li');
			this.iLen=this.aBtn.length;
			this.oCut=document.getElementById('main');
			this.aLi=this.oCut.getElementsByTagName('li');
			this.oBox=document.getElementById('box');			
			this.oBoxs=document.getElementById('boxs');
			this.oEm=this.oBoxs.getElementsByTagName('em')[0];
			this.oSpan=this.oBoxs.getElementsByTagName('span')[0];
			this.oFlowNav=document.getElementById('flowNav');
			this.navLi=this.oFlowNav.getElementsByTagName('li');
			this.oDiv=this.oSide.getElementsByTagName('div')[0];
		},
		//创建图片列表
		fnImgList:function(boolean){
			var self=this;
			this.oCut.innerHTML='';
			this.title=null;
			var str='';											
			var arr=[];
			for(var attr in self.data){
				for(var i=0;i<self.data[attr].video.length;i++){
					arr.push(self.data[attr].video[i]);
				}
			}
			self.arr=arr;
			if(boolean){
				for(var attr in this.data){
					for(var j=0;j<this.data[attr].img.length;j++){
						str+='<li><img src="'+this.data[attr].img[j]+'"><p title="'+this.data[attr].txt[j]+'">'+this.data[attr].txt[j]+'</p></li>'
					}					
				}
				this.oCut.innerHTML=str;				
				this.fnAimgEvent(true);//调用给图片列表添加事件	
				var iH=Math.ceil(arr.length/3)*self.aLi[0].offsetHeight+'px';
				self.oVideo.style.height=iH;
				self.oSide.className='active';
				self.oMain.className='active';
			}else{
				for(var i=0;i<this.iLen;i++){
					if(this.aBtn[i].className=='active'){
						this.title=this.aBtn[i].title;	
					}	
				}
				for(var j=0;j<this.data[this.title].img.length;j++){
					var oLi=document.createElement('li');
					oLi.innerHTML='<img src="'+this.data[this.title].img[j]+'"><p title="'+this.data[this.title].txt[j]+'">'+this.data[this.title].txt[j]+'</p>';
					this.oCut.appendChild(oLi);
				}
				this.fnAimgEvent();//调用给图片列表添加事件
			}		
			this.fnEm();//调用关闭按钮			
		},
		//给按钮添加事件
		fnAbtnEvent:function(){
			var self=this;
			var iT=this.fnOffsetTop(this.oFlowNav);
			for(var j=0;j<this.iLen;j++){
				this.aBtn[j].index=j;
				this.aBtn[j].onclick=function(){
					$('html,body').animate({scrollTop:iT});					
					for(var j=0;j<self.iLen;j++){
						self.aBtn[j].className='';	
					}											
					for(var k=0;k<self.navLi.length;k++){
						self.navLi[k].className='';					
					}
					if(this.index>=self.oDiv.children.length-1){
						self.navLi[this.index-self.oDiv.children.length+2].className='active';
					}else{
						self.navLi[1].className='active';	
					}
					self.aBtn[this.index].className='active';
					self.fnImgList();
				}	
			}
			for(var k=0;k<this.navLi.length;k++){
				var self=this;			
				this.navLi[k].index=k;
				this.navLi[k].onclick=function(){
					$('html,body').animate({scrollTop:iT});	
					for(var k=0;k<self.navLi.length;k++){
						self.navLi[k].className='';					
					}					
					for(var z=0;z<self.aBtn.length;z++){
						self.aBtn[z].className='';			
					}
					self.navLi[this.index].className='active';
					if(this.index==0){
						var iH=Math.ceil(self.arr.length/3)*self.aLi[0].offsetHeight+'px';
						self.oVideo.style.height=iH;
						self.oSide.className='active';
						self.oMain.className='active';
						self.fnImgList(true);					
					}else if(this.index==1){						
						self.oSide.className='';
						self.oMain.className='fr';
						self.oVideo.style.height='';
						self.aBtn[0].className='active';	
						//self.aBtn[this.index+self.oDiv.children.length-2].className='active';									
						self.fnImgList();	
					}else{
						var iH=Math.ceil(self.data[self.aBtn[this.index+self.oDiv.children.length-2].title].img.length/3)*self.aLi[0].offsetHeight+'px';
						self.oVideo.style.height=iH;
						self.oSide.className='active';
						self.oMain.className='active';
						self.aBtn[this.index+self.oDiv.children.length-2].className='active';	
						self.fnImgList();
					}
				}
			}	
		},
		//给图片列表添加事件
		fnAimgEvent:function(boolean){
			var self=this;
			for(var i=0;i<this.aLi.length;i++){
				this.aLi[i].index=i;
				this.aLi[i].onclick=function(){
					self.oBox.className='active';
					self.oBoxs.className='active';
					document.body.style.overflow='hidden';
					document.documentElement.style.overflow='hidden';
					self.oSpan.innerHTML='';
					if(boolean){		
						self.oSpan.innerHTML='<iframe src="video.html#'+self.arr[this.index]+'" width=500 height=420 scrolling=0 frameborder=no></iframe>';		
					}else{
						self.oSpan.innerHTML='<iframe src="video.html#'+self.arr[this.index]+'" width=500 height=420 scrolling=0 frameborder=no></iframe>';				
					}
				}
			}
		},
		//关闭按钮
		fnEm:function(){
			var self=this;
			this.oEm.onclick=function(){
				self.oSpan.innerHTML='';
				self.oBox.className='';	
				self.oBoxs.className='';	
				document.body.style.overflow='';
				document.documentElement.style.overflow='';
			}
		},
		//粘性导航
		fnFlow:function(obj,tops,height,bTrue){
			var self=this;
			var iTop=this.fnOffsetTop(obj);
			var iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			var iHeight=height?height:0;
			this.fnAddEvent(window,'scroll',function(){
				iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				if(bTrue){
					if(iScrollTop>=self.oVideo.offsetHeight+self.oVideo.offsetTop-self.oSide.offsetHeight-iHeight){				
						obj.style.position='absolute';
						obj.style.top=self.oVideo.offsetHeight-self.oSide.offsetHeight+'px';
					}else if(iScrollTop>=iTop-iHeight){
						obj.style.position='fixed';
						obj.style.top=tops+'px';					
						
					}else{	
						obj.style.position='absolute';
						obj.style.top=0;
					}
				}else{				
					if(iScrollTop>=iTop-iHeight){
						obj.style.position='fixed';
						obj.style.top=tops+'px';					
						
					}else{				
						obj.style.position='absolute';
						obj.style.top=0;
					}						
				}
			})		
		},
		//获取top值封装
		fnOffsetTop:function(obj){
			var iTop=0;
			while(obj){
				iTop+=obj.offsetTop;
				obj=obj.offsetParent;
			}
			return iTop;
		},
		//事件绑定封装
		fnAddEvent:function(obj,ev,fn){
			if(obj.attachEvent){
				obj.attachEvent('on'+ev,fn);
			}else{
				obj.addEventListener(ev,fn,false);	
			}
		}
	}
	video.init();//调用初始化	
})


