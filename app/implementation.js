// 'use strict';

var fbTemplate = require('./fbTemplate'),
  constants = require("./payload"),
  externalApi = require('./api'),
  Q = require("q"),
  _ = require("underscore"),
  moment = require('moment'),
  messenger = require("./messenger"),
  Branddb = require('./api/controller/brand') ,
  // Brand = require('./api/model/brand'),
  Productdb = require('./api/controller/product') ,
  // Product = require('./api/model/product')
  Textdb = require('./api/controller/text')

module.exports = function() {

	function welmsg(senderID){

	
		var text=fbTemplate.quickReplyMessage("Hi 👋, your personal  Proven bot 👩 Just tell me which brand you’re looking for   & I’ll  find similar Brand 👗 Let’s Select your brand 🎉")
		return fbTemplate.reply(text, senderID)


	}

	function poweredbymsg(senderID){

		var goback = fbTemplate.createQuickReply('⬅️ BACK',constants.SHOP)
		var text=fbTemplate.quickReplyMessage()
		var text1=fbTemplate.quickReplyMessage("Hi 👋, This is Powered By 'Demo Proven Bot'",[goback])
		return fbTemplate.reply(text1, senderID)


	}
	function hellomsg(senderID){

		
		var text=fbTemplate.quickReplyMessage("welcome to our Ecommerce Website. Choose below option which....")
		return fbTemplate.reply(text, senderID)


	}


	function quickmsg(brand_id, senderID){
		var Electronics = fbTemplate.createQuickReply('Electronics',constants.ELECTRONICS)
		var Garments = fbTemplate.createQuickReply('Garments',constants.GARMENT)
		var Footware = fbTemplate.createQuickReply('Footware',constants.FOOTWARE)
		var Books = fbTemplate.createQuickReply('Books',constants.BOOKS)
		var Sports = fbTemplate.createQuickReply('Sports',constants.SPORTS)
		var text1=fbTemplate.quickReplyMessage("welcome to our Splendid E-Commerce Website. Choose below option which you want to buy",[Electronics,Garments,Footware,Books,Sports])
		return fbTemplate.reply(text1, senderID)
	}
	function quickmsg1(senderID){
		var buy = fbTemplate.createQuickReply('BUY',constants.BUY)
		var goback = fbTemplate.createQuickReply('GO BACK',constants.GOBACK)
		var Detail = fbTemplate.createQuickReply('DETAIL',constants.DETAIL)
		
		var text1=fbTemplate.quickReplyMessage("welcome to our Splendid E-Commerce Website. Choose below option which you want to buy",[buy,goback,Detail])
		return fbTemplate.reply(text1, senderID)
	}
	function buttonmsg(senderID){
		/*var neworder = fbTemplate.createPostBackButton('NEW ORDER',constants.NEWORDER)
		var track = fbTemplate.createPostBackButton('Track Order',constants.TRACKORDER)
		 var text4=fbTemplate.buttonMessage("welcome to our Splendid E-Commerce Website. Choose below option which you want to buy",[neworder,track])*/
		var text=fbTemplate.quickReplyMessage("Hi 👋, your personal  Proven bot 👩 Just tell me which brand you’re looking for   & I’ll try to find similar Brand 👗 Let’s Select your brand 🎉")
		return fbTemplate.reply(text,senderID)
		.then(function(){
			return Branddb.getBrandsList()
		})
		.then(function(result){
			console.log(result[1].name)
			var qr = []
			for (var i=0; i<result.length; i++){

				qr[i] = fbTemplate.createQuickReply(result[i].name, 'BRAND_CLICKED-'+result[i].name)

			}
			var message = fbTemplate.quickReplyMessage('Choose yoour Brand here..', qr)
				return fbTemplate.reply(message, senderID)
		})
		/*.then(function(){
			console.log('After buttonmsg')
			// console.log(Brand.())
			Brand.find({}, function(err, result){
				if(err) console.log(err)
					//console.log(result)
				for (var i = 0; i < result.length; i++) {
					console.log(result[i].name)
				}
					
			})
			// db.getBrandsList()
		})*/
	}


	function message1(senderID){
		Textdb.Message()
		.then(function(result){

			var text = fbTemplate.quickReplyMessage(result[0].title)
			return fbTemplate.reply(text,senderID)

		})
	}
	function buttonmsgforrestart(senderID){
		/*var neworder = fbTemplate.createPostBackButton('NEW ORDER',constants.NEWORDER)
		var track = fbTemplate.createPostBackButton('Track Order',constants.TRACKORDER)
		 var text4=fbTemplate.buttonMessage("welcome to our Splendid E-Commerce Website. Choose below option which you want to buy",[neworder,track])*/
		var text=fbTemplate.quickReplyMessage("Let’s Select your brand  🎉")
		return fbTemplate.reply(text,senderID)
		.then(function(){
			return Branddb.getBrandsList()
		})
		.then(function(result){
			var qr = []
			for (var i=0; i<result.length; i++){
				qr[i] = fbTemplate.createQuickReply(result[i].name, 'BRAND_CLICKED-'+result[i].id)

			}
			var message = fbTemplate.quickReplyMessage('here', qr)
				return fbTemplate.reply(message, senderID)
		})
		/*.then(function(){
			console.log('After buttonmsg')
			// console.log(Brand.())
			Brand.find({}, function(err, result){
				if(err) console.log(err)
					//console.log(result)
				for (var i = 0; i < result.length; i++) {
					console.log(result[i].name)
				}
					
			})
			// db.getBrandsList()
		})*/
	}
	function genericmsg(senderID){
		var text3 = fbTemplate.createPostBackButton('BUY',constants.BUTTON)
		var buy = fbTemplate.createQuickReply('BUY',constants.BUY)
		var goback = fbTemplate.createQuickReply('GO BACK',constants.GOBACK)
		var Detail = fbTemplate.createQuickReply('DETAIL',constants.DETAIL)
		// var text1=fbTemplate.quickReplyMessage("val",[buy,goback,Detail])
		
		
		//var text_11= fbTemplate.createElement('CricketKit', 'Junior Cricket Kit','https://flipkart.com','https://mms-cloudfront.customink.com/mms/images/catalog/0845e2199d4e8e2ac9184ccdadb586dc/colors/04652/views/alt/front_large_extended.png?ixlib=rails-2.1.3&w=412&h=470&fit=crop&dpr=1&bg=ffffff&fm=pjpg&q=39&auto=compress',[text3])
		 //var text6= fbTemplate.createElement('Badminton', 'Casual dress','https://flipkart.com','https://rukminim1.flixcart.com/image/832/832/j1qqs280/sport-bag/s/g/n/sunr-9631-wtg-bt6-9631-wtg-bt6-yonex-40-original-imaerm2ampsuwdjq.jpeg?q=70',[text3])
		// var text7=fbTemplate.genericMessage([text_11, text6],[buy,goback,Detail])
		 


		 
		var text=fbTemplate.quickReplyMessage("Below are your products...")
		return fbTemplate.reply(text,senderID)
		.then(function(){
			return Productdb.getproductList()
		})
		.then(function(result){
			var qr = []
			for (var i=0; i<result.length; i++){
				qr[i] = fbTemplate.createElement(result[i].name, result[i].description,result[i].product_url,result[i].image,[text3])

			}
			var message = fbTemplate.genericMessage(qr,[buy,goback,Detail])
				return fbTemplate.reply(message, senderID)
		})

	}
	function listmsg(senderID){
		var text3 = fbTemplate.createPostBackButton('list1',constants.BUTTON)
		// var text3 = fbTemplate.createPostBackButton('list2',constants.BUTTON)
		var text6= fbTemplate.createElement('CricketKit', 'Casual dress','https://flipkart.com','',[text3])
		 //var text6= fbTemplate.createElement('tshirt', 'Casual dress','https://flipkart.com','https://mms-cloudfront.customink.com/mms/images/catalog/0845e2199d4e8e2ac9184ccdadb586dc/colors/04652/views/alt/front_large_extended.png?ixlib=rails-2.1.3&w=412&h=470&fit=crop&dpr=1&bg=ffffff&fm=pjpg&q=39&auto=compress',[text3])
		// var text=fbTemplate.quickReplyMessage("welcome")
		var text8=fbTemplate.listMessage('compact',[text6,text6],[text3])

		return fbTemplate.reply(text8,senderID)
	}
	
	function GetProductsForBrandID(brand_id, senderID) {
		//var buy1 = fbTemplate.createPostBackButton('Buy',constants.BUTTON)
		//var buy = fbTemplate.createQuickReply('BUY',constants.BUY)
		var goback = fbTemplate.createQuickReply('⬅️ BACK',constants.GOBACK)
		//var Detail = fbTemplate.createQuickReply('DETAIL',constants.DETAIL)

		Productdb.GetProductsForBrandID(brand_id)
		
		.then(function(products){
			console.log('products')
			console.log(products.length)
			var crousel=[];

			for (var i = 0; i < products.length; i++) {
				var buy2 = fbTemplate.createWebUrlButton('Buy', products[i].product_url)
				crousel[i]=fbTemplate.createElement(products[i].name, products[i].desc,products[i].product_url,products[i].image,[buy2])
			}

			var message = fbTemplate.genericMessage(crousel,[goback])
				return fbTemplate.reply(message, senderID)
		})
	}

	/*function getstarted(payload){
		{ 
  		"get_started":{
    		"payload":payload
  }
}
	}*/

 return {
 	welmsg:welmsg,
 	quickmsg:quickmsg,
 	buttonmsg:buttonmsg,
 	genericmsg:genericmsg,
 	listmsg:listmsg,
 	buttonmsgforrestart:buttonmsgforrestart,
 	GetProductsForBrandID: GetProductsForBrandID,
 	message1:message1,
 	poweredbymsg:poweredbymsg
 	
 	
 	
 }
 // return{

  }

