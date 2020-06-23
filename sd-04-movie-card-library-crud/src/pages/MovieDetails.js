import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: [],
    };
  }

  componentDidMount() {
    const { match: { params: { movieId } } } = this.props;

    movieAPI.getMovie(movieId)
      .then((movie) => {
        this.setState({
          status: 'loaded',
          movie,
        });
      });
  }

  render() {
    const { status, movie } = this.state;
    if (status === 'loading') return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: { movieId } } } = this.props;

    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img alt="Movie Cover" src={`../${imagePath}`} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
            </div>
            <div className="card-action">
              <Link to={`/movies/${movieId}/edit`}>Editar</Link>
              <Link to="/">Voltar</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
