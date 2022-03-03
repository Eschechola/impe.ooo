import Word from "../interfaces/Word";
import WordRepository from "../infrastrucutre/repositories/wordRepository";

class WordService{
    wordRepository = new WordRepository();

    async getRandomWord() : Promise<Word[]>{
        return await this.wordRepository.getRandomWord();
    }
}

export default WordService;