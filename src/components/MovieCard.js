import React from "react";
//without Destructuring
function MovieCard({title, posterSrc, genres}) {
  return (
    <div className="movie-card">
      <img src={prop.posterSrc} alt={prop.title} />
      <h2>{prop.title}</h2>
      <small>{prop.genres.join(", ")}</small>
    </div>
  );
}

// with Destructuring
function MovieCard({
  title, 
  postersrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
   genres
  }) {
  return(
    <div className="movie-card">
      <img src={postersrc} alt={title}/>
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  )
}
export default MovieCard;
