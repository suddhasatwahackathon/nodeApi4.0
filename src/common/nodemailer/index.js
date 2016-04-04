 var nodemailer = require('nodemailer');

 	    var transporter = nodemailer.createTransport({
      service : "gmail",
      auth    : {
        user     : "slipbeepnodemailer@gmail.com",

        // neither of these work
        pass : "nodemailer@12345",
        // pass : 'my"annoying\'password',
      }
    });
    var sendmail = function(email){
    	console.log("emaail is", email);
    	var mailOptions = {
        from: '"Slipbeep" <support@slipbeep.com>', // sender address
        to: email, // list of receivers
        subject: "Thanks for subscribing", // Subject line
        text: "Thanks for subscribing", // plaintext body
        html: "<p>All Gaadi solutions there when we will be finally here.</p><p>Subscribe early for , Free services, Mega cashbacks & discounts After subscription of the subscriber.Thanks for ur interest, we will notify u.</p><pThanks Slipbeep</p>" // html body
      } 
      return mailOptions;
    }    
    

    var exportObj = {
    	transporterObj:transporter,
    	mailOptionsObj:sendmail(email)
    };
    module.exports = exportObj; 