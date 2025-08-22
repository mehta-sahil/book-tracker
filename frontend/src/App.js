import React, { useState, useEffect } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookService from "./services/BookService";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const data = await BookService.getAllBooks();
      setBooks(data);
    } catch (error) {
      console.error("Error loading books:", error);
    }
  };

  const handleAddBook = async (bookData) => {
    try {
      const newBook = await BookService.createBook(bookData);
      setBooks([newBook, ...books]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleUpdateBook = async (id, bookData) => {
    try {
      const updatedBook = await BookService.updateBook(id, bookData);
      setBooks(books.map((book) => (book._id === id ? updatedBook : book)));
      setEditingBook(null);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await BookService.deleteBook(id);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📚 Book Tracker</h1>
        <p>Track your reading journey</p>
      </header>

      <main>
        <BookForm
          onSubmit={editingBook ? handleUpdateBook : handleAddBook}
          editingBook={editingBook}
          onCancel={() => setEditingBook(null)}
        />

        <BookList
          books={books}
          onEdit={handleEditBook}
          onDelete={handleDeleteBook}
        />
      </main>
    </div>
  );
}

export default App;
