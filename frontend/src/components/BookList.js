import React from "react";

const BookList = ({ books, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "read":
        return "status-read";
      case "reading":
        return "status-reading";
      case "want-to-read":
        return "status-want";
      default:
        return "";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "read":
        return "✅ Read";
      case "reading":
        return "📖 Reading";
      case "want-to-read":
        return "📚 Want to Read";
      default:
        return status;
    }
  };

  const renderStars = (rating) => {
    if (!rating) return <span className="no-rating">No rating</span>;
    return "⭐".repeat(rating);
  };

  if (books.length === 0) {
    return (
      <div className="book-list">
        <h2>Your Books</h2>
        <div className="empty-state">
          <p>No books added yet. Start by adding your first book above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="book-list">
      <h2>Your Books ({books.length})</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <div className="book-header">
              <h3 className="book-title">{book.title}</h3>
              <span className={`book-status ${getStatusColor(book.status)}`}>
                {getStatusText(book.status)}
              </span>
            </div>

            <p className="book-author">by {book.author}</p>

            {book.rating && (
              <div className="book-rating">{renderStars(book.rating)}</div>
            )}

            {book.notes && (
              <div className="book-notes">
                <p>
                  <strong>Notes:</strong> {book.notes}
                </p>
              </div>
            )}

            <div className="book-actions">
              <button className="btn btn-edit" onClick={() => onEdit(book)}>
                ✏️ Edit
              </button>
              <button
                className="btn btn-delete"
                onClick={() => onDelete(book._id)}
              >
                🗑️ Delete
              </button>
            </div>

            <div className="book-date">
              Added: {new Date(book.dateAdded).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
