const moongose = require('mongoose');

const PointSchema = new moongose.Schema({
    type: {
        type: String, 
        enum: ['Point'],
        required: true,
    },
    cordinates: {
        type: [Number],
        required: true,
    }
});

module.exports = PointSchema;