const Card = ({ movie }) => {
  return (
    <div className="w-[350px] h-[500px] mx-auto border border-white">
      <img src={movie.imageSet.verticalPoster} alt={movie.originalTitle} />
      <h1>{movie.originalTitle}</h1>
      <p>{movie.releaseYear}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default Card;
