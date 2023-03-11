import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import '../css/home.css'
import MoviesList from "./MoviesList";
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getdata(){

      const moviesdata = await  fetch(
         `https://api.themoviedb.org/3/movie/now_playing?api_key=5e65a49b82f892b6a6ad0892040931b4&language=en-US&page=1`
       );
       const res = await moviesdata.json();
       console.log(res.results)
       setMovies(()=>{
         return res.results;
       })
         }
    getdata()
    },[]);
  return (
    <div className="home_wrapper">
      <Carousel
        autoPlay={true}
        infiniteLoop = {true}
        showThumbs ={false}
        showStatus={false}
        useKeyboardArrows={true}
        transitionTime={3}
      >
        {movies.map((movie) => {
          return(
            
            <div key={movie.id} className = "poster_wrapper">
              <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
                <div className="backdrop_images">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                    alt="movies_title"
                  />
                </div>
  
                <div className="moviesInfo_wrapper">
                  <div className="movies_title">
                    {movie ? movie.original_title : ""}
                  </div>
  
                  <div className="dateRating_wrapper">
                    {movie ? movie.release_date : ""}
  
                    <span className="movies_rating">
                      {movie ? movie.vote_average : ""}
                      <StarOutlineIcon />
                    </span>
                  </div>
  
                  <div className="movies_overview">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </Carousel>
      <MoviesList />
    </div>
  );
};

export default Home;
