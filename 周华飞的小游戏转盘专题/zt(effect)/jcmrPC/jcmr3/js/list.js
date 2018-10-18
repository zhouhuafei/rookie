//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
var r=new Rookie();
r.version();
r.addEvent(window,'load',function(){
	/*list==listCut>*/
	r.flowNav({obj:'#list ol',child:'#list ol .ready',target:'.target',aCut:'#list ul li',oBtn:'#list ol li.last'});
})