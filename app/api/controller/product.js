var mongoose = require('mongoose'),
  Product = require('../model/product'),
  Q = require('q')
  
exports.GetProductsForBrandID = function(brand_name) {
  var deferred = Q.defer()
  console.log('GetProductsForBrandID function')
  Product.find({brand: brand_name}, function(err, result){
    console.log(result)
    if (err) {
      console.log(err)
       deferred.reject(err)
    }
    else {
      // console.log("Find Operations: " + result);
      deferred.resolve(result);
    }
  })
  return deferred.promise;
}
