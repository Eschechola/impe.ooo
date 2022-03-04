import { getRandomWordAsync, createWordAsync } from "../services/word.service";

class WordController{
    async getWord(request: any, response: any){
        const word = await getRandomWordAsync();
        response.status(200).send({
            message: "Word found with success!",
            success: true,
            data: {
                word: word
            }
        })
    }

    async createWord(request: any, response: any){
        const { word } = request.body;

        const wordCreated = await createWordAsync(word);
        response.status(201).send({
            message: "Word created with success!",
            success: true,
            data: {
                word: wordCreated
            }
        })
    }
}

export default WordController;