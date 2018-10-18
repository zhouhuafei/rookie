/**
 * Created by zhouhuafei on 15/10/3.
 */


//标准输出流process.stdout.write('标准输出流');
process.stdout.write('process.stdout.write标准输出流相当于console.log\n');


var a;
var b;
//标准输入流process.stdin.on('标准输入流监听事件','监听函数');
process.stdin.resume();//open standard input
process.stdout.write('请输入a的值:');
process.stdin.on('data', function (data) {//listen standard input
        console.log(data);//默认输出的其实是Buffer类数组字节数据
        //默认输出的其实是Buffer类数组字节数据,如果进行了字符串拼接,则Buffer数据会在内部进行自动转换,0a是换行键
        if (!a) {
                a = Number(data);
                if (!a) {
                        process.stdout.write('输入有误,请重新输入a的值(只能是数字):');
                } else {
                        process.stdout.write('请输入b的值:');
                }
        } else if (!b) {
                b = Number(data);
                if (!b) {
                        process.stdout.write('输入有误,请重新输入b的值(只能是数字):');
                } else {
                        process.stdout.write('a+b=' + (a + b));
                }
        } else {
                console.log(process.argv);//指令数组
                console.log(process.title);//进程名称
                console.log(process.platform);//操作平台
                console.log(process.pid);//进程的pid值
                console.log(process.execPath);//开启当前进程的这个可执行文件的绝对路径
                console.log(process.env);//用户环境的对象
                console.log(process.arch);//CPU的处理架构
                console.log(process.version);//版本号
                process.exit();
        }
});