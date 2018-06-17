module.exports = (app, urlencodedParser)=>{
const schema = require('../db');

	app.get('/api/patient', (req, res, next)=>{
		schema.Patient.find({})
		.then((data)=>{
			res.send(data);
		}).catch(next);
	});

	app.delete('/api/patient/:id', (req, res, next)=>{
		schema.Patient
		.findByIdAndRemove({_id: req.params.id})
		.then ((data)=>{
			res.send(data);
		}).catch(next);
	});

	app.post('/api/patient/create', (req, res, next)=>{
		
			schema.Profile.find({_id: req.body._id})
			.then((data)=>{
				if(data.length > 0){
					schema.Patient.create(req.body)
					.then((data)=>{
						res.send(data);
					}).catch(next);
				} else {
					res.send('No patient exist of that id');
				}
			}).catch(next);
	});

	app.put('/api/patient/:id', (req, res, next)=>{
		schema.Patient.findByIdAndUpdate({_id: req.params.id}, req.body)
		.then((data)=>{
			schema.Patient.findOne({_id:req.params.id}).then((data)=>{
				res.send(data);
			});
		}).catch(next);
	});
}