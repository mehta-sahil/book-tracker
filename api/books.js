const mongoose = require('mongoose');

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
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = async (req, res) => {
  await connectDB();

  const { method, query, body } = req;

  // /api/books/[id]
  const id = query.id;

  try {
    if (method === 'GET') {
      if (id) {
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        return res.json(book);
      } else {
        const books = await Book.find().sort({ dateAdded: -1 });
        return res.json(books);
      }
    }

    if (method === 'POST') {
      const book = new Book(body);
      const savedBook = await book.save();
      return res.status(201).json(savedBook);
    }

    if (method === 'PUT') {
      if (!id) return res.status(400).json({ message: 'Missing book id' });
      const updatedBook = await Book.findByIdAndUpdate(id, body, { new: true, runValidators: true });
      if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
      return res.json(updatedBook);
    }

    if (method === 'DELETE') {
      if (!id) return res.status(400).json({ message: 'Missing book id' });
      const deletedBook = await Book.findByIdAndDelete(id);
      if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
      return res.json({ message: 'Book deleted successfully' });
    }

    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${method} Not Allowed`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};