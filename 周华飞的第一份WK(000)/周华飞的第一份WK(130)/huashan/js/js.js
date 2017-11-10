//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
var r=new Rookie();
r.addEvent(window,'load',function(){
	/*banner*/
	r.tabSwitch({aBtn:".bannerMain ol li",aCut:".bannerMain ul li",bAutoPlay:true});
	/*notice*/
	r.tabSwitch({aBtn:".notice ol li",aCut:".notice ul li"});
	/*teach*/
	r.tabSwitch({aBtn:".teachMain a"});
	/*data*/
	setInterval(function(){
		r.upDate('.tr',0,true);
		for(var i=1; i<=4;i++){
			r.upDate('#first'+i,i,false);					
		}				
	},1000)
	/*time*/
	document.querySelector(".time .green").onclick = function () {lxb.call(document.querySelector(".time input"));}
})

