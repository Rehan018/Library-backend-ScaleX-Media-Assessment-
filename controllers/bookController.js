const fs = require('fs');

function getBooks(req, res) {
  const userType = req.user.type;
  let books;

  if (userType === 'admin') {
    const adminBooks = fs.readFileSync('adminUser.csv', 'utf8').split('\n');
    books = adminBooks.map(book => book.trim());
  } else {
    const regularBooks = fs.readFileSync('regularUser.csv', 'utf8').split('\n');
    books = regularBooks.map(book => book.trim());
  }

  res.json({ books });
}

function addBook(req, res) {
  const { bookName, author, publicationYear } = req.body;

  if (typeof bookName !== 'string' || typeof author !== 'string' || isNaN(publicationYear)) {
    return res.status(400).json({ message: 'Invalid parameters' });
  }

  const newBook = `${bookName},${author},${publicationYear}`;

  fs.appendFileSync('regularUser.csv', `\n${newBook}`);

  res.json({ message: 'Book added successfully' });
}

function deleteBook(req, res) {
  const { bookName } = req.body;

  if (typeof bookName !== 'string') {
    return res.status(400).json({ message: 'Invalid parameters' });
  }

  const books = fs.readFileSync('regularUser.csv', 'utf8').split('\n');
  const updatedBooks = books.filter(book => book.trim().toLowerCase() !== bookName.trim().toLowerCase());
  fs.writeFileSync('regularUser.csv', updatedBooks.join('\n'));

  res.json({ message: 'Book deleted successfully' });
}

module.exports = {
  getBooks,
  addBook,
  deleteBook
};
