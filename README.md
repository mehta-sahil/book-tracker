# 📚 Book Tracker

A simple and elegant book tracking application built with the MERN stack (MongoDB, Express, React, Node.js).

## ✨ Features

- **Add Books**: Track books you want to read, are currently reading, or have finished
- **Book Details**: Store title, author, status, notes, and ratings (1-5 stars)
- **CRUD Operations**: Create, read, update, and delete books
- **Status Tracking**: Three reading statuses - Want to Read, Currently Reading, Read
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd book-tracker
   ```

2. **Install all dependencies**

   ```bash
   npm run install-all
   ```

3. **Set up MongoDB**

   - **Option 1: Local MongoDB**

     - Install MongoDB locally
     - Start MongoDB service
     - The app will connect to `mongodb://localhost:27017/book-tracker`

   - **Option 2: MongoDB Atlas**
     - Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
     - Create a cluster and get your connection string
     - Create a `.env` file in the `backend` folder:
       ```
       MONGO_URI=your_mongodb_atlas_connection_string
       PORT=5000
       ```

4. **Start the application**

   ```bash
   npm start
   ```

   This will start both the backend server (port 5000) and frontend (port 3000) concurrently.

### Manual Start (Alternative)

If you prefer to run services separately:

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

## 📁 Project Structure

```
book-tracker/
│
├── backend/                 # Node.js + Express server
│   ├── server.js           # Main server file
│   ├── models/
│   │   └── Book.js         # MongoDB Book model
│   ├── routes/
│   │   └── bookRoutes.js   # API endpoints
│   └── config/
│       └── db.js           # Database connection
│
├── frontend/                # React application
│   ├── src/
│   │   ├── App.js          # Main app component
│   │   ├── components/
│   │   │   ├── BookForm.js # Add/Edit book form
│   │   │   └── BookList.js # Display books list
│   │   └── services/
│   │       └── BookService.js # API service calls
│   └── package.json
│
└── package.json             # Root package.json
```

## 🔧 API Endpoints

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a specific book
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

## 📱 Usage

1. **Add a Book**: Fill out the form with title, author, status, notes, and rating
2. **View Books**: See all your books in a clean card layout
3. **Edit Books**: Click the edit button to modify book details
4. **Delete Books**: Remove books you no longer want to track
5. **Track Progress**: Update status as you progress through books

## 🎨 Technologies Used

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, CSS3
- **Database**: MongoDB
- **Development**: Nodemon, Concurrently

## 🔮 Future Enhancements

- User authentication
- Book categories/genres
- Reading progress tracking
- Book cover images
- Export/import functionality
- Reading statistics and insights

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the ISC License.

---

**Happy Reading! 📖✨**
