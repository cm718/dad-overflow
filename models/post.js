//Post//
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create an new schema for MongoDB
const postSchema = new Schema({

  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now }

});
//Models defined on the mongoose instance are available to all connection created
const Post = mongoose.model("Post", postSchema);
//export the Comment schema 
module.exports = Post;