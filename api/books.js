const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, default: 'want-to-read' },
  notes: String,
  rating: Number,
  dateAdded: { type: Date, default: Date.now }
});

let Book;
try {
  Book = mongoose.model('Book');
} catch {
  Book = mongoose.model('Book', BookSchema);
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

app.get('/api/books', async (req, res) => {
  try {
    await connectDB();
    const books = await Book.find().sort({ dateAdded: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/books/:id', async (req, res) => {
  try {
    await connectDB();
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/books', async (req, res) => {
  try {
    await connectDB();
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put('/api/books/:id', async (req, res) => {
  try {
    await connectDB();
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/books/:id', async (req, res) => {
  try {
    await connectDB();
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
