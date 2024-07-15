import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "../api/fetchMovies";
import Card from "../components/Card";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { genre } = useParams();

  const getMovies = async () => {
    const movies = await fetchMovies(genre);
    setMovies(movies.shows);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [genre]);

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <img src="/loader.svg" alt="Loading..." />
        </div>
      ) : (
        <main className="h-full w-full bg-black/80 text-white">
          <h1 className="pt-10 py-2 text-5xl text-center font-bold capitalize text-transparent bg-gradient-to-b from-lime-400 to-cyan-700 bg-clip-text ">
            {genre} Movies
          </h1>
          <section className="w-full pb-24">
            <div className="w-full mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Movies;
