import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Modal from "../components/Modal";
import moviesData from "../data/movies.json";

function Home() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>¡Tus películas favoritas!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div style={{ marginTop: "20px" }}>
        <label>Filtrar por rating: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(Number(e.target.value))}
        >
          <option value={0}>Todas</option>
          <option value={2}>⭐ +</option>
          <option value={4}>⭐⭐ +</option>
          <option value={6}>⭐⭐⭐ +</option>
          <option value={8}>⭐⭐⭐⭐ +</option>
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 180px)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {movies
          .filter((m) => m.vote_average >= filter)
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              openModal={() => setSelectedMovie(movie)}
            />
          ))}
      </div>

      <Modal movie={selectedMovie} close={() => setSelectedMovie(null)} />
    </div>
  );
}

export default Home;
