import axios from "axios";

const API_URL = "/api/movies";

export const fetchMoviesAPI = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addMovieAPI = async (movie) => {
  const response = await axios.post(API_URL, movie);
  return response.data;
};

export const editMovieAPI = async (movie) => {
  const response = await axios.put(`${API_URL}/${movie._id}`, movie);
  return response.data;
};

export const deleteMovieAPI = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};

export const toggleWatchedAPI = async (id) => {
  const response = await axios.patch(`${API_URL}/${id}/watched`);
  return response.data;
};

export const reviewMovieAPI = async (id, review) => {
  const response = await axios.patch(`${API_URL}/${id}/review`, review);
  return response.data;
};
