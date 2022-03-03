import WordService from "../services/wordService";

class WordController{
    wordService = new WordService();

    async getWord(request: any, response: any){
        const words = await this.wordService.getRandomWord();
        response.status(200).send(words)
    }
}

export default WordController;