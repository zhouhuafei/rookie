/**
 * Created by zhouhuafei on 15/10/4.
 */


//Buffer 操作二进制数据流(类数组)


//1     new Buffer(size)
var buffer = new Buffer(5);//new出来之后，长度就固定了
console.log(buffer);//没有字符,编码是随机的


//2     new Buffer(array)
var buffer2 = new Buffer([10, 11, 12, 13, 4, 5, 6, 7, 8, 9]);//new出来之后，长度就固定了
console.log(buffer2);
//buffer2[20]=100;//修改无效
//console.log(buffer2);//new出来之后，长度就固定了(这里显示的十六进制,是为了方便观看)


//3     new Buffer(string,[encoding])
var buffer3 = new Buffer('zhouhuafei', 'utf-8');//默认utf-8
var sResult = '';
console.log(buffer3);//这里显示的是十六进制的
for (var i = 0; i < buffer3.length; i++) {
        //console.log(buffer3[i]);//这里显示的是二进制
        //console.log(buffer3[i].toString(16));//这里显示的是十六进制
        //console.log(String.fromCharCode(buffer3[i]));//这里把二进制编码转义成字符
        sResult += String.fromCharCode(buffer3[i]);
}
console.log(sResult);


//4     buffer3.length这是字节长度,不是字符串长度
//中文不同,一个汉字占三个字节(英文不变)
var str = '周华飞';
console.log(str.length);//3
var buffer4 = new Buffer(str);
console.log(buffer4.length);//9


//5     write字符写入
var myName = '周华飞';
var buffer5 = new Buffer(myName);
console.log(buffer5);
var buffer6 = new Buffer(buffer5.length);//长度是固定的,如果小于字节的长度,则会在写入时进行字节的截取
console.log(buffer6);
buffer6.write(myName);//将参数写入Buffer
console.log(buffer6);


//6     oldBuffer.copy(newBuffer)   把老的Buffer拷贝给新的Buffer一份
//7     Buffer.isEncoding(encode)
//8     Buffer.isBuffer(object)
//9     Buffer.byteLength(str)
//10    Buffer.concat(listArray,byteAllLength)