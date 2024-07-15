const Card = ({ movie }) => {
  return (
    <div className="border border-white">
      <img src={movie.imageSet.verticalPoster} alt={movie.originalTitle} />
      <h1>{movie.originalTitle}</h1>
      <p>{movie.releaseYear}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default Card;
