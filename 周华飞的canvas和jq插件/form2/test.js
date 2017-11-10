var http = require("http");
var server = http.createServer(function (req, res) {
        if (req.url !== "/favicon.ico") {
                //这一句相当于下面四句
                res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost:63342"});
                /*
                 res.statusCode=200;
                 res.sendDate=false;
                 res.setHeader("Content-Type","text/plain");
                 res.setHeader("Access-Control-Allow-Origin","http://localhost:63342");
                 */
                res.write("我就是你苦苦请求的数据");
        }
        res.end();
});
server.listen(1337, "localhost", function () {
        console.log("开始监听...");
});