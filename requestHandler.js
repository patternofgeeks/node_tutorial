/**
 * Created by sk.cho on 15. 3. 29..
 */
function hello(req,res){
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write("hello page . . .");
  res.end();
}

function nodepage(req,res){
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write("nodepage page . . .");
  res.end();
}

exports.handle = {
  '/':hello,
  '/hello':hello,
  '/nodepage':nodepage
};