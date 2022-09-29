import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {movies.map((movie) => {
    return <div key = {movie.title} >
      Name: {movie.title}
      Time: {movie.time}
      Genres: <ul>
        {movie.genres.map((genre) => {
       return <li key = {genre}>{genre}</li>    
      })}
      </ul>
    </div>
  })}

</div>
}

export default Movies;
