var constants = require("./payload"),
  foo = require('./implementation'),
  externalApi = require('./api'),
  Q = require('q'),
  implement = foo();

function HandlePayload(payload, senderID) {
  if (payload == "Gucci") {
  	console.log("sport")
  	 return implement.genericmsg(senderID)
  } 
  else if(payload == "GET_STARTED")
  {
    console.log("messageText")
      // return implement.welmsg(senderID)
      // return implement.quickmsg(senderID)
       return implement.buttonmsg(senderID)
  }
  else if(payload == "RESTART")
  {
    console.log("messageText")
      // return implement.welmsg(senderID)
      // return implement.quickmsg(senderID)
       return implement.buttonmsg(senderID)
  }
  else if(payload == "SHOP")
  {
    console.log("messageText")
      // return implement.welmsg(senderID)
      // return implement.quickmsg(senderID)
       return implement.buttonmsgforrestart(senderID)
  }
  


  
  else if(payload == "NEWORDER"){
  			console.log("new order")
  			 return implement.quickmsg(senderID)
  }
  else if (payload == "GOBACK") {
    console.log("goback")
     return implement.buttonmsg(senderID)
  }

  else if(payload == "POWERED"){
    console.log("powered by")
    return implement.poweredbymsg(senderID)
  }
  else if (payload.indexOf("BRAND_CLICKED")!=-1) {
  	// console.log("goback")
    var temp = payload.split('-') 
    //console.log(temp)    
    console.log(temp[1])

  	 return implement.GetProductsForBrandID(temp[1], senderID)
  } else {
    console.log('No action found for this payload')
  }
}

exports.HandlePayload = HandlePayload
