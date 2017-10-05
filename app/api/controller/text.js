var mongoose = require('mongoose'),
  Text = require('../model/text'),
  Q = require('q')
  
exports.Message = function() {
  var deferred = Q.defer()
  console.log('Message function')
  Text.find({}, function(err, result){
    console.log("hello mr error:"+result[0].title)

    if (err) {
      console.log(err)
       deferred.reject(err)
    }
    else {
      
      deferred.resolve(result);
    }
  })
  return deferred.promise;
}
