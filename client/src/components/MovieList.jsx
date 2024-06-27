import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  deleteMovie,
  toggleWatched,
} from "../features/movies/moviesSlice";
import { Link } from "react-router-dom";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  const handleToggleWatched = (id) => {
    dispatch(toggleWatched(id));
  };

  return (
    <div>
      <h1>Movie Watchlist</h1>
      <Link to="/add">Add Movie</Link>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
            <button onClick={() => handleToggleWatched(movie._id)}>
              {movie.watched ? "Unwatch" : "Watch"}
            </button>
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
