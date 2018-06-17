module.exports = (app, urlencodedParser)=>{

const schema = require('../db');


// route to get all the reports that are to be given to patient in the database
	app.get('/api/report', (req, res, next)=>{
		schema.Report.find({})
		.then((data)=>{
			res.send(data);
		}).catch(next);
	});


	//route to delete the report
	app.delete('/api/report/:id', (req, res, next)=>{
		//report is found by ID  then deleted and 
		//in response the data is sent which is deleted
		schema.Report
		.findByIdAndRemove({_id: req.params.id})
		.then ((data)=>{
			res.send(data);
		}).catch(next);
	});


	//route to registering new reports arrived
	app.post('/api/report/create', (req, res, next)=>{

		schema.Profile.find({_id: req.body._id})
		.then((data)=>{
			if(data.length > 0){// here it is checked if patient details are added to be
				schema.Report.create(req.body)// are in profile table or not
				.then((data)=>{
					res.send(data);//if user has no profile than the error is sent 
				}).catch(next);
			} else {
				res.send('No patient exist of that id');
			}
		}).catch(next);
	});


	//after the data has been updated in mongo the new data is sent back

	app.put('/api/report/:id', (req, res, next)=>{
		schema.Report.findByIdAndUpdate({_id: req.params.id}, req.body)
		.then(()=>{
			schema.Report.findOne({_id:req.params.id}).then((data)=>{
				res.send(data);
			}).catch(next);
		}).catch(next);
	});
}