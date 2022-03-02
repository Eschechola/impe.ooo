class WordController{

    async getWord(request: any, response: any){
        response.status(200).send({message: 'hello'})
    }
}

export default WordController;