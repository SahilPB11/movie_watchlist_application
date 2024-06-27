import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie, editMovie } from "../features/movies/moviesSlice";

const MovieForm = ({ existingMovie }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    releaseYear: "",
    genre: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (existingMovie) {
      setMovie(existingMovie);
    }
  }, [existingMovie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingMovie) {
      dispatch(editMovie(movie));
    } else {
      dispatch(addMovie(movie));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={movie.description}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Release Year:
        <input
          type="number"
          name="releaseYear"
          value={movie.releaseYear}
          onChange={handleChange}
        />
      </label>
      <label>
        Genre:
        <input
          type="text"
          name="genre"
          value={movie.genre}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default MovieForm;
