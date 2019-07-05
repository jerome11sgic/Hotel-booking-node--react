const monngoose = require("mongoose");
const Schema = monngoose.Schema;

const rentalSchema = new Schema({
	title: { type: String, required: true, max: [128, 'Too long, max is 128 characters'] },
	city: { type: String, required: true, lowercase: true },
	street: { type: String, required: true, min: [4, 'Too short, min is 4 characters'] },
	catergory: { type: String, required: true, lowercase: true },
	image: { type: String, required: true },
	bedrooms: Number,
	shared: Boolean,
	description: { type: String, required: true },
	dailyRate: Number,
	createAt: { type: String, default: Date.now },
	user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = monngoose.model('Rental', rentalSchema)