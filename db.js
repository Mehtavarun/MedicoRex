var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/medicorex');

mongoose.Promise = global.Promise;

	const profileSchema = new Schema({
		name: {
			type: String,
			required: [true, 'FullName is required'],
			unique: false
		},
		age: {
			type: Number,
			min: 1,
			max:90,
			unique: false,
			required: [true, 'Age is required']
		// constrainst on age insertion
		},
		address: {
			type: String,
			required: [true, 'Address is required'],
			unique: false
		}
	});
	var Profile = mongoose.model('Profile', profileSchema)
	
	const medicineSchema = new Schema({
		name: {
			type: String,
			required: [true, 'FullName is required'],
			unique: false
		},
		category: {
			type: String,
			required: [true, 'type is required'],
			unique: false
		// constrainst on age insertion
		},
		price_Rs: {
			type: Number,
			required: [true, 'price is required'],
			unique: false
		},
		drugged: {
			type: Boolean,
			default: false,
			unique: false
		},
		available: {
			type: Boolean,
			default: true,
			unique: false
		}
	});
	const Medicine = mongoose.model('Medicine', medicineSchema)

	const patientSchema = new Schema({
		_id:{
			type: String,
			required: [true, 'id for patient is required']
		},
		disease: {
			type: String,
			required: [true, 'disease name is required'],
			unique: false
		},
		Medicine: {
			type: String,
			required: [true, 'type of medicine is required'],
			unique: false
		// constrainst on age insertion
		},
		visits: {
			type: Number,
			default: 0,
			unique: false
		},
		emergency: {
			type: Boolean,
			default: false,
			unique: false
		},
		room_assigned: {
			type: Number,
			unique: false
		},
		improvement: {
			type: String,
			default: 'first visit',
			unique: false
		},
		doctor_on_duty: {
			type: String,
			required: [true, 'Name of doctor/nurse is required'],
			unique: false
		},
		date: {
			type: String,
			required: [true, 'Todays date is required'],
			unique: false
		}
	});
	const Patient = mongoose.model('patient', patientSchema)

	const reportSchema = new Schema({
		_id:{
			type: String,
			required: [true, 'id for patient is required']
		},
		name: {
			type: String,
			required: [true, 'FullName is required'],
			unique: false
		},
		bill: {
			type: Number,
			required: [true, 'bill amount is required'],
			unique: false
		// constrainst on age insertion
		},
		available: {
			type: Boolean,
			required: [true, 'Address is required'],
			default: true,
			unique: false
		}
	});
	const Report = mongoose.model('Report', reportSchema)
// });

module.exports = {
	Report:Report,
	Patient:Patient,
	Medicine:Medicine,
	Profile:Profile
};

