import axios from "axios";

const fetchGenres = async () => {
  try {
    const response = await axios.get(
      "https://streaming-availability.p.rapidapi.com/genres",
      {
        params: {
          output_language: "en",
        },
        headers: {
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
          "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};

export default fetchGenres;
