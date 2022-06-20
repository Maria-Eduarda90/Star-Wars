import prismaClient from "../prisma";

class getCommentServices {
    async execute(){
        const comments = await prismaClient.comment.findMany({
            select: {
                id: true,
                comment: true,
                created_at: true,
            }
        });

        return comments;
    }
}
export { getCommentServices };