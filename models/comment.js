const { Schema, model } = require("mongoose");
const User = require("./user");

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "blog", // this gives the id of the blog on which the user  comments
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user", // this gives the id of the user that comments
    },
  },
  { timestamps: true }
);

const Comment = model("comment", commentSchema);
module.exports = Comment;
