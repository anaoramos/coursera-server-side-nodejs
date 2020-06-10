const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const commentSchemma = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment : {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
  }, {
        timestamps: true //auto. update this values whenever we update the doc.
});


const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: '' //espec. default value
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    feature: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchemma] //sub-doc inside dish 
}, {
    timestamps: true //auto. update this values whenever we update the doc.
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;