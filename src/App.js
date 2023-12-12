
import { useState } from 'react';
import './App.css';
import Movielist from './Movielist';
import Moviedata from './Moviedata';
import Addmovie from './Addmovie';
import Filter from './Filter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './MovieDetails';


function App() {
  const [movies, setMovies] = useState(Moviedata);
  const [input, setInput] = useState('');
  const [rating, setRating] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const addM = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Filter setInput={setInput} setRating={setRating} />
            <Movielist movies={movies} input={input} rating={rating} />
            <Addmovie addM={addM} />
          </Route>
          {/* Add a route for movie details page */}
          <Route path="/movies/:id" render={(props) => <MovieDetails {...props} setSelectedMovie={setSelectedMovie} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


