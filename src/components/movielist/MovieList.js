import React, { useEffect, useState } from "react";
import "./movielist.css";

const MovieListCard = ({ data }) => {
  return (
    <div className="moviecard">
      <img className="movieposter" src={data.show.image?.medium} alt="" />
      <div className="movieInfo">
        <h1>{data.show.name}</h1>
      </div>
    </div>
  );
};

const MovieList = () => {
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="movielist-container">
      {console.log(movieData)}
      {movieData &&
        movieData.map((value, key) => {
          return <MovieListCard data={value} kay={key} />;
        })}
    </div>
  );
};

export default MovieList;
