const express = require('express');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/home', authMiddleware.verifyToken, bookController.getBooks);
router.post('/addBook', authMiddleware.verifyToken, authMiddleware.adminOnly, bookController.addBook);
router.delete('/deleteBook', authMiddleware.verifyToken, authMiddleware.adminOnly, bookController.deleteBook);

module.exports = router;
