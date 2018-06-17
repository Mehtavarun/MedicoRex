module.exports = (app, urlencodedParser)=>{

const schema = require('../db');

// route to get all the medicines in the database
	app.get('/api/medicine', (req, res, next)=>{
		schema.medicine.find({})
		.then((data)=>{
			res.send(data);
		}).catch(next);
	});


	//route to delete the medicine
	app.delete('/api/medicine/:id', (req, res, next)=>{
		//Medicine is found by ID  then deleted and 
		//in response the data is sent which is deleted
		schema.Medicine
		.findByIdAndRemove({_id: req.params.id})
		.then ((data)=>{
			res.send(data);
		}).catch(next);
	});

	//route to registering new medicine arrived
	app.post('/api/medicine/create', (req, res, next)=>{
		
		schema.Medicine.create(req.body)
		.then((data)=>{
			res.send(data);
		}).catch(next);

	});


	//after the data has been updated in mongo the new data is sent back
	app.put('/api/medicine/:id', (req, res, next)=>{

		schema.Medicine.findByIdAndUpdate({_id: req.params.id}, req.body)
		.then(()=>{
		
			schema.Medicine.findOne({_id:req.params.id}).then((data)=>{
				res.send(data);
			});
		
		}).catch(next);
	});
}