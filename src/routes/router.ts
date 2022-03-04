import express from "express";
import { verifyToken } from '../middlewares/authentication.middleware';

import WordController from "../controllers/word.controller";

const router = express.Router();
const wordController = new WordController();

//router.use('/api/word/get-word', verifyToken);
router.get('/api/word/get-word', wordController.getWord);

export default router;