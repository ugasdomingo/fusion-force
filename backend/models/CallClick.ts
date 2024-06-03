//Import tools
import { Schema, model } from 'mongoose';

//Create Leads Schema
const clicksSchema = new Schema({
    date: {
        type: Date,
        default: Date.now(),
    },
    userClick: {
        type: Number,
        required: true,
    },
});

export default model('CLick', clicksSchema);
