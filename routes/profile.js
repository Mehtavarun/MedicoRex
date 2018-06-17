module.exports = (app, urlencodedParser, mongo, url)=>{

const schema = require('../db');

	app.get('/api/profile', (req, res, next)=>{
		schema.Profile.find({})
		.then((data)=>{
			res.send(data);
		}).catch(next);
	});



	app.delete('/api/profile/delete/:token', (req, res, next)=>{


		let token =  req.query.token || req.headers['authorization'] || req.params.token;
		
		//if token is recieved
		if(token){

			//verify token with same key
			jwt.verify(token, 'supersafesecretkey', (err, authData)=>{
				
				//if invalid token is sent then send message FORBIDDEN
				if(err) {
					res.sendStatus(403);
				}else{
					schema.Profile
					.findByIdAndRemove({_id: req.params.id})
					.then ((data)=>{
						res.send(data);
					}).catch(next);										
				}
			});	

			//if no token is sent then send message FORBIDDEN
		} else {
			res.sendStatus(403);
		}

	
	});



	app.post('/api/profile/create', (req, res, next)=>{
		
		schema.Profile.create(req.body)
		.then((data)=>{
			res.send(data);		
		}).catch(next);

	});

	

	app.put('/api/profile/update', (req, res, next)=>{
		schema.Profile.findByIdAndUpdate({_id: req.params.id}, req.body)
		.then(()=>{
			schema.Profile.findOne({_id:req.params.id}).then((data)=>{
				res.send(data);
			}).catch(next);
		}).catch(next);
	});
}