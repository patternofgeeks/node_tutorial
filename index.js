/**
 * Created by sk.cho on 15. 3. 29..
 */
var server 	=	require('./server');
var router 	=	require('./route');
var requestHandlers = require('./requestHandler');

server.start(router.route, requestHandlers.handle);