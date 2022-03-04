import { UpdatedAt } from "sequelize-typescript";
import Word from "../../interfaces/Word";
import context from "../context/context";
import WordModel from "../models/word.model";

context.sync();

export const getAllAsync = async (): Promise<Word[]> => {
    const words = await WordModel.findAll();
    return words as Word[];
}

export const createAsync = async (word: String): Promise<Word> => {
    const wordToCreate = {
        Text: word,
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
    }

    return await WordModel.create(wordToCreate)
}