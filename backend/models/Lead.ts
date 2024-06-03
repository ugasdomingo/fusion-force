//Import tools
import { Schema, model } from 'mongoose';

//Create Leads Schema
const leadsSchema = new Schema(
    {
        date: {
            type: String,
            required: true,
        },
        leadsName: {
            type: String,
            trim: true,
        },
        leadsEmail: {
            type: String,
            trim: true,
        },
        callOnDate: {
            type: String,
        },
        leadsPhone: {
            type: String,
            trim: true,
        },
        leadsStatus: {
            type: String,
            default: 'New', //Attended - Customer
        },
        askFor: {
            type: String,
            required: true,
        },
        img: {
            public_id: {
                type: String,
            },
            secure_url: {
                type: String,
            },
        },
        politiquesAccepted: {
            type: Boolean,
            default: true,
        },
    },
    {
        versionKey: false,
    }
);

export default model('Leads', leadsSchema);
