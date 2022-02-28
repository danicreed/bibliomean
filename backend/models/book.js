const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  userId: String,
  name: String,
  description: String,
  gender: String,
  city: String,
  pages: String,
  author: String,
  imageUrl: String,
  date: {
    type: date,
    default: Date.now,
  },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
