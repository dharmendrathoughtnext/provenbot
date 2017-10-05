var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Product = new Schema({
		name:{type:String, require:true},
		brand:{type:String, require:true},
		image:{type:String, require:true},
		desc:{type:String, require:true},
		status:{type:String, required:true},
		product_url:{type:String, required:true}
	});


	var collection_name="products"

	module.exports=mongoose.model('Product',Product,collection_name);