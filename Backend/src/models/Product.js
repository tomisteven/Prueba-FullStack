import {Schema, model} from 'mongoose';

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        secure_url: String,
        public_id: String
    },
    price: {
        type: Number,
        required: true
    }



});

export default model('Product', Product);