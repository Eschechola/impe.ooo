import Word from "../interfaces/Word";
import { getAllAsync, createAsync } from "../infrastrucutre/repositories/word.repository";

export const getRandomWordAsync = async (): Promise<Word> => {
    const words = await getAllAsync();
    return getRandomElementFromArray(words);
}

export const createWordAsync 
    = async (word: String): Promise<Word> => createAsync(word)

const getRandomElementFromArray = (words: Word[]): Word => {
    const randomIndice = Math.floor(Math.random() * words.length);
    return words[randomIndice];
}