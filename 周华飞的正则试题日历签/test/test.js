/**
 * Created by zhouhuafei on 15/10/26.
 */
var oHou=9;
var oMin=8;
var oSec=7;
function limit(num){
        if(num<10){
                num='0'+num;
        }else{
                num=''+num;
        }
        return num;
}
oHou=limit(oHou);
oMin=limit(oMin);
oSec=limit(oSec);
console.log(oHou,oMin,oSec);