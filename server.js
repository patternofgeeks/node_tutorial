/**
 * Created by sk.cho on 15. 3. 29..
 */
var http	=	require("http");
var url 	=	require("url");

function start(route,handler){

  function onRequest(req, res){
    var pathname = url.parse(req.url).pathname;

    route(handler,pathname,req,res);
  }
  http.createServer(onRequest).listen(9999);
  console.log('server is started ...');
}

exports.start = start;