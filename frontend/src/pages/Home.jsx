function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🎮 Game Recommender</h1>
      <p>Welcome! Click below to see your game recommendations.</p>

      <a
        href="/recommend"
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        View Recommendations
      </a>
    </div>
  );
}

export default Home;
