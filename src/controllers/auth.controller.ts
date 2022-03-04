import { generateToken } from "../middlewares/authentication.middleware";
import { authenticateAsync, getUserByUsernameAsync } from "../services/user.service";

class AuthController{
    async login(request: any, response: any){
        const { username, password } = request.body;
        const isAuthenticated = await authenticateAsync(username, password);

        if(!isAuthenticated)
            response.status(401).send({
                message: "Username and/or password is invalid!",
                success: false,
                data: null
            });
        
        const user = await getUserByUsernameAsync(username);
        response.status(200).send({
            message: "Login successful!",
            success: true,
            data: {
                username: user.Username,
                email: user.Email,
                token: generateToken(user.Id, user.Username, user.Email) 
            }
        });
    }
}

export default AuthController;