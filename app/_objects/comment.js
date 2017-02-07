"use strict";
var Comment = (function () {
    function Comment(id, product, created_by, rate, text, created_at) {
        this.id = id;
        this.product = product;
        this.created_by = created_by;
        this.rate = rate;
        this.text = text;
        this.created_at = created_at;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map