module.exports = (app, urlencodedParser, mongo, url) =>{

	app.get('*',(req, res)=>{
		res.sendStatus(404);
	});

	app.get('/token/:user', (req, res)=>{

		var user = req.params.user;

		if(!user){
			res.send('You cannot delete patient profile without getting a token');
		} else {
			jwt.sign({user}, 'supersafesecretkey', (err, token)=>{
			
				//	token is sent to client as json which 
				//  can be used further to perform authentication
				res.json({
					loginSuccess:true,
					token 
				})
			});
		}
		
	})
}