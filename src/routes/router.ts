import express from "express";
import bodyParser from "body-parser";
import { verifyToken } from '../middlewares/authentication.middleware';

import WordController from "../controllers/word.controller";

const router = express.Router();
const jsonParser = bodyParser.json();
const wordController = new WordController();

router.get('/api/word/get', jsonParser, wordController.getWord);

router.use('/api/word/create', verifyToken);
router.post('/api/word/create', jsonParser, wordController.createWord);

export default router;