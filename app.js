const express = require('express'),
	  app = express(),
	  cookieParser = require('cookie-parser'),
	  bodyParser = require('body-parser'),
	  urlencodedParser = bodyParser.urlencoded({extended:false}),
	  mongo = require('mongodb').MongoClient,
	  jwt = require('jsonwebtoken');

app.use(bodyParser.json());

require('./routes.js')(app, urlencodedParser, mongo,  jwt);
require('./routes/profile.js')(app, urlencodedParser, mongo,  jwt);
require('./routes/medicine.js')(app, urlencodedParser, mongo);
require('./routes/reportbill.js')(app, urlencodedParser, mongo);
require('./routes/patientproblem.js')(app, urlencodedParser, mongo);

app.use((err, req, res, next)=>{
	res.status(422).send({error: err.message});
})

app.get('*',(req, res)=>{
		res.sendStatus(404);
	});

app.get('/',(req, res)=>{
	res.send('hello');
})

app.listen(6500, ()=>{
	console.log('server running at 6500');
});