# Books Review Nodejs App

A simple Nodejs application that allows users to create, read, update and delete books.

## Features

- User authentication using JWT
- Book creation, reading, updating and deleting
- User can add a review to a book
- User can view all books and their reviews

## Technologies Used

- Nodejs
- Expressjs
- Mongoose
- JsonWebToken
- Bcryptjs
- Morgan
- Validator
- Nodemon

## Installation

- Clone the repository
- Install the dependencies using npm install
- Create a .env file in the root directory and add the following variables:
  - PORT: The port number to run the application
  - MONGO_URI: The MongoDB connection string
  - JWT_SECRET: The secret key for JWT
  - JWT_EXPIRE: The time to expire the JWT
- Run the application using npm run dev

## API Endpoints

- POST /api/v1/auth/register: Register a new user
- POST /api/v1/auth/login: Login an existing user
- GET /api/v1/books: Get all books
- GET /api/v1/books/:id: Get a book by id
- POST /api/v1/books: Create a new book
- PUT /api/v1/books/:id: Update a book
- DELETE /api/v1/books/:id: Delete a book
- POST /api/v1/books/:id/reviews: Add a review to a book
- GET /api/v1/books/:id/reviews: Get all reviews for a book

## License

This project is licensed under the MIT License. See the LICENSE file for details.
