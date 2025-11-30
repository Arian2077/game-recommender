import { useState } from "react";
import API from "../api";

function Genres() {
  const genreOptions = [
    "Action", "Adventure", "RPG", "Shooter",
    "Strategy", "Simulation", "Sports",
    "Racing", "Puzzle"
  ];

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const getRecommendations = () => {
    API.post("/recommend/", { genres: selectedGenres })
      .then(res => {
        setRecommendations(res.data.recommendations);
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Select Your Favorite Genres</h1>

      <div style={{ marginTop: "20px" }}>
        {genreOptions.map((genre) => (
          <button
            key={genre}
            onClick={() => toggleGenre(genre)}
            style={{
              margin: "5px",
              padding: "10px 15px",
              borderRadius: "6px",
              background: selectedGenres.includes(genre) ? "#4caf50" : "#eee",
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <button
        onClick={getRecommendations}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#007bff",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Get Recommendations
      </button>

      {recommendations.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Recommendations:</h2>
          <ul>
            {recommendations.map((game, index) => (
              <li key={index}>{game}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Genres;
