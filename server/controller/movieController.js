import Movie from "../models/movieModel.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addMovie = async (req, res) => {
  const { title, description, releaseYear, genre } = req.body;
  const newMovie = new Movie({ title, description, releaseYear, genre });

  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const editMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const toggleWatched = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    movie.watched = !movie.watched;
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reviewMovie = async (req, res) => {
  const { rating, review } = req.body;
  try {
    const movie = await Movie.findById(req.params.id);
    movie.rating = rating;
    movie.review = review;
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
