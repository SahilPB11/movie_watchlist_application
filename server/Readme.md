## 💻 Movie Watchlist Server 🎬

This repository houses the backend server for a movie watchlist application. It's built with Node.js, Express, and MongoDB to handle data storage and API interactions. 

### 📂 Project Structure

```
server/
├── routes
│   └── movieRoutes.js
└── models
    └── movieModel.js
└── config
    └── db.js
├── index.js
└── controller
    └── movieController.js
```

### 🚀  Key Features

- **Movie Management APIs:** Provides RESTful endpoints for managing movie data:
    - **GET /api/movies:** Retrieve all movies in the watchlist.
    - **POST /api/movies:** Create a new movie entry.
    - **PUT /api/movies/:id:** Update an existing movie.
    - **DELETE /api/movies/:id:** Delete a movie from the watchlist.
    - **PATCH /api/movies/:id/watched:** Toggle the 'watched' status of a movie.
    - **PATCH /api/movies/:id/review:** Submit a review for a movie.
- **MongoDB Integration:** Uses MongoDB as the database for storing movie information.
- **Express.js:** Provides the framework for building the RESTful API server.
- **CORS:** Allows cross-origin requests from the frontend application.

### ⚙️ Technologies Used

- **Node.js:**  JavaScript runtime environment for running the server.
- **Express.js:**  A web application framework for building APIs.
- **MongoDB:**  A NoSQL database for storing movie data.
- **Mongoose:**  An ODM (Object Document Mapper) for interacting with MongoDB.
- **dotenv:**  For loading environment variables from a `.env` file.
- **cors:**  For enabling cross-origin requests.

###  🚀  Getting Started


1. **Clone the repository:**
   ```bash
   git clone https://github.com/SahilPB11/movie_watchlist_application.git
   ```
2. **Go in server Directory:**
   ```bash
   cd ./server
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables:
     ```
     MONGO_URL=your_mongodb_connection_string
     PORT=your_server_port
     ```
4. **Start the server:**
   ```bash
   npm run start
   ```

### 🤝 Contribution

Contributions are welcome! Please follow the standard GitHub workflow for contributing to the project.

### 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### 💪  Let's build a fantastic movie watchlist together! 🎥 
