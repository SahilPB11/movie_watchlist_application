import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  deleteMovie,
  toggleWatched,
  reviewMovie,
} from "../features/movies/moviesSlice";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie._id === id)
  );

  if (!movie) {
    return (
      <div className="text-white flex items-center justify-center h-screen bg-black">
        <div className="text-center">
          <h1 className="text-3xl text-center font-bold mb-4">Movie not found</h1>
          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Back to List
          </Link>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    dispatch(deleteMovie(movie._id));
    navigate("/");
  };

  const handleToggleWatched = () => {
    dispatch(toggleWatched(movie._id));
  };

  const handleReview = (e) => {
    e.preventDefault();
    const review = {
      rating: e.target.rating.value,
      review: e.target.review.value,
    };
    dispatch(reviewMovie({ id: movie._id, review }));
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <p className="text-lg mb-4">{movie.description}</p>
        <p className="text-lg mb-2">Release Year: {movie.releaseYear}</p>
        <p className="text-lg mb-2">Genre: {movie.genre}</p>
        <p className="text-lg mb-4">
          Status:{" "}
          <span
            className={`${
              movie.watched ? "text-green-600" : "text-red-600"
            } font-semibold`}
          >
            {movie.watched ? "Watched" : "Unwatched"}
          </span>
        </p>
        <div className="flex items-center mb-4">
          <button
            onClick={handleToggleWatched}
            className={`${
              movie.watched
                ? "bg-red-500 hover:bg-red-600"
                : "bg-black hover:bg-gray-700"
            } text-white font-bold py-2 px-4 rounded focus:outline-none mr-2`}
          >
            {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Delete
          </button>
          <Link
            to={`/edit/${movie._id}`}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none"
          >
            Edit
          </Link>
        </div>
        <form onSubmit={handleReview} className="max-w-md">
          <label className="block mb-2">
            Rating:
            <input
              type="number"
              name="rating"
              defaultValue={movie.rating}
              min="1"
              max="5"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <label className="block mb-4">
            Review:
            <textarea
              name="review"
              defaultValue={movie.review}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieDetails;
