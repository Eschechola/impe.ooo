import { getRandomWordAsync } from "../services/word.service";

class WordController{
    async getWord(request: any, response: any){
        const word = await getRandomWordAsync();
        response.status(200).send(word)
    }
}

export default WordController;