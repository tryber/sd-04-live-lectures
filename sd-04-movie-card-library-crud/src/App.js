import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { EditMovie, MovieList, NewMovie, MovieDetails, NotFound } from './pages';
import './App.css';

import data from './services/movieData';

function App() {
  localStorage.setItem('movies', JSON.stringify(data));

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:movieId/edit" component={EditMovie} />
        <Route path="/movies/:movieId" component={MovieDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
