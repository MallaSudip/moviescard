import React, { useState, useEffect } from "react";
import Moviecard from "./Moviecard";
import "../css/movielist.css";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import MovieDetail from "./MovieDetail";
const MoviesList = () => {
  const [movieslist, setMovielist] = useState([]);
  const [page, setPage] = useState(1);
  const { type } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=5e65a49b82f892b6a6ad0892040931b4&language=en-US&page=${page}`,
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setMovielist(data.results);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        }
        console.log("unmounted useEffect");
      });
    return () => {
      // isCanceled =false;
      controller.abort();
    };
  }, [type, page]);

  function nextPage() {
    setPage(page + 1);
  }
  function prevPage() {
    if (page === 1) {
      return setPage(page);
    } else {
      return setPage(page - 1);
    }
  }
  // if (!movieslist) {
  //   return (
  //     <>
  //       <MovieDetail />
  //     </>
  //   );
  // }
  return (
    <>
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="movies_list">
        {movieslist.map((movie) => (
          <div key={movie.id} className="cards">
            <Moviecard movies={movie} />
          </div>
        ))}
      </div>
      <Button variant="btn btn-info" onClick={nextPage}>
        Next Page
      </Button>
      <Button variant="btn btn-info" onClick={prevPage}>
        previous page{" "}
      </Button>
    </>
  );
};

export default MoviesList;
