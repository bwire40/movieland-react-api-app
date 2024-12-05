import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./Components/SearchIcon";
import Movie from "./Components/Movie";
import { data } from "autoprefixer";

// 6da345e3

const API_URL = "http://www.omdbapi.com?apikey=6da345e3";

const App = () => {
  // state to manage our movies
  const [movies, setmovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  //   fetch our movies on searching
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  };

  useEffect(() => {
    // FETCH OUR MOVIES
    searchMovies();
  }, []);
  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Seacrh for Movies"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <div
            className="bg-black text-4xl cursor-pointer px-2 py-2"
            onClick={() => searchMovies(searchValue)}
          >
            search
          </div>
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <Movie movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
