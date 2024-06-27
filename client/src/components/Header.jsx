import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-500 py-4 mb-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-white text-2xl font-bold">
          Movie Watchlist
        </Link>
        <nav>
          <Link
            to="/add"
            className="text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300"
          >
            Add Movie
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
