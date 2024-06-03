//Import tools
import { Schema, model } from 'mongoose';

//Create Post Schema
const postSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now(),
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
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
        body: {
            type: String,
            required: true,
        },
        urlVideo: {
            type: String,
        },
        author: {
            type: String,
            default: 'Fenintegral',
        },
    },
    {
        versionKey: false,
    }
);

export default model('Post', postSchema);
