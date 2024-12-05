import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p className="">{movie.Year}</p>
      </div>

      <div>
        {/* movie image */}
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt=""
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default Movie;
