# Books Review Nodejs App

A simple Nodejs application that allows users to create, read, update and delete books.

## Features

-   Retrieve a list of all books available in the bookshop
-   Search for specific books and retrieve their details based on the book’s ISBN code, author names, and titles
-   Retrieve reviews/comments for specified books
-   Register as a new user of the application
-   Login to the application
-   Add a new review for a book (logged-in users only)
-   Modify a book review (logged-in users can modify only their own reviews)
-   Delete a book review (logged-in users can delete only their own reviews)
-   (Multiple users) Access the application at the same time to view and manage different book reviews simultaneously

## Technologies Used

-   Nodejs
-   Expressjs
-   Mongoose
-   JsonWebToken
-   Bcryptjs
-   Morgan
-   Validator
-   Nodemon

## Installation

-   Clone the repository
-   Install the dependencies using npm install
-   Create a .env file in the root directory and add the following variables:
    -   PORT: The port number to run the application
    -   MONGO_URI: The MongoDB connection string
    -   JWT_SECRET: The secret key for JWT
    -   JWT_EXPIRE: The time to expire the JWT
-   Run the application using npm run dev

## API Endpoints

### General users:

    Get the book list available in the shop.
    Get the books based on ISBN.
    Get all books by Author.
    Get all books based on Title.
    Get book Review.
    Register New user.
    Login as a Registered user.

### Registered Users:

    Add/Modify a book review.
    Delete book review added by that particular user.

### More Features:

    Get all books – Using async callback function
    Search by ISBN – Using Promises
    Search by Author
    Search by Title
    Submission of Project GitHub Link

## License

This project is licensed under the MIT License. See the LICENSE file for details.
