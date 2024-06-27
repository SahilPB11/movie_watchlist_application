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
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovie(id));
    }
  };

  const handleToggleWatched = (id) => {
    dispatch(toggleWatched(id));
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center font-bold mb-6">Movie Watchlist</h1>
      <Link
        to="/add"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add Movie
      </Link>
      <ul className="w-full max-w-md">
        {movies.length === 0 ? (
          <li className="bg-white text-black rounded-lg shadow-md mb-4 p-4 text-center">
            No movies found. Add some movies to your watchlist!
          </li>
        ) : (
          movies.map((movie) => (
            <li
              key={movie._id}
              className="bg-white text-black rounded-lg shadow-md mb-4 p-4 flex items-center justify-between"
            >
              <Link
                to={`/movies/${movie._id}`}
                className="text-lg font-semibold"
              >
                {movie.title}
              </Link>
              <div>
                <button
                  onClick={() => handleToggleWatched(movie._id)}
                  className={`${
                    movie.watched
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-black hover:bg-gray-700"
                  } text-white font-bold py-2 px-4 rounded mr-2`}
                >
                  {movie.watched ? "Unwatch" : "Watch"}
                </button>
                <button
                  onClick={() => handleDelete(movie._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MovieList;
