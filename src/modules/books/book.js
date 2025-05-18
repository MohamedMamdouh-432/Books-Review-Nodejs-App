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
        publicationDate: {
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
        language: {
            type: String,
            default: 'English',
        },
        coverImageUrl: {
            type: String,
            default: '',
        },
        averageRating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
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
        price: {
            type: Number,
            default: 0,
        },
        stock: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model('Book', bookSchema);
