import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddEditMoviePage from "./pages/AddEditMoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import axios from "axios";
import Header from "./components/Header";

// Set axios default
axios.defaults.baseURL ="https://movie-watchlist-application-ing9.onrender.com/";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEditMoviePage />} />
        <Route path="/edit/:id" element={<AddEditMoviePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
