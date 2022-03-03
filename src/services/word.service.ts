import Word from "../interfaces/Word";
import { getAllAsync } from "../infrastrucutre/repositories/word.repository";

export const getRandomWordAsync = async (): Promise<Word> => {
    const words = await getAllAsync();
    return words[0];
}