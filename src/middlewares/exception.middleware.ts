import { Request, Response, NextFunction } from 'express';


export const exceptionHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
    response.status(200).send({
        message: "An internal server error has been ocurred, please try again.",
        success: false,
        data: null
    })
};