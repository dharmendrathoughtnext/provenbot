var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  mydb = new Schema({
  title: { type: String, required: true } 
  });


var collection_name='mydb'

module.exports=mongoose.model('mydb',mydb,collection_name);