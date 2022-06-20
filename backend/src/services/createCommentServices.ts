import { prisma } from "../prisma";

class createCommentServices {
    async execute(comment: string){
        const comments = await prisma.comment.create({
          data: {
            comment,
          },
        });

        return comments;
    }
}

export { createCommentServices }