import axios from "axios";

const API_URL = "http://localhost:5000/api/books";

class BookService {
  static async getAllBooks() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  }

  static async getBook(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching book:", error);
      throw error;
    }
  }

  static async createBook(bookData) {
    try {
      const response = await axios.post(API_URL, bookData);
      return response.data;
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  }

  static async updateBook(id, bookData) {
    try {
      const response = await axios.put(`${API_URL}/${id}`, bookData);
      return response.data;
    } catch (error) {
      console.error("Error updating book:", error);
      throw error;
    }
  }

  static async deleteBook(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting book:", error);
      throw error;
    }
  }
}

export default BookService;
