const Card = ({ movie }) => {
  return (
    <div className="w-[330px] pb-5 mx-auto border border-white">
      <img src={movie.imageSet.verticalPoster.w720} alt={movie.originalTitle} />
      <div className="p-2">
        <h1 className="text-xl font-bold">
          {movie.originalTitle} ({movie.releaseYear})
        </h1>
        <h3 className="mt-4">
          <span className="font-semibold">Directed by: </span>
          {movie.directors.map((director) => director).join(", ")}
        </h3>
        <p className="mt-2">{movie.overview.slice(0, 100)}...</p>
        <div className="mt-5">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="font-semibold border border-blue-400 mr-2 rounded-full px-2 py-1 bg-blue-600 opacity-60"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
