import { prisma } from "../prisma";

class getCommentServices {
    async execute(){
        const comments = await prisma.comment.findMany({
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