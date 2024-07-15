import { useEffect, useState } from "react";
import fetchGenres from "../api/fetchGenres";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getGenres = async () => {
      try {
        const genreData = await fetchGenres();
        setGenres(genreData);
      } catch (error) {
        console.error("Failed to fetch genres");
      }
    };

    getGenres();
  }, []);

  const handleChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleClick = () => {
    if (selectedGenre) {
      setError(null);
      navigate(`/movies/${selectedGenre}`);
    } else {
      setError("Please select a genre");
    }
  };

  return (
    <main className="h-screen bg-black/90 text-white flex flex-col gap-5 justify-center items-center">
      <h1 className="pt-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-rose-600">
        ScreenMate
      </h1>
      <p className="text-2xl text-green-300 font-semibold tracking-wider">
        Find Movies That Match Your Mood – Pick a Genre!
      </p>
      <div className="bg-gray-700 rounded-lg">
        <select
          className="mx-2 py-2 text-2xl bg-gray-700 rounded-lg outline-none"
          value={selectedGenre}
          onChange={handleChange}
        >
          <option value="">Select a Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={() => handleClick(selectedGenre)}
        className="px-14 py-2 mt-5 text-2xl rounded-full bg-gradient-to-r from-fuchsia-700 to-rose-600"
      >
        Search
      </button>
    </main>
  );
};

export default Home;
