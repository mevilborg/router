import React from 'react';
import { Link } from 'react-router-dom';


const MovieDetails = ({ movie, setSelectedMovie }) => {
  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <p>Trailer:</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={`${movie.title} Trailer`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/" onClick={() => setSelectedMovie(null)}>Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
