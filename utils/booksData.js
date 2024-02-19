// booksData.js
const fs = require('fs');

const booksFile1 = 'books1.csv'; // File containing books for regular users
const booksFile2 = 'books2.csv'; // File containing additional books for admin users

const getAllBooks = (userType) => {
    let books = [];
    if (userType === 'regular') {
        books = readBooksFromFile(booksFile1);
    } else if (userType === 'admin') {
        books = readBooksFromFile(booksFile1).concat(readBooksFromFile(booksFile2));
    }
    return books;
};

const readBooksFromFile = (filename) => {
    // Read books from CSV file and return as an array
};

const addBook = (bookName, author, publicationYear) => {
    // Implementation logic for adding a book to the file
};

const deleteBook = (bookName) => {
    // Implementation logic for deleting a book from the file
};

module.exports = { getAllBooks, addBook, deleteBook };
