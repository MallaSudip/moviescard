import React from "react";
import '../css/moviecard.css'

import {Link} from 'react-router-dom'
const Moviecard = ({movies}) => {
  return (
    <Link  to ={`/movie/${movies.id}`} style ={{textDecoration:"none"}}>
    <div className="movies-card">
      <div className="cardPoster_wrapper">
        <img
          src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
          alt={movies.original_path}
        />
      </div>

      <div className="titleDescription_wrapper">
        {movies.original_title}
        <span className= "release_date">({movies.release_date})</span>
      </div>
      </div>
      </Link>
  );
};

export default Moviecard;
