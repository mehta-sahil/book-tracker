const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['read', 'reading', 'want-to-read'],
    default: 'want-to-read'
  },
  notes: {
    type: String,
    trim: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
