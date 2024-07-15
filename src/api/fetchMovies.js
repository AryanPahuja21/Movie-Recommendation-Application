import axios from "axios";

const fetchMovies = async ({ genre }) => {
  try {
    const response = await axios.get(
      "https://streaming-availability.p.rapidapi.com/shows/search/filters",
      {
        params: {
          series_granularity: "show",
          order_direction: "asc",
          order_by: "original_title",
          genres: "action",
          output_language: "en",
          show_type: "movie",
          country: "US",
        },
        headers: {
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
          "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export default fetchMovies;
