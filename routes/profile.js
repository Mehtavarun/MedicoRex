module.exports = (app, urlencodedParser, mongo,  jwt)=>{

const schema = require('../db');


// route to get all the profiles in the database
	app.get('/api/profile', (req, res, next)=>{
		schema.Profile.find({})
		.then((data)=>{
			res.send(data);
		}).catch(next);
	});


// route to verify the user and delete the profile of patient
	app.delete('/api/profile/delete/:id', (req, res, next)=>{

					//User is found by ID  then deleted and 
					//in response the data is sent which is deleted
					schema.Profile
					.findByIdAndRemove({_id: req.params.id})
					.then ((data)=>{
						res.send(data);
					}).catch(next);										
	});


	//route to registering new patient
	app.post('/api/profile/create', (req, res, next)=>{
		
		schema.Profile.create(req.body)
		.then((data)=>{			//after the user is created the data is sent
			res.send(data);		
		}).catch(next);

	});

	
	//the user found by id and then updated by the data sent by user
	app.put('/api/profile/update/:id', (req, res, next)=>{

		schema.Profile.findByIdAndUpdate({_id: req.params.id}, req.body)
		.then(()=>{
			
			//after the data has been updated in mongo the new data is sent back
			schema.Profile.findOne({_id:req.params.id}).then((data)=>{
				res.send(data);
			}).catch(next);
		
		}).catch(next);
	});
}