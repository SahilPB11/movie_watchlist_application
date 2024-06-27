import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    releaseYear: Number,
    genre: String,
    watched: { type: Boolean, default: false },
    rating: Number,
    review: String,
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
