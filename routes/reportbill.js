module.exports = (app, urlencodedParser)=>{

const schema = require('../db');

	app.get('/api/report', (req, res, next)=>{
		schema.Report.find({})
		.then((data)=>{
			res.send(data);
		}).catch(next);
	});

	app.delete('/api/report/:id', (req, res, next)=>{
		schema.Report
		.findByIdAndRemove({_id: req.params.id})
		.then ((data)=>{
			res.send(data);
		}).catch(next);
	});

	app.post('/api/report/create', (req, res, next)=>{
		
		schema.Report.create(req.body)
		.then((data)=>{
			res.send(data);
		}).catch(next);

		schema.Profile.find({_id: req.body._id})
		.then((data)=>{
			if(data.length > 0){
				schema.Report.create(req.body)
				.then((data)=>{
					res.send(data);
				}).catch(next);
			} else {
				res.send('No patient exist of that id');
			}
		}).catch(next);
	});

	app.put('/api/report/:id', (req, res, next)=>{
		schema.Report.findByIdAndUpdate({_id: req.params.id}, req.body)
		.then(()=>{
			schema.Report.findOne({_id:req.params.id}).then((data)=>{
				res.send(data);
			}).catch(next);
		}).catch(next);
	});
}