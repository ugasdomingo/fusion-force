//Import tools
import { Schema, model } from 'mongoose';

//Create Quote Schema for Solar panels
const quoteSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now(),
        },
        quotesName: {
            type: String,
            required: true,
            trim: true,
        },
        quotesEmail: {
            type: String,
            trim: true,
        },
        quotesPhone: {
            type: String,
            required: true,
            trim: true,
        },
        quotesZipcode: {
            type: String,
            required: true,
        },
        quotesDirection: {
            type: String,
            required: true,
        },
        quotesType: {
            type: String,
            required: true, //Home, Business, Community
        },
        quotesTime: {
            type: String,
            required: true, //Día 08-23 -- Noche 00-07 -- Todo el día
        },
        quoteStatus: {
            type: String,
            default: 'New', //Attended - Customer
        },
        img: {
            public_id: {
                type: String,
                required: true,
            },
            secure_url: {
                type: String,
                required: true,
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

export default model('Quote', quoteSchema);
