import React, { useState, useEffect } from "react";

const BookForm = ({ onSubmit, editingBook, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: "want-to-read",
    notes: "",
    rating: "",
  });

  useEffect(() => {
    if (editingBook) {
      setFormData({
        title: editingBook.title || "",
        author: editingBook.author || "",
        status: editingBook.status || "want-to-read",
        notes: editingBook.notes || "",
        rating: editingBook.rating || "",
      });
    } else {
      setFormData({
        title: "",
        author: "",
        status: "want-to-read",
        notes: "",
        rating: "",
      });
    }
  }, [editingBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      rating: formData.rating ? parseInt(formData.rating) : undefined,
    };

    if (editingBook) {
      onSubmit(editingBook._id, submitData);
    } else {
      onSubmit(submitData);
      setFormData({
        title: "",
        author: "",
        status: "want-to-read",
        notes: "",
        rating: "",
      });
    }
  };

  const handleCancel = () => {
    onCancel();
    setFormData({
      title: "",
      author: "",
      status: "want-to-read",
      notes: "",
      rating: "",
    });
  };

  return (
    <div className="book-form">
      <h2>{editingBook ? "Edit Book" : "Add New Book"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter book title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author *</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            placeholder="Enter author name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="want-to-read">Want to Read</option>
            <option value="reading">Currently Reading</option>
            <option value="read">Read</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Add your thoughts about the book"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating (1-5)</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="">No rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingBook ? "Update Book" : "Add Book"}
          </button>
          {editingBook && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookForm;
