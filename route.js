/**
 * Created by sk.cho on 15. 3. 29..
 */

function route(handle, pathname,req,res){
  console.log('route a request : '+ pathname);
  
  if(typeof handle[pathname] === 'function'){

    handle[pathname](req,res);

  } else {
    console.log('no request handler : '+ pathname);
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.write("404 Page Not Found");
    res.end();
  }
}

exports.route	=	route;