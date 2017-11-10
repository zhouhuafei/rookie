/**
 * Created by Administrator on 2015/11/30.
 */
var http = require('http');//HTTP
var url = require("url");//GET
var querystring = require("querystring");//POST
http.createServer(function (req, res) {
        var sOrigin = req.headers['origin'];
        if (sOrigin == 'http://localhost:63342') {
                res.setHeader('Access-Control-Allow-Origin', sOrigin);
                if (req.method == 'POST' && req.url == '/form') {
                        var sReqData = '';
                        req.addListener('data', function (chunk) {
                                sReqData += chunk;
                        });
                        req.addListener('end', function () {
                                //如果使用了FormData发送表单数据,那下面这句代码的解析会出问题
                                var oReqData = querystring.parse(sReqData);
                                sReqData = JSON.stringify(oReqData);
                                res.writeHead(200, 'OK', {'Content-type': 'text/html'});
                                res.write('<h1>' + sReqData + '</h1>');
                                res.write('<h2>' + req.url + '</h2>');
                                res.write('<h3>' + req.headers["origin"] + '</h3>');
                                res.write('<h4>' + req.headers["content-type"] + '</h4>');
                                res.write('<h5>' + req.headers["referer"] + '</h5>');
                                res.end();
                        });
                }
        }
}).listen(8080, 'localhost', function () {
        console.log('start listening2');
});