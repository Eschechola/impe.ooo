import Word from "../../interfaces/Word";
import databaseContext from "../context/context";

export const getAllAsync = 
    async (): Promise<Word[]> => await databaseContext.table("Words");
