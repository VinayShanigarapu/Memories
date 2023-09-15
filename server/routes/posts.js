import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// http:/localhost:5000/posts

router.get('/', getPosts); // everybody can view posts
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost); // patch is used for updating existing docs, to update we need id
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost); // it is patch because like is nothing but updating
export default router;
