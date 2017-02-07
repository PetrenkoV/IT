export class CommentPost {
    constructor(
        public body: string,
        public postId: number,
        public author: string,
        public avatar: string
    )
    {}
}