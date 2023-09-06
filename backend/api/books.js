import express from 'express';
import { addBook } from '../controllers/books.js';
import { getBooks } from '../controllers/books.js';
import { getBook } from '../controllers/books.js';
import { updateBook } from '../controllers/books.js';

const router = express.Router();

router.post('/', addBook);

router.get('/', getBooks);

router.get('/:id', getBook);

router.put('/:id', updateBook);

export default router;