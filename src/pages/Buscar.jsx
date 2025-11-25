import { useState } from "react";

function Buscar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const buscarPelis = async (texto) => {
    setQuery(texto);

    if (texto.length < 2) {
      setResults([]);
      return;
    }

    const apiKey = "TU_API_KEY_AQUI"; // cambia esto por tu key de TMDB
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${texto}`;

    const res = await fetch(url);
    const data = await res.json();

    setResults(data.results || []);
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>Buscar películas</h1>

      <input
        type="text"
        placeholder="Escribe un título..."
        value={query}
        onChange={(e) => buscarPelis(e.target.value)}
        style={{ width: "100%", padding: "10px", marginTop: "10px" }}
      />

      <div style={{ marginTop: "20px" }}>
        {results.length === 0 && query.length >= 2 && (
          <p>No se encontraron películas.</p>
        )}

        {results.map((m) => (
          <div key={m.id} style={{ marginBottom: "12px" }}>
            <strong>{m.title}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buscar;
