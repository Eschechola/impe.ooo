import User from "../../entities/user";
import context from "../context/context";
import UserModel from "../models/user.model";

context.sync();

export const getByUsernameAsync = 
    async (username: string): Promise<User> => await UserModel.findOne({ where: { Username: username } }) as User;