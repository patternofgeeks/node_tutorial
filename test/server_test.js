/**
 * Created by sk.cho on 15. 3. 29..
 */
var request = require('supertest'),
  server = require('../server'),
  router 	=	require('../route'),
  requestHandlers = require('../requestHandler'),
  nodeunit = require('nodeunit');


exports['start node web server'] = nodeunit.testCase({

  'web server init': function (test) {
    server.start(router.route, requestHandlers.handle);
    console.log('server is start');
    test.done();
  },
  'get view': function (test) {
    test.expect(1);

    request("http://localhost:9999")
      .get('/hello')
      .expect(200)
      .end(function(err, result){
        test.equal(result.res.statusCode, 200);
        test.done();
      });

  },
  'get create': function (test) {
    test.expect(1);

    request("http://localhost:9999")
      .get('/nodepage')
      .expect(200)
      .end(function(err, result){
        test.equal(result.res.statusCode, 200);
        test.done();
      });
  },

});