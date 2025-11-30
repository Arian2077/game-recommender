import { useEffect, useState } from "react";
import API from "../api";

function Recommendations() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    API.get("/recommend/")
      .then((response) => {
        setGames(response.data.recommendations);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Game Recommendations</h1>

      {games.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {games.map((game, index) => (
            <li key={index}>{game}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Recommendations;
