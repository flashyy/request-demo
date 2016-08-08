let request = require("request");

request('http://taobao.com',function (error,response,body) {
    console.log('1.------status code ------' + response.statusCode);
    console.log('1.------body-------' + body.substring(0,500) +'.......'+'totallength:'+body.length);
});
