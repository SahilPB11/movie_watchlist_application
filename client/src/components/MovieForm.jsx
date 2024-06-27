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
    // Optional: Reset form fields after submission
    setMovie({
      title: "",
      description: "",
      releaseYear: "",
      genre: "",
    });
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-gray-800">
          Title:
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            required
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-gray-800">
          Description:
          <textarea
            name="description"
            value={movie.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
          ></textarea>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-gray-800">
          Release Year:
          <input
            type="number"
            name="releaseYear"
            value={movie.releaseYear}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter release year"
          />
        </label>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2 text-gray-800">
          Genre:
          <input
            type="text"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter genre"
          />
        </label>
      </div>
      <div className="flex items-center justify-end">
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {existingMovie ? "Update" : "Save"}
        </button>
      </div>
    </form>
  );
};

export default MovieForm;
