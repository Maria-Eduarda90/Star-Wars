import { Request, Response } from 'express';
import { getCommentServices } from '../services/getCommentServices';

class getCommentController {
    async handle(request: Request, response: Response){
        const service = new getCommentServices();
        
        const result = await service.execute();

        return response.json(result);
    }
}

export { getCommentController };