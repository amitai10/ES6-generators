var co = require('co');

co(function *(){
  // yield any promise
  var result = yield Promise.resolve('co');
  console.log('hello', result); //hello co
});