
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const homedataSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   userid: String,
   kcalgoal: Number,
   kcalintake: Number,
   watergoal: Number,
   waterintake: Number,
   weightgoal: Number,
   currentweight: Number,
   currentsteps: Number,
   currentheartpoints: Number,
   heartpointtarget: Number,
   recomendedfoods: String
})

const homedataModel = mongoose.model('homedata', homedataSchema, 'homedata');
export default homedataModel;
