import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import {
  deleteMovie,
  toggleWatched,
  reviewMovie,
} from "../features/movies/moviesSlice";

const MovieDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie._id === id)
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleDelete = () => {
    dispatch(deleteMovie(movie._id));
    history.push("/");
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
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>{movie.releaseYear}</p>
      <p>{movie.genre}</p>
      <p>{movie.watched ? "Watched" : "Unwatched"}</p>
      <button onClick={handleToggleWatched}>
        {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
      </button>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${movie._id}`}>Edit</Link>
      <form onSubmit={handleReview}>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            defaultValue={movie.rating}
            min="1"
            max="5"
            required
          />
        </label>
        <label>
          Review:
          <textarea name="review" defaultValue={movie.review}></textarea>
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default MovieDetails;
