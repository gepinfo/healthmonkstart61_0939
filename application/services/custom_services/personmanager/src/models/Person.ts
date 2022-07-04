
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PersonSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   dob: Number,
   age: Number,
   gender-bio: String,
   gender-preference: String,
   metricsystem: Boolean,
   height: String,
   currentweight: Number,
   currentactivitylevel: String,
   foodpreference: String,
   currentfitnesslevel: String,
   medicalconditions: String,
   otherconditions: String
})

const PersonModel = mongoose.model('Person', PersonSchema, 'Person');
export default PersonModel;
