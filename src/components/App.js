import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const title = "Mad Max";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      <MovieCard title={title} genres={genresArr} />
    </div>
  );
}

// child component
function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={poster.postersrc} alt={props.title} />
      <h2>{props.title}</h2>
      <small>{props.genre.join(", ")}</small>
      </div>
  );
}
function socialMedia({socialLinks: {github, linkedin}}) {
  return(
    <div>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default App;
