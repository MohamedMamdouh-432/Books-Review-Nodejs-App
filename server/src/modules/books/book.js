const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
    {
        isbn: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        authors: {
            type: [String],
            required: true,
            trim: true,
        },
        publisher: {
            type: String,
            default: '',
            trim: true,
        },
        publishDate: {
            type: Date,
        },
        description: {
            type: String,
            default: '',
        },
        genre: {
            type: [String],
            default: [],
        },
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review',
            },
        ],
        pages: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model('Book', bookSchema);
