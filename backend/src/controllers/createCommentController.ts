import { Request, Response } from "express";
import { createCommentServices } from "../services/createCommentServices";

class createCommentController {
    async handle(request: Request, response: Response){
        const { comment } = request.body;

        const service = new createCommentServices();

        const result = await service.execute(comment);

        return response.status(201).json(result);
    }
}
export { createCommentController }