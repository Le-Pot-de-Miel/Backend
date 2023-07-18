var messages = require('../proto/js/helloworld_pb');

/**
 * Implements the StreamLogs RPC method.
 */
function sayHello(call, callback) {
  console.log("hello");
  var reply = new messages.HelloReply();
  reply.setMessage('Hello ' + call.request.getName());
  callback(null, reply);
}

module.exports = {
  sayHello: sayHello
};
