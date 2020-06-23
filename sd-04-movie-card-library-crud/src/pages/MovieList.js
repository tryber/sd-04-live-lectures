import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import {Loading} from '../components';

class MovieList extends Component {
  _isMounted = false
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      movies: [],
    };
  }

  componentDidMount() {
    this._isMounted = true;

    movieAPI.getMovies().then(result => {
      this._isMounted && this.setState({
        status: 'loaded',
        movies: result,
      });
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {status, movies} = this.state;

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div className="movies">
        <div className="movie-list">
          {movies.map(movie => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
        <Link className="btn waves-effect waves-light add-movie" to="/movies/new">
          ADICIONAR CARTÃO
        </Link>
      </div>
    );
  }
}

export default MovieList;
