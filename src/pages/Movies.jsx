import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "../api/fetchMovies";

const Movies = () => {
  const { genre } = useParams();

  useEffect(async () => {
    const getMovies = await fetchMovies(genre);
    console.log(getMovies);
  }, [genre]);

  return (
    <div>
      <h1>Movies: {genre}</h1>
    </div>
  );
};

export default Movies;
