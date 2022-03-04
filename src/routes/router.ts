import express from "express";
import bodyParser from "body-parser";
import { verifyToken } from '../middlewares/authentication.middleware';

import WordController from "../controllers/word.controller";
import AuthController from "../controllers/auth.controller";

const router = express.Router();
const jsonParser = bodyParser.json();
const wordController = new WordController();
const authController = new AuthController();

router.get('/api/word/get', jsonParser, wordController.getWord);

router.post('/api/auth/login', jsonParser, authController.login);

router.use('/api/word/create', verifyToken);
router.post('/api/word/create', jsonParser, wordController.createWord);

router.use('/api/word/get-all', verifyToken);
router.get('/api/word/get-all', jsonParser, wordController.getAllWords);

export default router;