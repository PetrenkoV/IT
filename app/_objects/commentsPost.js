"use strict";
var CommentPost = (function () {
    function CommentPost(body, postId, author, avatar) {
        this.body = body;
        this.postId = postId;
        this.author = author;
        this.avatar = avatar;
    }
    return CommentPost;
}());
exports.CommentPost = CommentPost;
//# sourceMappingURL=commentsPost.js.map