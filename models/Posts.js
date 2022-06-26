var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  text: String,
  upvotes: {type: Number, default: 0},
  upvoted: Boolean,
  downvoted: Boolean,
  views: {type: Number, default: 0},
  author: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.upvoted = true;
  this.dowvoted = false;
  this.save(cb);
};

PostSchema.methods.downvote = function (cb) {
  this.upvotes -= 1;
  this.upvoted = false;
  this.downvoted = true;
  this.save(cb);
};

mongoose.model('Post', PostSchema);
