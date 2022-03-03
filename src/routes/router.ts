import express from "express";
import WordController from "../controllers/word.controller";

const router = express.Router();
const wordController = new WordController();

router.get('/api/word/get-word', wordController.getWord);

export default router;