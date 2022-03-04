import User from "../entities/user";
import { getByUsernameAsync } from "../infrastrucutre/repositories/user.repository";

export const authenticateAsync = async (username: string, password: string): Promise<boolean> => {
    const user = await getByUsernameAsync(username);

    if(user == null)
        return false;

    if(user.Password != password)
        return false;

    return true;
}

export const getUserByUsernameAsync = 
    async (username: string): Promise<User> => await getByUsernameAsync(username);