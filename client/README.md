## 🎬 Movie Watchlist Application 🎬

This project is a React application built to help you keep track of your movie watchlist. 🍿 It leverages the power of Redux for state management and Tailwind CSS for a sleek and modern look.

### 📁 Project Structure

Here's a glimpse into the project's structure:

- **src:** The heart of the application, containing all the code.
  - **components:** Reusable UI building blocks for the app.
    - **Header.js:** The app's navigation bar, featuring a link to add movies and the app title.
    - **MovieDetail.js:** Presents the details of a selected movie - title, description, release year, genre, watched status, review, and actions to edit, delete, mark as watched/unwatched, and submit a review.
    - **MovieForm.js:** The form for adding or editing movie information.
    - **MovieList.js:** Displays your movie watchlist with options to watch/unwatch and delete movies.
  - **features:** Handles the logic behind the app's features.
    - **movies:** Manages all movie-related operations.
      - **moviesSlice.js:** The Redux slice for keeping track of your movie data. It handles actions like fetching movies, adding, editing, deleting, marking as watched, and submitting reviews.
  - **pages:** Defines the different sections of the app.
    - **AddEditMoviePage.js:** The page that holds the movie form for adding or editing movies.
    - **HomePage.js:** The main page where you see your movie list.
    - **MovieDetailsPage.js:** The page that displays the details of a single movie.
  - **App.js:** The main component that orchestrates the entire application.
- **vite.config.js:** Configures the development server and build process.
- **tailwind.config.js:** Customizes Tailwind CSS to style the app.
- **package.json:** Defines project dependencies and scripts.

### ✨ Functionality

This app lets you:

1. **Add Movies 🎬:**

   - Navigate to the "Add Movie" page.
   - Use the form to enter the movie's details: title, description, release year, and genre.
   - Submit the form, and the movie magically appears in your watchlist!

2. **View Movies 🍿:**

   - The "Home" page presents your movie watchlist.
   - Each movie shows its title and gives you options to watch/unwatch and delete it.
   - Click a movie title to see more details.

3. **Movie Details 🔎:**

   - The "Movie Details" page provides a complete view of a movie, including:
     - Title
     - Description
     - Release Year
     - Genre
     - Watched status (whether you've seen it or not)
     - Review (if you've added one)
   - You can also:
     - Edit the movie's information.
     - Delete the movie from your list.
     - Mark the movie as watched/unwatched.
     - Leave a review about the movie.

4. **Edit Movies 📝:**

   - Go to the "Edit Movie" page for the movie you want to change.
   - The form is pre-filled with the movie's existing data.
   - Submit your edits, and the movie's information is updated!

5. **Delete Movies 🗑️:**

   - Remove movies from your watchlist.
   - A confirmation prompt pops up before deleting, preventing accidental removals.

6. **Mark as Watched/Unwatched 👁️👀:**

   - Keep track of which movies you've seen.
   - The watched status is updated on the movie list and details page.

7. **Review Movies ✍️:**
   - Share your thoughts on the movies you've seen.
   - Add a rating and a written review.
   - Your review will be displayed on the movie's details page.

### 🛠️ Technology Stack

- **React:** The powerful JavaScript library for building user interfaces.
- **Redux:** A state management library to handle the application's data efficiently.
- **Tailwind CSS:** A CSS framework for styling the app with ease.
- **Axios:** A library for making HTTP requests.
- **Vite:** A lightning-fast development server and build tool.

### 🚀 Running the Application

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

### 🤝 Contribution

We welcome contributions! Please follow the standard GitHub workflow for contributing to the project.

### 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
