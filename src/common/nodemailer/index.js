exports.nodemailer = function(nodemailer){
	var transporter = nodemailer.createTransport({
	  service : "gmail",
	  auth    : {
	    user     : "suddha90@gmail.com",

	    // neither of these work
	    pass : "satwa900900",
	    // pass : 'my"annoying\'password',
	  }
	});
	var mailSender=function(toEmail){
	// setup e-mail data with unicode symbols
		var mailOptions = {
		    from: '"Slipbeep" <support@slipbeep.com>', // sender address
		    to: toEmail, // list of receivers
		    subject: "Thanks for subscribing", // Subject line
		    text: "Thanks for subscribing", // plaintext body
		    html: "<p>All Gaadi solutions there when we will be finally here.</p><p>Subscribe early for , Free services, Mega cashbacks & discounts After subscription of the subscriber.Thanks for ur interest, we will notify u.</p><pThanks Slipbeep</p>" // html body
			}
		return mailOptions;
	}

}
