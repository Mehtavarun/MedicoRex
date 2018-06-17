module.exports = (app, urlencodedParser)=>{

const schema = require('../db');

	app.get('/api/medicine', (req, res, next)=>{
		schema.medicine.find({})
		.then((data)=>{
			res.send(data);
		}).catch(next);
	});

	app.delete('/api/medicine/:id', (req, res, next)=>{
		schema.Medicine
		.findByIdAndRemove({_id: req.params.id})
		.then ((data)=>{
			res.send(data);
		}).catch(next);
	});

	app.post('/api/medicine/create', (req, res, next)=>{
		
		schema.Medicine.create(req.body)
		.then((data)=>{
			res.send(data);
		}).catch(next);

	});

	app.put('/api/medicine/:id', (req, res, next)=>{
		schema.Medicine.findByIdAndUpdate({_id: req.params.id}, req.body)
		.then(()=>{
			schema.Medicine.findOne({_id:req.params.id}).then((data)=>{
				res.send(data);
			});
		}).catch(next);
	});
}