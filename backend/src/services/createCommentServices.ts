import prismaClient from "../prisma";

class createCommentServices {
    async execute(comment: string){
        const comments = await prismaClient.comment.create({
          data: {
            comment,
          },
        });

        return comments;
    }
}

export { createCommentServices }