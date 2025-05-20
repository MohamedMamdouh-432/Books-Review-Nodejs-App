const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 10,
        },
        comment: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model('Review', reviewSchema);
