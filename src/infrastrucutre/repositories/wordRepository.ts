import Word from "../../interfaces/Word";
import databaseContext from "../context/context";

class WordRepository{
    async getRandomWord() : Promise<Word[]> {
        const words = await databaseContext.table("Words");
        return words;
    }
}

export default WordRepository;