let request = require("request");

request('http://no-exist-site.com',function (error,response,body) {
    // console.log('1.------status code ------' + response.statusCode);
    // console.log('1.------body-------' + body.substring(0,500) +'.......'+'totallength:'+body.length);
    console.log('error:' + error);
});
