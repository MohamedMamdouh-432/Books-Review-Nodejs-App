const express = require('express');
const app = express();
const booksRoutes = require('./modules/books/books.routes');
const reviewsRoutes = require('./modules/reviews/reviews.routes');
const authRoutes = require('./modules/auth/auth.routes');

app.use(express.json());

// Routes
app.use('/api/books', booksRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
