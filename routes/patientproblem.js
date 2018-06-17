module.exports = (app, urlencodedParser)=>{
const schema = require('../db');

	
// route to get all the patients and their related information in the database
	app.get('/api/patient', (req, res, next)=>{
		schema.Patient.find({})
		.then((data)=>{
			res.send(data);
		}).catch(next);
	});


	//route to delete the patient details
	app.delete('/api/patient/:id', (req, res, next)=>{

		//patient is found by ID  then deleted and 
		//in response the data is sent which is deleted
		schema.Patient
		.findByIdAndRemove({_id: req.params.id})
		.then ((data)=>{
			res.send(data);
		}).catch(next);
	});


	//route to saving the details of patient
	app.post('/api/patient/create', (req, res, next)=>{
		
			schema.Profile.find({_id: req.body._id})
			.then((data)=>{
				if(data.length > 0){	// here it is checked if patient details are added to be
					schema.Patient.create(req.body)	// are in profile table or not
					.then((data)=>{
						res.send(data);		//if user has no profile than the error is sent 
					}).catch(next);
				} else {
					res.send('No patient exist of that id');
				}
			}).catch(next);
	});


	//after the data has been updated in mongo the new data is sent back
	app.put('/api/patient/:id', (req, res, next)=>{
		schema.Patient.findByIdAndUpdate({_id: req.params.id}, req.body)
		.then((data)=>{
			schema.Patient.findOne({_id:req.params.id}).then((data)=>{
				res.send(data);
			});
		}).catch(next);
	});
}