import { Router } from "express";
import { createCommentController } from "../controllers/createCommentController";
import { getCommentController } from "../controllers/getCommentController";

const router = Router();

router.get('/comments', new getCommentController().handle);
router.post('/comments', new createCommentController().handle);

export { router };