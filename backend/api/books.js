import express from 'express';
import { addBook } from '../controllers/books.js';
import { getBooks } from '../controllers/books.js';
import { getBook } from '../controllers/books.js';

const router = express.Router();

router.post('/', addBook);

router.get('/', getBooks);

router.get('/:id', getBook);

export default router;