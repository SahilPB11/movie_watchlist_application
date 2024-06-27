## 🎬 Movie Watchlist: Your Ultimate Movie Companion 🎥

**Live Project -->😃 [https://sahil-movie-watchlist.netlify.app/](https://sahil-movie-watchlist.netlify.app/)**

This project is a comprehensive movie watchlist application, combining a sleek frontend with a robust backend. It's deployed and ready to use!

**Let's explore both sides of the coin:**

### 🌎 Frontend: Your Movie Management Hub

The frontend is built with React, Redux, and Tailwind CSS, offering a user-friendly experience for managing your movie collection. It's hosted on Netlify, making it easily accessible.

**Key Features:**

- **Add Movies 🎬:** Add movies to your watchlist with a simple form. Enter the movie's title, description, release year, and genre.
- **View Movies 🍿:** Browse your movie watchlist, organized neatly.
- **Movie Details 🔎:** Get a detailed view of each movie, including title, description, release year, genre, watched status, and user reviews.
- **Edit Movies 📝:** Update movie details as needed.
- **Delete Movies 🗑️:** Remove movies from your watchlist with a confirmation prompt.
- **Mark as Watched/Unwatched 👁️👀:** Keep track of which movies you've seen.
- **Review Movies ✍️:** Share your thoughts and ratings on movies you've watched.

**Technology Stack:**

- **React:** The powerful JavaScript library for building user interfaces.
- **Redux:** A state management library to handle the application's data efficiently.
- **Tailwind CSS:** A CSS framework for styling the app with ease.
- **Axios:** A library for making HTTP requests to communicate with the backend server.
- **Vite:** A lightning-fast development server and build tool.

**Running the Frontend:**

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
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Access the application:** Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### 💻 Backend: The Powerhouse Behind the Scenes

The backend is built with Node.js, Express, and MongoDB, handling data storage, API interactions, and ensuring a smooth flow of information. It's deployed on Render, ensuring reliable and scalable performance.

**Key Features:**

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

**Technology Stack:**

- **Node.js:** JavaScript runtime environment for running the server.
- **Express.js:** A web application framework for building APIs.
- **MongoDB:** A NoSQL database for storing movie data.
- **Mongoose:** An ODM (Object Document Mapper) for interacting with MongoDB.
- **dotenv:** For loading environment variables from a `.env` file.
- **cors:** For enabling cross-origin requests.

**Running the Backend:**

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
5. **Start the server:**
   ```bash
   npm run start
   ```

### 🤝 Contribution

Contributions are welcome! Please follow the standard GitHub workflow for contributing to the project.

### 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### 💪 Let's build a fantastic movie watchlist together! 🎥
