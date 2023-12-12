import React, { useState } from 'react';
import Moviecard from './Moviecard';
import MovieDetails from './MovieDetails';

const Movielist = ({ movies, input, rating }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          {movies
            .filter((el) => el.title.includes(input) && el.rating >= rating)
            .map((el) => (
              <div key={el.id} onClick={() => handleClick(el)}>
                <Moviecard el={el} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Movielist;
