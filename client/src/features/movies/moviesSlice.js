import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get("/api/movies");
  return response.data;
});

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (newMovie) => {
    const response = await axios.post("/api/movies", newMovie);
    return response.data;
  }
);

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async (updatedMovie) => {
    const response = await axios.put(
      `/api/movies/${updatedMovie.id}`,
      updatedMovie
    );
    return response.data;
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (movieId) => {
    await axios.delete(`/api/movies/${movieId}`);
    return movieId;
  }
);

export const toggleWatched = createAsyncThunk(
  "movies/toggleWatched",
  async (movieId) => {
    const response = await axios.patch(`/api/movies/${movieId}/watched`);
    return response.data;
  }
);

export const reviewMovie = createAsyncThunk(
  "movies/reviewMovie",
  async ({ id, review }) => {
    const response = await axios.patch(`/api/movies/${id}/review`, review);
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(editMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex(
          (movie) => movie._id === action.payload._id
        );
        state.movies[index] = action.payload;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(
          (movie) => movie._id !== action.payload
        );
      })
      .addCase(toggleWatched.fulfilled, (state, action) => {
        const index = state.movies.findIndex(
          (movie) => movie._id === action.payload._id
        );
        state.movies[index] = action.payload;
      })
      .addCase(reviewMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex(
          (movie) => movie._id === action.payload._id
        );
        state.movies[index] = action.payload;
      });
  },
});

export default moviesSlice.reducer;
