const express = require('express'),
	  app = express(),
	  cookieParser = require('cookie-parser'),
	  bodyParser = require('body-parser'),
	  urlencodedParser = bodyParser.urlencoded({extended:false}),
	  url = 'mongodb://varun:password@ds115352.mlab.com:15352/chat',
	  mongo = require('mongodb').MongoClient;

app.use(bodyParser.json());

require('./routes.js')(app, urlencodedParser, mongo, url);
require('./routes/profile.js')(app, urlencodedParser, mongo, url);
require('./routes/medicine.js')(app, urlencodedParser, mongo, url);
require('./routes/reportbill.js')(app, urlencodedParser, mongo, url);
require('./routes/patientproblem.js')(app, urlencodedParser, mongo, url);

app.use((err, req, res, next)=>{
	res.status(422).send({error: err.message});
})

app.listen(6500, ()=>{
	console.log('server running at 6500');
});