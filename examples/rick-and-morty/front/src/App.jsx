import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, [page]);

  return (
    <main>
      <h1>Rick and Morty</h1>
      <button className="plus" onClick={() => setPage(page + 1)}>
        +
      </button>
      <button
        className="minus"
        onClick={() => setPage(page === 1 ? 1 : page - 1)}
      >
        {" "}
        -{" "}
      </button>

      <section>
        {characters ? (
          characters.map((character, index) => (
            <article key={character.id}>
              <img src={character.image} alt="" />
              <p>{character.name}</p>
              <p>{character.status}</p>
              <p>{character.gender}</p>
            </article>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  );
}

export default App;
