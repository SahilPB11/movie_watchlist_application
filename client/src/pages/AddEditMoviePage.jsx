import React from "react";
import { useParams } from "react-router-dom";
import MovieForm from "../components/MovieForm";
import { useSelector } from "react-redux";

const AddEditMoviePage = () => {
  const { id } = useParams();
  const existingMovie = useSelector((state) =>
    state.movies.movies.find((movie) => movie._id === id)
  );

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">
        {id ? "Edit Movie" : "Add Movie"}
      </h1>
      <MovieForm existingMovie={existingMovie} />
    </div>
  );
};

export default AddEditMoviePage;
