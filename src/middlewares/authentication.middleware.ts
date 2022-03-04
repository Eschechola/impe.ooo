import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.TOKEN_SECRET as string;

export const generateToken = (id: Number, name: String, email: String): String => {
    const payload =
    {
        id: id,
        name: name,
        email: email,
    };
    
    const options =
    {
        expiresIn: 36000
    }    

    return jwt.sign(payload, SECRET, options);
}

export const verifyToken = (request: any, response: any, next: any) => {
    var token = request.headers['authorization'] || request.headers['Authorization'];

    if (!token)
        response.status(401).send({
            message: "Token not found.",
            success: false,
            data: null
        });
    
    // removes "Bearer" word and mantains only token
    token = token.split(' ')[1];

    jwt.verify(token, SECRET, (err: any, decoded: any) => {
        if (err)
            response.status(401).send({
                message: "Token is invalid or expired.",
                success: false,
                data: null
            });
            
        next();
    });   
}