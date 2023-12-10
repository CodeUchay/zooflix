import React from "react";
import { movies } from "../Data/movies.js";
import MovieCard from "./MovieCard.js";
import {Link} from 'react-router-dom'

// This is just to show the latest menu on the homepage.
// It slices just the last 4 array of food
function MovieList() {
  return (
    <div className="container">
    <div className="px-6 lg:mx-5 lg:mt-6">
      {/*Header*/}
      <div className="flex justify-center items-center">

      <h1 className="font-bold text-2xl lg:text-3xl">
          Zooflix <span className="text-orange-500">Gallery</span>
        </h1>
        
      </div>
      {/* Menu container*/}
      <div className=" rounded p-6 lg:p-0">
      {/* Display foods */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 lg:m-5 lg:p-8 gap-6 bg-transparent rounded-2xl">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      </div>
    </div>
    </div>
  );
}

export default MovieList;
